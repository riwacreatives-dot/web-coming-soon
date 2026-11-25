import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="group relative flex items-center justify-center min-h-[36px] gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full border border-line-border bg-surface text-text-primary hover:border-brand-red font-mono text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm touch-manipulation"
    >
      <span className="relative flex h-2 w-2 items-center justify-center">
        <span
          className={`inline-block rounded-full h-2 w-2 ${
            theme === 'dark' ? 'bg-brand-red' : 'bg-brand-amber'
          }`}
        ></span>
      </span>

      <span className="hidden sm:inline font-bold">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>

      <span className="sm:hidden text-text-secondary group-hover:text-text-primary">
        {theme === 'dark' ? <Moon size={11} /> : <Sun size={11} />}
      </span>
    </button>
  );
};
