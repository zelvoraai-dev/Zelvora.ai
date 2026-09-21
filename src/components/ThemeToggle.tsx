import React from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border text-xs font-semibold transition-all duration-300 cursor-pointer select-none outline-hidden focus-visible:ring-2 focus-visible:ring-[#EE6000] ${
        isDark
          ? 'bg-[#1C1C20] border-[#2E2E34] text-stone-200 hover:border-[#EE6000]/60 hover:text-white shadow-xs'
          : 'bg-stone-100/90 border-stone-200 text-stone-700 hover:border-[#007788]/50 hover:text-stone-900 shadow-2xs'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'Light' : 'Deep Onyx'} theme`}
      aria-pressed={isDark}
      title={isDark ? 'Switch to Light theme' : 'Switch to Deep Onyx dark mode'}
    >
      {/* Icon with smooth rotate/scale transition */}
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Moon className="w-4 h-4 text-[#EE6000] transition-all duration-300 rotate-0 scale-100" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 transition-all duration-300 rotate-0 scale-100" />
        )}
      </div>

      {/* Mode Tag Label */}
      <div className="flex items-center gap-1.5">
        <span
          className={`font-mono text-[11px] tracking-wide font-bold transition-colors ${
            isDark ? 'text-stone-200' : 'text-stone-700'
          }`}
        >
          {isDark ? 'Deep Onyx' : 'Light'}
        </span>

        {isDark && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#EE6000] animate-pulse hidden sm:inline-block" />
        )}
      </div>
    </button>
  );
};
