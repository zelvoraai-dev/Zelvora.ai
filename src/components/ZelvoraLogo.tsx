import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ZelvoraLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'standalone' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark' | 'white' | 'auto';
  showScript?: boolean;
}

export const ZelvoraLogo: React.FC<ZelvoraLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  theme = 'auto',
  showScript = true,
}) => {
  // Try to use context if available
  let isDarkMode = false;
  try {
    const themeContext = useTheme();
    isDarkMode = themeContext.isDark;
  } catch {
    // If used outside ThemeProvider
    isDarkMode = false;
  }

  const effectiveTheme = theme === 'auto' ? (isDarkMode ? 'dark' : 'light') : theme;

  // Dimensions based on size
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const ringBorderColor = 
    effectiveTheme === 'dark' || effectiveTheme === 'white' 
      ? '#F4F4F5' 
      : '#333333';

  const circleBgColor =
    effectiveTheme === 'white' 
      ? 'transparent' 
      : effectiveTheme === 'dark' 
        ? '#1C1C20' 
        : '#FFFFFF';

  const scriptColor = 
    effectiveTheme === 'white' 
      ? 'text-white' 
      : effectiveTheme === 'dark' 
        ? 'text-white group-hover:text-[#EE6000]' 
        : 'text-[#007788] group-hover:text-[#EE6000]';

  // SVG representation of the circular Z mark from the brand kit
  const CircularZMark = (
    <svg
      viewBox="0 0 100 100"
      className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer circular frame in Onyx Black or White */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke={ringBorderColor}
        strokeWidth="6"
        fill={circleBgColor}
        className="transition-colors duration-200"
      />
      
      {/* Stylized script serif Z in Aura Orange #EE6000 */}
      <path
        d="M 36 30 C 40 26 63 26 67 30 C 68 33 63 38 56 45 L 43 59 C 40 62 42 65 47 65 C 54 65 61 63 65 60 C 64 64 61 68 53 69 C 41 70 35 66 35 60 C 35 55 40 50 48 41 L 58 31 C 51 31 41 33 36 30 Z"
        fill="#EE6000"
      />
      {/* Serif flourish accent at top right */}
      <path
        d="M 64 29 C 68 28 70 32 67 35 C 64 34 63 31 64 29 Z"
        fill="#EE6000"
      />
      {/* Lower base flourish */}
      <path
        d="M 43 64 C 47 65 57 65 62 61 C 63 62 61 66 57 67 C 49 68 43 66 43 64 Z"
        fill="#EE6000"
      />
    </svg>
  );


  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {CircularZMark}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-1.5 ${className}`}>
        {CircularZMark}
        {showScript && (
          <span
            className={`font-script font-bold tracking-wide select-none ${textSizes[size]} ${scriptColor}`}
            style={{ fontStyle: 'italic' }}
          >
            Zelvora.AI
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 group ${className}`}>
      {CircularZMark}
      {showScript && (
        <span
          className={`font-script font-bold tracking-tight select-none leading-none pt-0.5 ${textSizes[size]} ${scriptColor} transition-colors`}
          style={{ fontStyle: 'italic' }}
        >
          Zelvora.AI
        </span>
      )}
    </div>
  );
};
