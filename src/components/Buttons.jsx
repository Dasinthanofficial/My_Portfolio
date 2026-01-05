import React, { useRef, useState } from 'react';

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const buttonRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;

    // ✅ clamp so it cannot push layout wider on small screens
    setMousePos({ x: clamp(x, -6, 6), y: clamp(y, -6, 6) });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  const variants = {
    primary: 'bg-accent text-white shadow-neon border border-white/20',
    secondary:
      'bg-white/5 text-text-main border border-white/15 backdrop-blur shadow-[inset_0_0_12px_rgba(255,255,255,0.05)]',
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      className={`
        px-6 sm:px-9 py-3 sm:py-3.5 rounded-pill text-sm sm:text-base font-semibold
        inline-flex items-center justify-center gap-3
        transition-all duration-100 ease-out hover-lift cursor-pointer relative z-10
        ${variants[variant]}
        ${mousePos.x === 0 ? 'transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]' : ''}
        ${className}
      `}
      {...props}
    >
      <span
        className="pointer-events-none inline-flex items-center gap-2 transition-transform"
        style={{ transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)` }}
      >
        {children}
      </span>
    </button>
  );
};

export const SocialRow = () => {
  const icons = [
    {
      label: 'GitHub',
      url: 'https://github.com/Dasinthanofficial',
      svg: (
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      ),
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dasinthan-pathmanathan-725239389/',
      svg: (
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      ),
    },
  ];

  return (
    <div className="flex gap-4 justify-center lg:justify-start">
      {icons.map((ic) => (
        <MagneticIcon key={ic.label} ic={ic} />
      ))}
    </div>
  );
};

const MagneticIcon = ({ ic }) => {
  const iconRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!iconRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = iconRef.current.getBoundingClientRect();

    const x = (clientX - (left + width / 2)) * 0.4;
    const y = (clientY - (top + height / 2)) * 0.4;

    // ✅ clamp to avoid overflow
    setMousePos({ x: clamp(x, -6, 6), y: clamp(y, -6, 6) });
  };

  const handleClick = () => {
    if (!ic.url) return;
    window.open(ic.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      ref={iconRef}
      type="button"
      aria-label={ic.label}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      className="
        w-[44px] h-[44px] sm:w-[46px] sm:h-[46px] rounded-full border border-white/10
        flex items-center justify-center text-white bg-white/5
        backdrop-blur-sm shadow-md cursor-pointer hover-lift
        transition-all duration-300
      "
    >
      <span style={{ transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)` }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {ic.svg}
        </svg>
      </span>
    </button>
  );
};