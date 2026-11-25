import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  useDocumentMeta({
    title: '404 Page Not Found — RIWA CREATIVES',
    description: 'The requested page was not found. Return to RIWA CREATIVES home to explore commercial ad art direction and performance marketing.',
  });

  return (
    <>
      <main className="w-full min-h-[75vh] flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 max-w-7xl mx-auto text-center pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 max-w-xl mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-red font-bold block">
            ✦ 404 // ROUTE NOT FOUND
          </span>

          <h1 className="font-display text-[clamp(3.5rem,12vw,8rem)] font-black uppercase tracking-tight text-text-primary leading-[0.88] select-none">
            LOST<span className="text-brand-red">.</span>
          </h1>

          <p className="font-mono text-sm sm:text-base text-text-secondary leading-relaxed">
            This sector does not exist in the studio catalog. Return to baseline to engineer{' '}
            <span className="text-brand-red font-bold">unreasonable brands</span>.
          </p>

          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              data-cursor-text="BACK"
              className="min-h-[46px] flex items-center gap-2 px-5 py-3 rounded-full border border-line-border bg-surface text-text-primary font-mono text-xs uppercase tracking-wider hover:border-text-primary transition-all cursor-pointer touch-manipulation"
            >
              <ArrowLeft size={14} />
              <span>Go Back</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              data-cursor-text="HOME"
              className="min-h-[46px] flex items-center gap-2 px-5 py-3 rounded-full bg-brand-red text-white font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg shadow-brand-red/25 transition-all cursor-pointer touch-manipulation"
            >
              <Home size={14} />
              <span>Home Viewport</span>
            </button>
          </div>
        </motion.div>
      </main>

      <EditorialFooter />
    </>
  );
};
