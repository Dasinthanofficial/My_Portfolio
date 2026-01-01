import React, { useState, useRef } from 'react';
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt, FaGithub, FaJs
} from 'react-icons/fa';
import {
    SiMongodb, SiExpress, SiVercel, SiRender, SiTailwindcss, SiPostman, SiFirebase
} from 'react-icons/si';

const TechSphere3D = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const icons = [
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
    ];

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            className="w-full h-[500px] md:h-[500px] sm:h-[350px] flex justify-center items-center relative 
                     perspective-[1000px] overflow-visible touch-none"
        >
            <div 
                className="relative w-[300px] h-[300px] transition-transform duration-100 ease-out 
                         [transform-style:preserve-3d] sm:scale-75 md:scale-100"
                style={{
                    transform: `rotateY(${mousePos.x * 30}deg) rotateX(${mousePos.y * -30}deg)`
                }}
            >
                {icons.map((item, index) => {
                    const ringIcons = icons.filter(i => i.ring === item.ring);
                    const ringIndex = ringIcons.indexOf(item);
                    const angle = (ringIndex / ringIcons.length) * Math.PI * 2;
                    const radius = item.ring === 1 ? 120 : 190;

                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const z = item.ring === 1 ? 0 : -30;

                    return (
                        <div
                            key={index}
                            className="absolute top-1/2 left-1/2 flex justify-center items-center
                                     bg-white/5 backdrop-blur-[5px] border border-white/10 rounded-full
                                     animate-[floatSphere_4s_ease-in-out_infinite_alternate]"
                            style={{
                                width: item.ring === 1 ? '60px' : '45px',
                                height: item.ring === 1 ? '60px' : '45px',
                                transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`,
                                boxShadow: `0 0 15px ${item.color}22`,
                                animationDuration: `${4 + index * 0.5}s`, // Varied animation speed
                            }}
                        >
                            <item.Icon 
                                style={{ 
                                    fontSize: item.ring === 1 ? '28px' : '20px', 
                                    color: item.color 
                                }} 
                            />
                        </div>
                    );
                })}
                
                {/* Center Text */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                               text-white font-bold tracking-[2px] pointer-events-none
                               drop-shadow-[0_0_20px_rgba(164,58,217,0.8)]">
                    STACK
                </div>
            </div>
            
            {/* 
               Note: Custom keyframe animations like 'floatSphere' need to be 
               defined in tailwind.config.js or global.css.
               However, for single-component animations, a small style tag is acceptable.
            */}
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