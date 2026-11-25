import React, { useEffect, useState } from 'react';

export const NoiseOverlay: React.FC = () => {
  const [noiseUrl, setNoiseUrl] = useState<string>('');

  useEffect(() => {
    // Generate pre-rasterized 128x128 tactile film grain once to eliminate SVG feTurbulence GPU re-rasterization
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgData = ctx.createImageData(128, 128);
    const buf = new Uint32Array(imgData.data.buffer);
    for (let i = 0; i < buf.length; i++) {
      const rand = Math.random();
      if (rand < 0.14) {
        buf[i] = 0x24ffffff; // Soft white grain speckle
      } else if (rand < 0.28) {
        buf[i] = 0x24000000; // Soft dark grain speckle
      }
    }
    ctx.putImageData(imgData, 0, 0);
    setNoiseUrl(canvas.toDataURL('image/png'));
  }, []);

  if (!noiseUrl) return null;

  return (
    <div
      aria-hidden="true"
      className="hidden md:block fixed inset-0 pointer-events-none z-[80] opacity-[0.038] select-none"
      style={{
        backgroundImage: `url(${noiseUrl})`,
        backgroundRepeat: 'repeat',
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    />
  );
};

