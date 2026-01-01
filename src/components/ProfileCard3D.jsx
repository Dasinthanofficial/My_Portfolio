// import React, { useState, useRef, useEffect } from 'react';

// const ProfileCard3D = () => {
//     const cardRef = useRef(null);
//     const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
//     const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

//     const handleMouseMove = (e) => {
//         if (!cardRef.current) return;

//         const card = cardRef.current;
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         const xc = rect.width / 2;
//         const yc = rect.height / 2;

//         const dx = x - xc;
//         const dy = y - yc;

//         // Calculate rotation (max 15 degrees)
//         const rotX = (dy / yc) * -15;
//         const rotY = (dx / xc) * 15;

//         setTransform(`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`);

//         // Glow position in percentage
//         const px = (x / rect.width) * 100;
//         const py = (y / rect.height) * 100;
//         setGlowPos({ x: px, y: py });
//     };

//     const handleMouseLeave = () => {
//         setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
//     };

//     return (
//         <div style={{
//             width: '100%',
//             maxWidth: '450px',
//             height: '450px',
//             perspective: '1000px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             position: 'relative'
//         }} className="profile-card-container">

//             {/* Background Glow */}
//             <div style={{
//                 position: 'absolute',
//                 width: '120%',
//                 height: '120%',
//                 background: 'radial-gradient(circle, rgba(164, 58, 217, 0.2) 0%, transparent 70%)',
//                 filter: 'blur(60px)',
//                 zIndex: 0
//             }} />

//             <div
//                 ref={cardRef}
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseLeave}
//                 style={{
//                     width: '100%',
//                     height: '100%',
//                     position: 'relative',
//                     transform: transform,
//                     transition: 'transform 0.1s ease-out',
//                     transformStyle: 'preserve-3d',
//                     cursor: 'pointer'
//                 }}
//             >
//                 {/* Main Card Body */}
//                 <div style={{
//                     width: '100%',
//                     height: '100%',
//                     background: 'var(--glass-bg)',
//                     backdropFilter: 'blur(20px)',
//                     border: '1px solid rgba(255, 255, 255, 0.15)',
//                     borderRadius: '40px',
//                     overflow: 'hidden',
//                     position: 'relative',
//                     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     padding: '20px'
//                 }}>

//                     {/* Dynamic Glow Effect */}
//                     <div style={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         width: '100%',
//                         height: '100%',
//                         background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255, 255, 255, 0.15), transparent 50%)`,
//                         pointerEvents: 'none',
//                         zIndex: 2
//                     }} />

//                     {/* Image Container */}
//                     <div style={{
//                         width: '85%',
//                         height: '85%',
//                         borderRadius: '30px',
//                         overflow: 'hidden',
//                         position: 'relative',
//                         boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
//                         transform: 'translateZ(50px)', // Lift image off the card
//                     }}>
//                         <img
//                             src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&h=800&fit=crop"
//                             alt="Profile"
//                             style={{
//                                 width: '100%',
//                                 height: '100%',
//                                 objectFit: 'cover'
//                             }}
//                         />
//                         <div style={{
//                             position: 'absolute',
//                             bottom: 0,
//                             left: 0,
//                             width: '100%',
//                             height: '40%',
//                             background: 'linear-gradient(to top, rgba(13, 11, 26, 0.8), transparent)',
//                             zIndex: 1
//                         }} />
//                     </div>

//                     {/* Floating Elements (Badges) */}
//                     <div style={{
//                         position: 'absolute',
//                         bottom: '40px',
//                         right: '-20px',
//                         background: 'var(--accent-primary)',
//                         color: 'white',
//                         padding: '10px 20px',
//                         borderRadius: '15px',
//                         fontWeight: '700',
//                         fontSize: '14px',
//                         transform: 'translateZ(80px)',
//                         boxShadow: '0 10px 20px rgba(164, 58, 217, 0.4)',
//                         letterSpacing: '1px'
//                     }}>
//                         AVAILABLE
//                     </div>
//                 </div>

//                 {/* Outer decorative ring */}
//                 <div style={{
//                     position: 'absolute',
//                     top: '-10px',
//                     left: '-10px',
//                     right: '-10px',
//                     bottom: '-10px',
//                     border: '1.5px solid rgba(164, 58, 217, 0.3)',
//                     borderRadius: '50px',
//                     transform: 'translateZ(-20px)',
//                     pointerEvents: 'none'
//                 }} />
//             </div>

//             <style>{`
//                 @media (max-width: 600px) {
//                     .profile-card-container {
//                         max-width: 350px !important;
//                         height: 350px !important;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default ProfileCard3D;

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