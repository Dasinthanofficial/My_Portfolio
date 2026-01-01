import React, { useState, useRef } from 'react';

const ProfileCard3D = () => {
    const cardRef = useRef(null);
    const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xc = rect.width / 2;
        const yc = rect.height / 2;

        const dx = x - xc;
        const dy = y - yc;

        // Calculate rotation (max 15 degrees)
        const rotX = (dy / yc) * -15;
        const rotY = (dx / xc) * 15;

        setTransform(`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`);

        // Glow position in percentage
        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;
        setGlowPos({ x: px, y: py });
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    };

    return (
        // Container
        <div className="w-full max-w-[350px] h-[350px] sm:max-w-[450px] sm:h-[450px] perspective-[1000px] flex justify-center items-center relative">
            
            {/* Background Glow */}
            <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(164,58,217,0.2)_0%,transparent_70%)] blur-[60px] -z-10" />

            {/* 3D Card Wrapper */}
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full h-full relative transition-transform duration-100 ease-out [transform-style:preserve-3d] cursor-pointer"
                style={{ transform }}
            >
                {/* Main Card Body */}
                <div className="w-full h-full bg-glass-bg backdrop-blur-glass border border-white/15 rounded-[40px] overflow-hidden relative shadow-2xl flex flex-col items-center justify-center p-5">

                    {/* Dynamic Glow Effect */}
                    <div 
                        className="absolute inset-0 pointer-events-none z-20"
                        style={{ background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255, 255, 255, 0.15), transparent 50%)` }}
                    />

                    {/* Image Container */}
                    <div className="w-[85%] h-[85%] rounded-[30px] overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] [transform:translateZ(50px)]">
                        <img
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&h=800&fit=crop"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay at bottom of image */}
                        <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-[#0D0B1A]/80 to-transparent z-10" />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute bottom-10 -right-5 bg-accent text-white px-5 py-2.5 rounded-2xl font-bold text-sm tracking-wider shadow-neon [transform:translateZ(80px)]">
                        AVAILABLE
                    </div>
                </div>

                {/* Outer Decorative Ring */}
                <div className="absolute -inset-2.5 border-[1.5px] border-accent/30 rounded-[50px] [transform:translateZ(-20px)] pointer-events-none" />
            </div>
        </div>
    );
};

export default ProfileCard3D;