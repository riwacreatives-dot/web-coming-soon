import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const AboutRiwaSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#E7E7E9] dark:bg-[#0c0e12] border-y border-line-border transition-colors">
      <section
        id="about"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Eyebrow and Monumental Statement */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold block mb-3 select-none">
              08 / ABOUT RIWA
            </span>
            <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold uppercase tracking-tight text-text-primary leading-[1.05]">
              <span>WE'RE HERE</span><br />
              <span>TO MAKE</span><br />
              <span>THINGS</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
                matter
              </span><span className="text-brand-red font-bold">.</span>
            </h2>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line-border hover:border-brand-red text-text-primary font-mono text-xs uppercase tracking-wider transition-all cursor-pointer hover:bg-surface/50"
              >
                <span>Explore Our Story &amp; Manifesto</span>
                <ArrowUpRight size={13} className="text-brand-red" />
              </button>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Founder Anchor */}
          <div className="lg:col-span-7 space-y-6 font-mono text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
            <p>
              <strong className="text-text-primary">Riwa Creatives</strong> is an independent creative and growth studio built around a simple belief:{' '}
              <span className="text-brand-red font-bold">ambitious ideas deserve ambitious execution.</span>
            </p>

            <p>
              We bring together creative minds, strategic thinkers and technical talent to help businesses communicate better, build stronger brands and create experiences that move people. We don't believe in creativity for the sake of decoration. We believe in ideas with intention, design with purpose and execution that makes a difference.
            </p>

            <p>
              Founded by <span className="text-text-primary font-bold">Ranjan Kumar</span>, Riwa is being built around curiosity, collaboration and the ambition to create work that stands apart.
            </p>

            <div className="p-6 sm:p-8 rounded-2xl border border-line-border bg-surface shadow-md mt-8">
              <p className="font-display text-lg sm:text-2xl font-bold uppercase tracking-tight text-text-primary">
                "We're not here to make more of the same. We're here to make what comes next."
              </p>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-red block mt-2 font-bold">
                — The Riwa Creed
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
