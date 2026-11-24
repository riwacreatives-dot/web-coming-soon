import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  organization: string;
  projectNote: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-01',
    quote:
      'The Solanas campaign completely redefined how our guests perceive our culinary experience. The posters were shared organically all across Delhi NCR, and dinner bookings saw immediate growth.',
    clientName: 'Culinary Partner',
    role: 'Brand & Marketing Director',
    organization: 'Solanas Pan-Asian Dining',
    projectNote: 'Commercial Campaign & Key Visuals',
  },
  {
    id: 't-02',
    quote:
      'Riwa brings real creative courage coupled with serious execution speed. No fluff, no endless committee reviews — just sharp strategy and stunning visual output.',
    clientName: 'Founding Team',
    role: 'Co-Founder & Operator',
    organization: 'Regional Consumer Brand',
    projectNote: 'Brand Identity & Launch Strategy',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full py-16 sm:py-24 md:py-32 border-t border-line-border px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Eyebrow & Headline */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-12 sm:mb-20">
        <div className="max-w-3xl">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold block mb-3 select-none">
            10 / TESTIMONIALS &amp; TRUST
          </span>
          <h2 className="font-display text-[clamp(2.2rem,6.8vw,4.5rem)] font-extrabold uppercase tracking-tight text-text-primary leading-[1.05]">
            <span>GOOD WORK SPEAKS.</span><br />
            <span>SO DO</span>{' '}
            <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
              the
            </span>{' '}
            <span>PEOPLE BEHIND IT</span><span className="text-brand-red font-bold">.</span>
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-text-secondary leading-relaxed max-w-2xl">
            The best measure of a collaboration is what it makes possible. Here's what the people we've worked with have to say.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 sm:p-10 rounded-2xl border border-line-border bg-surface/50 flex flex-col justify-between"
          >
            <div>
              <Quote size={28} className="text-brand-red/60 mb-5" />
              <p className="font-serif italic text-base sm:text-xl text-text-primary leading-relaxed">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-line-border font-mono">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-text-primary block">
                    {t.clientName}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {t.role} · {t.organization}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-line-border bg-surface text-brand-red">
                  {t.projectNote}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
