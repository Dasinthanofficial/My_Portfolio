// import React, { useEffect, useState } from 'react';

// const BackgroundAura = () => {
//     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             setMousePos({
//                 x: (e.clientX / window.innerWidth - 0.5) * 40, // Max 20px movement
//                 y: (e.clientY / window.innerHeight - 0.5) * 40
//             });
//         };
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);

//     const auraStyles = {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         pointerEvents: 'none',
//         zIndex: -1,
//         overflow: 'hidden',
//         background: 'transparent',
//     };

//     const blobBase = {
//         position: 'absolute',
//         borderRadius: '50%',
//         filter: 'blur(80px)',
//         opacity: 0.4,
//         transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
//         animation: 'pulse 10s ease-in-out infinite alternate',
//     };

//     return (
//         <div style={auraStyles}>
//             {/* Top Left Blob */}
//             <div style={{
//                 ...blobBase,
//                 width: '600px',
//                 height: '600px',
//                 background: 'rgba(164, 58, 217, 0.15)',
//                 top: '-10%',
//                 left: '-5%',
//                 transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
//             }} />

//             {/* Bottom Right Blob */}
//             <div style={{
//                 ...blobBase,
//                 width: '800px',
//                 height: '800px',
//                 background: 'rgba(106, 27, 154, 0.2)',
//                 bottom: '-20%',
//                 right: '-10%',
//                 transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)`,
//                 animationDelay: '-2s',
//             }} />

//             {/* Center Accent Blob */}
//             <div style={{
//                 ...blobBase,
//                 width: '400px',
//                 height: '400px',
//                 background: 'rgba(164, 58, 217, 0.1)',
//                 top: '40%',
//                 left: '30%',
//                 transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`,
//                 animationDelay: '-5s',
//             }} />

//             <style>{`
//                 @keyframes pulse {
//                     0% { transform: scale(1) translate(0, 0); opacity: 0.3; }
//                     100% { transform: scale(1.2) translate(30px, -20px); opacity: 0.5; }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default BackgroundAura;

import React, { useEffect, useState } from 'react';

const BackgroundAura = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Calculate gentle parallax movement
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 40, 
                y: (e.clientY / window.innerHeight - 0.5) * 40
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Base classes for all blobs
    const blobClasses = "absolute rounded-full blur-[80px] opacity-40 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] animate-pulse-slow pointer-events-none";

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-transparent">
            
            {/* Top Left Blob */}
            <div 
                className={`${blobClasses} w-[600px] h-[600px] bg-accent/15 -top-[10%] -left-[5%]`}
                style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }} 
            />

            {/* Bottom Right Blob */}
            <div 
                className={`${blobClasses} w-[800px] h-[800px] bg-[#6A1B9A]/20 -bottom-[20%] -right-[10%]`}
                style={{ 
                    transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)`,
                    animationDelay: '-2s'
                }} 
            />

            {/* Center Accent Blob */}
            <div 
                className={`${blobClasses} w-[400px] h-[400px] bg-accent/10 top-[40%] left-[30%]`}
                style={{ 
                    transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`,
                    animationDelay: '-5s'
                }} 
            />
        </div>
    );
};

export default BackgroundAura;