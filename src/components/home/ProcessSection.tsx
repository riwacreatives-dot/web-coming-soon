import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Palette, Rocket, RefreshCw } from 'lucide-react';

interface ProcessStep {
  number: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'DISCOVER',
    tagline: 'Listen, Question, Understand',
    description:
      'We listen, question and understand. We learn about your business, audience, challenges and ambitions before deciding what needs to happen.',
    icon: <Search size={18} />,
  },
  {
    number: '02',
    name: 'DEFINE',
    tagline: 'Strategy, Concepts & Direction',
    description:
      'We turn the brief into a direction. Strategy, concepts, creative territories and a clear plan for execution.',
    icon: <Compass size={18} />,
  },
  {
    number: '03',
    name: 'CREATE',
    tagline: 'Visuals, Content & Digital Craft',
    description:
      'This is where ideas take shape. Our team develops the visuals, content, campaigns and digital experiences needed to bring the direction to life.',
    icon: <Palette size={18} />,
  },
  {
    number: '04',
    name: 'EXECUTE',
    tagline: 'Refine, Deliver & Launch',
    description:
      'We refine, deliver and launch. Every detail matters, from the first draft to the final output.',
    icon: <Rocket size={18} />,
  },
  {
    number: '05',
    name: 'EVOLVE',
    tagline: 'Review, Learn & Strengthen',
    description:
      'We review the work, learn from the response and identify opportunities to make the next move even stronger.',
    icon: <RefreshCw size={18} />,
  },
];

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full bg-[#F5F4F0] dark:bg-[#08090c] border-y border-line-border transition-colors">
      <section
        id="process"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        {/* Eyebrow & Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-12 sm:mb-20">
          <div className="max-w-3xl">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold block mb-3 select-none">
              06 / OUR PROCESS
            </span>
            <h2 className="font-display text-[clamp(2.2rem,6.8vw,4.5rem)] font-extrabold uppercase tracking-tight text-text-primary leading-[1.05]">
              <span>FROM FIRST THOUGHT</span><br />
              <span>TO</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
                final
              </span>{' '}
              <span>FRAME</span><span className="text-brand-red font-bold">.</span>
            </h2>
            <p className="mt-4 font-mono text-xs sm:text-sm text-text-secondary leading-relaxed max-w-2xl">
              Great work isn't an accident. There's a process behind every idea we bring to life.
            </p>
          </div>
        </div>

        {/* Interactive 5-Step Process Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Selector */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full p-4 sm:p-5 rounded-xl text-left border transition-all cursor-pointer font-mono flex items-center justify-between ${isActive
                      ? 'border-brand-red bg-surface shadow-lg text-text-primary'
                      : 'border-line-border bg-surface/30 text-text-secondary hover:border-brand-red/40 hover:text-text-primary'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-bold ${isActive ? 'text-brand-red' : 'text-text-secondary'
                        }`}
                    >
                      {step.number}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base uppercase tracking-tight">
                      {step.name}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition-colors ${isActive ? 'bg-brand-red text-white' : 'text-text-secondary'
                      }`}
                  >
                    {step.icon}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Display Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-12 rounded-2xl border border-line-border bg-surface/60 backdrop-blur-md relative overflow-hidden min-h-[320px] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-text-secondary">
                  <span>Phase {STEPS[activeStep].number} of 05</span>
                  <span className="text-brand-red font-bold">{STEPS[activeStep].tagline}</span>
                </div>

                <h3 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-primary">
                  {STEPS[activeStep].name}
                </h3>

                <p className="font-mono text-sm sm:text-base text-text-secondary leading-relaxed pt-2">
                  {STEPS[activeStep].description}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-line-border flex items-center justify-between font-mono text-xs text-text-secondary">
                <span>RIWA CREATIVES · DISCIPLINED EXECUTION</span>
                <span className="text-brand-red">● Active Workflow</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
