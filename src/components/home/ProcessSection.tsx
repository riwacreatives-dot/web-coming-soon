import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Palette, Rocket } from 'lucide-react';

interface ProcessStep {
  number: string;
  name: string;
  headline: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const PROCESS_STAGES: ProcessStep[] = [
  {
    number: '01',
    name: 'DISCOVER',
    headline: 'Understand the objective, audience & opportunity.',
    description:
      'We listen, question and probe beneath the surface. We immerse ourselves in your market dynamics, competitive whitespace, customer psychology and core commercial objectives before proposing a single creative asset.',
    deliverables: ['Market whitespace audit', 'Stakeholder alignment', 'Audience profiling', 'Strategic sprint brief'],
    icon: <Search size={18} />,
  },
  {
    number: '02',
    name: 'DEFINE',
    headline: 'Develop the creative direction & strategy.',
    description:
      'We distill complex briefs into sharp, high-conviction creative territories. We establish the conceptual foundation, tone of voice, narrative angle and technical roadmap that guide all subsequent execution.',
    deliverables: ['Brand positioning narrative', 'Visual territory moodboards', 'Creative direction deck', 'Sprint milestones'],
    icon: <Compass size={18} />,
  },
  {
    number: '03',
    name: 'CREATE',
    headline: 'Design, develop & execute the idea.',
    description:
      'Where imagination becomes reality. Our principal designers, copywriters, 3D artists, filmmakers and engineers craft bespoke visual systems, commercial campaigns, web experiences and physical activations.',
    deliverables: ['Identity design & guidelines', 'Campaign key visuals & copy', 'Responsive digital platforms', 'Experiential collateral'],
    icon: <Palette size={18} />,
  },
  {
    number: '04',
    name: 'DELIVER',
    headline: 'Launch, communicate & improve.',
    description:
      'We bring the work into the world with meticulous production rigor. From print press checks and ad rollout to high-traffic web deployment and live event staging, we refine and optimize every touchpoint.',
    deliverables: ['Production-ready assets', 'Clean code & deployment', 'Launch management', 'Impact measurement'],
    icon: <Rocket size={18} />,
  },
];

export const ProcessSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="w-full bg-[#F4F1EA] text-[#171719] border-b border-[#171719]/15 transition-colors">
      <section
        id="process"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        {/* Eyebrow & Headline Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-12 sm:mb-20">
          <div className="max-w-3xl">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.24em] text-[#767571] font-semibold block mb-3 select-none">
              05 / FROM FIRST THOUGHT TO FINAL FRAME
            </span>
            <h2 className="font-display text-[clamp(2.2rem,6.8vw,4.5rem)] font-extrabold uppercase tracking-tight text-[#171719] leading-[0.98]">
              <span>FROM FIRST THOUGHT</span><br />
              <span>TO</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-[#FD7D3C] text-[1.12em] lowercase select-none">
                final
              </span>{' '}
              <span>FRAME</span><span className="text-[#FD7D3C] font-bold">.</span>
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base text-[#605F5B] leading-relaxed max-w-2xl">
              Great creative work is never accidental. It is the result of disciplined exploration, clear strategic convictions and meticulous execution across four deliberate stages.
            </p>
          </div>

          <div className="hidden sm:block font-mono text-xs text-[#767571] text-right">
            <span>[ 04 DELIBERATE STAGES ]</span><br />
            <span className="text-[#171719] font-bold">14-DAY CORE SPRINTS</span>
          </div>
        </div>

        {/* Swiss Grid Editorial Process Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Stage Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {PROCESS_STAGES.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`w-full p-4 sm:p-5 rounded-xl text-left border transition-all cursor-pointer font-mono flex items-center justify-between ${
                    isActive
                      ? 'border-[#171719] bg-[#FFFFFF] shadow-md text-[#171719]'
                      : 'border-[#171719]/15 bg-[#F4F1EA] text-[#605F5B] hover:border-[#171719]/40 hover:text-[#171719]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-bold ${
                        isActive ? 'text-[#FD7D3C]' : 'text-[#767571]'
                      }`}
                    >
                      // {stage.number}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base uppercase tracking-tight">
                      {stage.name}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition-colors ${
                      isActive ? 'bg-[#FD7D3C] text-[#171719]' : 'text-[#767571]'
                    }`}
                  >
                    {stage.icon}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Panel */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 sm:p-10 md:p-12 rounded-2xl border border-[#171719]/20 bg-[#FFFFFF] shadow-lg flex flex-col justify-between min-h-[380px]"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#767571] pb-4 border-b border-[#171719]/15 mb-6">
                  <span>Stage {PROCESS_STAGES[activeStage].number} of 04</span>
                  <span className="text-[#FD7D3C] font-bold">
                    {PROCESS_STAGES[activeStage].name}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#171719] mb-3">
                  {PROCESS_STAGES[activeStage].headline}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#605F5B] leading-relaxed mb-8">
                  {PROCESS_STAGES[activeStage].description}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#767571] font-bold block mb-3">
                  ✦ Stage Outputs &amp; Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-[#171719]">
                  {PROCESS_STAGES[activeStage].deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FD7D3C] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
