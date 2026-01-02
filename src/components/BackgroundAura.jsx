import React, { useEffect, useState } from 'react';

const BackgroundAura = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const blobClasses =
    'absolute rounded-full blur-[80px] opacity-40 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] animate-pulse-slow pointer-events-none';

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-transparent">
      <div
        className={`${blobClasses} w-[600px] h-[600px] bg-accent/15 -top-[10%] -left-[5%]`}
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      />

      <div
        className={`${blobClasses} w-[800px] h-[800px] bg-[#6A1B9A]/20 -bottom-[20%] -right-[10%]`}
        style={{
          transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)`,
          animationDelay: '-2s',
        }}
      />

      <div
        className={`${blobClasses} w-[400px] h-[400px] bg-accent/10 top-[40%] left-[30%]`}
        style={{
          transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`,
          animationDelay: '-5s',
        }}
      />
    </div>
  );
};

export default BackgroundAura;