import React, { useEffect, useMemo, useState } from 'react';

const BackgroundAura = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const disabled = useMemo(() => {
    if (typeof window === 'undefined') return true;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const noHover = window.matchMedia('(hover: none)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return coarse || noHover || reduce;
  }, []);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [disabled]);

  const blobClasses =
    'absolute rounded-full blur-[60px] sm:blur-[80px] opacity-25 sm:opacity-40 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] animate-pulse-slow pointer-events-none';

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-transparent">
      <div
        className={`${blobClasses} w-[380px] h-[380px] sm:w-[600px] sm:h-[600px] bg-accent/10 sm:bg-accent/15 -top-[10%] -left-[5%]`}
        style={{ transform: `translate(${disabled ? 0 : mousePos.x}px, ${disabled ? 0 : mousePos.y}px)` }}
      />
      <div
        className={`${blobClasses} w-[520px] h-[520px] sm:w-[800px] sm:h-[800px] bg-[#6A1B9A]/15 sm:bg-[#6A1B9A]/20 -bottom-[20%] -right-[10%]`}
        style={{
          transform: `translate(${disabled ? 0 : mousePos.x * -0.8}px, ${disabled ? 0 : mousePos.y * -0.8}px)`,
          animationDelay: '-2s',
        }}
      />
      <div
        className={`${blobClasses} w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] bg-accent/8 sm:bg-accent/10 top-[40%] left-[30%]`}
        style={{
          transform: `translate(${disabled ? 0 : mousePos.x * 1.5}px, ${disabled ? 0 : mousePos.y * 1.5}px)`,
          animationDelay: '-5s',
        }}
      />
    </div>
  );
};

export default BackgroundAura;