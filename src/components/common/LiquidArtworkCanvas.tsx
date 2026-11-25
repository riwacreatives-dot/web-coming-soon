import React, { useRef, useEffect, useState } from 'react';

interface LiquidArtworkCanvasProps {
  imageSrc: string;
  alt: string;
  className?: string;
  intensity?: number;
  interactive?: boolean;
}

export const LiquidArtworkCanvas: React.FC<LiquidArtworkCanvasProps> = ({
  imageSrc,
  alt,
  className = '',
  intensity = 1.0,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext('webgl', { alpha: true, antialias: true }) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    if (!gl) {
      setHasWebGL(false);
      return;
    }

    let animationFrameId: number;
    let program: WebGLProgram;

    // Vertex Shader
    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) * 0.5;
        v_uv.y = 1.0 - v_uv.y;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment Shader: Viscous Liquid Displacement + Optical Chromatic Aberration
    const fsSource = `
      precision mediump float;
      uniform sampler2D u_texture;
      uniform vec2 u_mouse;
      uniform vec2 u_resolution;
      uniform float u_intensity;
      uniform float u_time;
      varying vec2 v_uv;

      void main() {
        vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
        vec2 uv_aspect = v_uv * aspect;
        vec2 mouse_aspect = u_mouse * aspect;

        float dist = distance(uv_aspect, mouse_aspect);
        
        // Multi-frequency damped liquid ripple wave
        float wave = sin(dist * 32.0 - u_time * 6.0) * exp(-dist * 6.5) * u_intensity;
        float waveSecondary = sin(dist * 18.0 - u_time * 3.5) * exp(-dist * 4.0) * u_intensity * 0.5;
        float totalWave = wave + waveSecondary;

        vec2 dir = normalize(uv_aspect - mouse_aspect + vec2(0.0001));
        vec2 distortedUv = clamp(v_uv + dir * totalWave * 0.045, 0.0, 1.0);

        // Subtle Optical Prismatic Aberration along liquid wave crests
        float r = texture2D(u_texture, clamp(distortedUv + dir * totalWave * 0.012, 0.0, 1.0)).r;
        float g = texture2D(u_texture, distortedUv).g;
        float b = texture2D(u_texture, clamp(distortedUv - dir * totalWave * 0.012, 0.0, 1.0)).b;

        // Subtle specular highlight on wave crest
        float specular = max(0.0, totalWave) * 0.25;

        gl_FragColor = vec4(r + specular, g + specular, b + specular, 1.0);
      }
    `;

    const compileShader = (source: string, type: number): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader compile failed:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) {
      setHasWebGL(false);
      return;
    }

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn('Program link failed:', gl.getProgramInfoLog(prog));
      setHasWebGL(false);
      return;
    }
    program = prog;

    // Full quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, 'a_position');
    const uTexture = gl.getUniformLocation(program, 'u_texture');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uIntensity = gl.getUniformLocation(program, 'u_intensity');
    const uTime = gl.getUniformLocation(program, 'u_time');

    // WebGL context lost recovery
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      setHasWebGL(false);
    };
    canvas.addEventListener('webglcontextlost', handleContextLost);

    // Load image texture
    const texture = gl.createTexture();
    const image = new Image();

    let isTextureReady = false;
    image.onload = () => {
      if (!gl) return;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      isTextureReady = true;
      setIsLoaded(true);
      resize();
    };
    image.onerror = () => {
      setHasWebGL(false);
    };
    image.src = imageSrc;

    // Mouse & Touch state & physics
    let currentMouse = { x: 0.5, y: 0.5 };
    let targetMouse = { x: 0.5, y: 0.5 };
    let currentIntensity = 0;
    let targetIntensity = 0;
    let startTime = performance.now();
    let isRendering = false;
    let isIntersecting = true;
    let hasPaintedInitial = false;

    function requestRender() {
      if (!isRendering && isIntersecting) {
        isRendering = true;
        animationFrameId = requestAnimationFrame(render);
      }
    }

    function render() {
      if (!gl || !canvas || !isIntersecting) {
        isRendering = false;
        return;
      }

      if (isTextureReady) {
        currentMouse.x += (targetMouse.x - currentMouse.x) * 0.12;
        currentMouse.y += (targetMouse.y - currentMouse.y) * 0.12;
        currentIntensity += (targetIntensity - currentIntensity) * 0.15;
        targetIntensity *= 0.92; // fluid viscosity decay

        const elapsed = (performance.now() - startTime) / 1000.0;

        gl.useProgram(program);

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.enableVertexAttribArray(aPosition);
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(uTexture, 0);

        gl.uniform2f(uMouse, currentMouse.x, currentMouse.y);
        gl.uniform2f(uResolution, canvas.width, canvas.height);
        gl.uniform1f(uIntensity, currentIntensity);
        gl.uniform1f(uTime, elapsed);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
        hasPaintedInitial = true;
      }

      // If fluid has completely settled to idle, pause the render loop to save battery
      if (hasPaintedInitial && currentIntensity < 0.001 && targetIntensity < 0.001) {
        isRendering = false;
        return;
      }

      animationFrameId = requestAnimationFrame(render);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !interactive) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const dx = x - targetMouse.x;
      const dy = y - targetMouse.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      targetMouse = { x, y };
      targetIntensity = Math.min(1.8, targetIntensity + speed * 12.0 * intensity);
      requestRender();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !interactive || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const x = (touch.clientX - rect.left) / rect.width;
      const y = (touch.clientY - rect.top) / rect.height;

      const dx = x - targetMouse.x;
      const dy = y - targetMouse.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      targetMouse = { x, y };
      targetIntensity = Math.min(1.8, targetIntensity + speed * 12.0 * intensity);
      requestRender();
    };

    const handleMouseLeave = () => {
      targetIntensity = 0;
    };

    const container = containerRef.current;
    if (container && interactive) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('touchmove', handleTouchMove, { passive: true });
    }

    // Pause WebGL rendering when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      if (isIntersecting) {
        requestRender();
      } else {
        isRendering = false;
        cancelAnimationFrame(animationFrameId);
      }
    });
    if (container) observer.observe(container);

    // Resize canvas
    const resize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      requestRender();
    };
    resize();
    window.addEventListener('resize', resize);

    requestRender();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      if (container) {
        observer.disconnect();
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('touchmove', handleTouchMove);
      }
      if (gl) {
        if (texture) gl.deleteTexture(texture);
        if (positionBuffer) gl.deleteBuffer(positionBuffer);
        if (program) gl.deleteProgram(program);
      }
    };
  }, [imageSrc, intensity, interactive]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {/* Solid High-Resolution Base Image (Always Visible & Preloaded) */}
      <img
        src={imageSrc}
        alt={alt}
        loading="eager"
        decoding="sync"
        className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
      />

      {/* Native WebGL Liquid Shader Canvas */}
      {hasWebGL && (
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />
      )}
    </div>
  );
};

