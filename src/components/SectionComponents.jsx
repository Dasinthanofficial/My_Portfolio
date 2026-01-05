import React, { useMemo } from 'react';
import Tilt from 'react-parallax-tilt';

export const GlassCard = ({ children, className = '', hoverEffect = false, ...props }) => {
  const disableTilt = useMemo(() => {
    if (typeof window === 'undefined') return true;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const noHover = window.matchMedia('(hover: none)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return coarse || noHover || reduce;
  }, []);

  const CardContent = (
    <div
      className={`
        bg-glass-bg backdrop-blur-glass border border-glass-border rounded-card p-6 sm:p-8
        shadow-glass relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${hoverEffect ? 'hover:border-accent/30' : ''} 
        ${className}
      `}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-card pointer-events-none opacity-50 z-0" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );

  if (!hoverEffect || disableTilt) return CardContent;

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.02}
      transitionSpeed={1000}
      className="h-full"
      gyroscope={false}
    >
      {CardContent}
    </Tilt>
  );
};

export const SectionTitle = ({ title, subtitle, centered = true, id, className = '' }) => {
  return (
    <div id={id} className={`mb-14 sm:mb-16 relative z-10 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <span
          className="block text-accent text-sm font-bold tracking-[3px] mb-3 uppercase 
                     drop-shadow-[0_0_10px_rgba(164,58,217,0.5)] animate-pulse"
        >
          {subtitle}
        </span>
      )}

      <h2 className="text-4xl sm:text-5xl font-extrabold text-white m-0 tracking-tight drop-shadow-[0_2px_20px_rgba(164,58,217,0.3)] font-heading">
        {title}
      </h2>

      <div
        className={`
          absolute top-1/2 -translate-y-1/2 w-[240px] sm:w-[300px] h-[90px] sm:h-[100px]
          bg-[radial-gradient(ellipse_at_center,rgba(164,58,217,0.25)_0%,transparent_70%)] 
          blur-[45px] sm:blur-[50px] -z-10 pointer-events-none
          ${centered ? 'left-1/2 -translate-x-1/2' : 'left-0'}
        `}
      />
    </div>
  );
};