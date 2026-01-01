// import React, { useState, useRef } from 'react';

// export const Button = ({ children, variant = 'primary', style, ...props }) => {
//     const buttonRef = useRef(null);
//     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//     const handleMouseMove = (e) => {
//         const { clientX, clientY } = e;
//         const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

//         const x = clientX - (left + width / 2);
//         const y = clientY - (top + height / 2);

//         setMousePos({ x: x * 0.3, y: y * 0.3 }); // 30% attraction strength
//     };

//     const handleMouseLeave = () => {
//         setMousePos({ x: 0, y: 0 });
//     };

//     const baseStyle = {
//         padding: '14px 36px',
//         borderRadius: 'var(--radius-pill)',
//         fontSize: '16px',
//         fontWeight: '600',
//         display: 'inline-flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: '12px',
//         transition: mousePos.x === 0 ? 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'transform 0.1s ease-out, box-shadow 0.3s ease',
//         textDecoration: 'none',
//         border: 'none',
//         cursor: 'pointer',
//         letterSpacing: '0.5px',
//         transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
//         position: 'relative',
//         zIndex: 1
//     };

//     const variants = {
//         primary: {
//             background: 'var(--accent-primary)',
//             color: 'white',
//             boxShadow: '0 0 20px rgba(164, 58, 217, 0.4)',
//             border: '1px solid rgba(255,255,255,0.2)'
//         },
//         secondary: {
//             background: 'rgba(255, 255, 255, 0.03)',
//             color: 'var(--text-main)',
//             border: '1px solid rgba(255,255,255,0.15)',
//             backdropFilter: 'blur(10px)',
//             boxShadow: 'inset 0 0 12px rgba(255,255,255,0.05)'
//         }
//     };

//     return (
//         <button
//             ref={buttonRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             style={{ ...baseStyle, ...variants[variant], ...style }}
//             className={`cursor-pointer hover-lift ${props.className || ''}`}
//             {...props}
//         >
//             <span style={{
//                 pointerEvents: 'none',
//                 transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
//                 transition: mousePos.x === 0 ? 'all 0.5s ease' : 'none'
//             }}>
//                 {children}
//             </span>
//         </button>
//     );
// };

// export const SocialRow = () => {
//     const icons = [
//         {
//             label: 'GitHub',
//             url: 'https://github.com/',
//             svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
//         },
//         {
//             label: 'LinkedIn',
//             url: '#',
//             svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
//         }
//     ];

//     return (
//         <div style={{ display: 'flex', gap: '16px' }}>
//             {icons.map((ic) => (
//                 <MagneticIcon key={ic.label} ic={ic} />
//             ))}
//         </div>
//     );
// };

// const MagneticIcon = ({ ic }) => {
//     const iconRef = useRef(null);
//     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//     const handleMouseMove = (e) => {
//         const { clientX, clientY } = e;
//         const { left, top, width, height } = iconRef.current.getBoundingClientRect();
//         const x = clientX - (left + width / 2);
//         const y = clientY - (top + height / 2);
//         setMousePos({ x: x * 0.4, y: y * 0.4 });
//     };

//     return (
//         <a
//             ref={iconRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
//             href={ic.url}
//             style={{
//                 width: '46px',
//                 height: '46px',
//                 borderRadius: '50%',
//                 border: '1px solid rgba(255,255,255,0.1)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white',
//                 background: 'rgba(255,255,255,0.05)',
//                 transition: mousePos.x === 0 ? 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'transform 0.1s ease-out, background 0.3s',
//                 backdropFilter: 'blur(4px)',
//                 boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
//                 transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
//                 textDecoration: 'none'
//             }}
//             className="cursor-pointer hover-lift"
//             aria-label={ic.label}
//         >
//             <span style={{
//                 pointerEvents: 'none',
//                 transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
//                 transition: mousePos.x === 0 ? 'all 0.5s ease' : 'none'
//             }}>
//                 {ic.svg}
//             </span>
//         </a>
//     );
// };
import React, { useState, useRef } from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const buttonRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        setMousePos({ x: (clientX - (left + width / 2)) * 0.3, y: (clientY - (top + height / 2)) * 0.3 });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    const variants = {
        primary: "bg-accent text-white shadow-neon border border-white/20",
        secondary: "bg-white/5 text-text-main border border-white/15 backdrop-blur shadow-[inset_0_0_12px_rgba(255,255,255,0.05)]"
    };

    return (
        <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
            className={`
                px-9 py-3.5 rounded-pill text-base font-semibold inline-flex items-center justify-center gap-3
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
            url: 'https://github.com/',
            svg: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        },
        {
            label: 'LinkedIn',
            url: '#',
            svg: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
        }
    ];

    return (
        <div className="flex gap-4">
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
        const { clientX, clientY } = e;
        const { left, top, width, height } = iconRef.current.getBoundingClientRect();
        setMousePos({ x: (clientX - (left + width / 2)) * 0.4, y: (clientY - (top + height / 2)) * 0.4 });
    };

    return (
        <a
            ref={iconRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            href={ic.url}
            aria-label={ic.label}
            style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
            className={`
                w-[46px] h-[46px] rounded-full border border-white/10 flex items-center justify-center 
                text-white bg-white/5 backdrop-blur-sm shadow-md cursor-pointer hover-lift
                ${mousePos.x === 0 ? 'transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]' : 'duration-0'}
            `}
        >
            <span style={{ transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)` }}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {ic.svg}
                 </svg>
            </span>
        </a>
    );
};