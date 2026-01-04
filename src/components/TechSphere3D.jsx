import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FaAws, FaGitAlt, FaGithub, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiMongodb, SiPostman, SiRender, SiTailwindcss, SiVercel } from 'react-icons/si';

const TechSphere3D = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Detect mobile once (enough for most cases)
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 640px)').matches;
  }, []);

  const icons = useMemo(
    () => [
      { Icon: FaReact, color: '#61DAFB', name: 'React', ring: 1 },
      { Icon: SiMongodb, color: '#47A248', name: 'MongoDB', ring: 1 },
      { Icon: SiExpress, color: '#ffffff', name: 'Express', ring: 1 },
      { Icon: FaNodeJs, color: '#339933', name: 'Node.js', ring: 1 },
      { Icon: FaJs, color: '#F7DF1E', name: 'JavaScript', ring: 1 },
      { Icon: SiTailwindcss, color: '#38B2AC', name: 'Tailwind', ring: 1 },

      { Icon: FaPython, color: '#3776AB', name: 'Python', ring: 2 },
      { Icon: FaAws, color: '#FF9900', name: 'AWS', ring: 2 },
      { Icon: SiVercel, color: '#ffffff', name: 'Vercel', ring: 2 },
      { Icon: SiRender, color: '#46E3B7', name: 'Render', ring: 2 },
      { Icon: FaGitAlt, color: '#F05032', name: 'Git', ring: 2 },
      { Icon: FaGithub, color: '#ffffff', name: 'GitHub', ring: 2 },
      { Icon: SiPostman, color: '#FF6C37', name: 'Postman', ring: 2 },
      { Icon: SiFirebase, color: '#FFCA28', name: 'Firebase', ring: 2 },
    ],
    []
  );

  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // If user scrolls on mobile, keep it calm (optional)
  useEffect(() => {
    if (!isMobile) return;
    setMousePos({ x: 0, y: 0 });
  }, [isMobile]);

  // Responsive sizes
  const sphereSize = isMobile ? 220 : 300;
  const ring1Radius = isMobile ? 85 : 120;
  const ring2Radius = isMobile ? 135 : 190;

  const ring1Bubble = isMobile ? 46 : 60;
  const ring2Bubble = isMobile ? 36 : 45;

  const ring1Icon = isMobile ? 22 : 28;
  const ring2Icon = isMobile ? 16 : 20;

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setMousePos({ x: 0, y: 0 })}
      className="w-full h-[240px] sm:h-[300px] md:h-[500px] flex justify-center items-center relative
                 perspective-[1000px] overflow-visible"
    >
      <div
        className="relative transition-transform duration-100 ease-out [transform-style:preserve-3d]"
        style={{
          width: `${sphereSize}px`,
          height: `${sphereSize}px`,
          transform: `rotateY(${mousePos.x * 22}deg) rotateX(${mousePos.y * -22}deg)`,
        }}
      >
        {icons.map((item, index) => {
          const ringIcons = icons.filter((i) => i.ring === item.ring);
          const ringIndex = ringIcons.indexOf(item);
          const angle = (ringIndex / ringIcons.length) * Math.PI * 2;

          const radius = item.ring === 1 ? ring1Radius : ring2Radius;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const z = item.ring === 1 ? 0 : -25;

          const bubble = item.ring === 1 ? ring1Bubble : ring2Bubble;
          const iconSize = item.ring === 1 ? ring1Icon : ring2Icon;

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 flex justify-center items-center
                         bg-white/5 backdrop-blur-[5px] border border-white/10 rounded-full
                         animate-[floatSphere_4s_ease-in-out_infinite_alternate]"
              style={{
                width: `${bubble}px`,
                height: `${bubble}px`,
                transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`,
                boxShadow: `0 0 15px ${item.color}22`,
                animationDuration: `${4 + index * 0.4}s`,
              }}
            >
              <item.Icon style={{ fontSize: `${iconSize}px`, color: item.color }} />
            </div>
          );
        })}

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     text-white font-bold tracking-[2px] pointer-events-none
                     drop-shadow-[0_0_20px_rgba(164,58,217,0.8)]"
          style={{ fontSize: isMobile ? '14px' : '16px' }}
        >
          STACK
        </div>
      </div>

      <style>{`
        @keyframes floatSphere {
          0% { margin-top: -10px; }
          100% { margin-top: 10px; }
        }
      `}</style>
    </div>
  );
};

export default TechSphere3D;