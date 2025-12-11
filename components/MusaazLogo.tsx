import React from 'react';

const MusaazLogo: React.FC<{ className?: string, variant?: 'light' | 'dark' }> = ({ className, variant = 'light' }) => {
  const textColor = variant === 'light' ? 'text-ivory' : 'text-maroon-900';
  const subTextColor = variant === 'light' ? 'text-gold-400' : 'text-maroon-700';
  const lineColor = variant === 'light' ? 'bg-ivory/20' : 'bg-maroon-900/10';

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Script Text */}
      <h1 className={`${textColor} text-4xl leading-none drop-shadow-md tracking-normal`} style={{fontFamily: '"Great Vibes", cursive'}}>
        Musaaz
      </h1>
      {/* Tagline */}
      <div className="flex items-center gap-2 mt-1">
        <div className={`h-[1px] w-4 ${lineColor}`}></div>
        <span className={`${subTextColor} font-sans text-[8px] tracking-[0.25em] uppercase font-bold`}>
          Legacy of Mumbai
        </span>
        <div className={`h-[1px] w-4 ${lineColor}`}></div>
      </div>
    </div>
  );
};

export default MusaazLogo;