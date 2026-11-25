import React, { createContext, useContext, useState, useCallback } from 'react';

interface TransitionContextType {
  isIntroActive: boolean;
  isBetweenActive: boolean;
  transitionTitle: string;
  triggerBetweenTransition: (title?: string, onMidpoint?: () => void) => void;
  replayIntro: () => void;
  finishIntro: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isIntroActive, setIsIntroActive] = useState(() => {
    if (typeof window === 'undefined') return true;
    const isDirectDeepLink = window.location.pathname !== '/' && window.location.pathname !== '';
    const hasSeenIntro = sessionStorage.getItem('riwa_intro_seen') === 'true';
    return !isDirectDeepLink && !hasSeenIntro;
  });
  const [isBetweenActive, setIsBetweenActive] = useState(false);
  const [transitionTitle, setTransitionTitle] = useState('RIWA CREATIVES');

  const finishIntro = useCallback(() => {
    setIsIntroActive(false);
    try {
      sessionStorage.setItem('riwa_intro_seen', 'true');
    } catch {
      // Ignore private/restricted storage errors
    }
  }, []);

  const replayIntro = useCallback(() => {
    setIsIntroActive(true);
  }, []);

  const triggerBetweenTransition = useCallback((title = 'STUDIO SPRINT', onMidpoint?: () => void) => {
    setTransitionTitle(title);
    setIsBetweenActive(true);

    // Midpoint trigger for view/modal switches
    setTimeout(() => {
      if (onMidpoint) onMidpoint();
    }, 450);

    // End transition
    setTimeout(() => {
      setIsBetweenActive(false);
    }, 1050);
  }, []);

  return (
    <TransitionContext.Provider
      value={{
        isIntroActive,
        isBetweenActive,
        transitionTitle,
        triggerBetweenTransition,
        replayIntro,
        finishIntro,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const usePageTransition = (): TransitionContextType => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a TransitionProvider');
  }
  return context;
};
