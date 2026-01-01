// import React from 'react';

// export const GlassCard = ({ children, className = '', style, hoverEffect = false }) => {
//     return (
//         <div
//             className={`glass-card ${className} ${hoverEffect ? 'hover-lift' : ''}`}
//             style={{
//                 background: 'var(--glass-bg)',
//                 backdropFilter: 'blur(var(--glass-blur))',
//                 WebkitBackdropFilter: 'blur(var(--glass-blur))',
//                 border: '1px solid var(--glass-border)',
//                 borderRadius: 'var(--radius-card)',
//                 padding: '32px',
//                 boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
//                 transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 ...style
//             }}
//         >
//             {/* Dynamic Inner Glow */}
//             <div style={{
//                 position: 'absolute',
//                 top: 0, left: 0, width: '100%', height: '100%',
//                 background: 'var(--gradient-card)',
//                 pointerEvents: 'none',
//                 opacity: 0.5,
//                 zIndex: 0
//             }} />
//             <div style={{ position: 'relative', zIndex: 1 }}>
//                 {children}
//             </div>
//         </div>
//     );
// };

// export const SectionTitle = ({ title, subtitle, centered = true, id }) => {
//     return (
//         <div style={{
//             textAlign: centered ? 'center' : 'left',
//             marginBottom: '60px',
//             position: 'relative',
//             zIndex: 1
//         }} id={id}>
//             {subtitle && (
//                 <span style={{
//                     display: 'block',
//                     color: 'var(--accent-primary)',
//                     fontSize: '14px',
//                     fontWeight: '700',
//                     letterSpacing: '3px',
//                     marginBottom: '12px',
//                     textTransform: 'uppercase',
//                     textShadow: '0 0 10px rgba(164, 58, 217, 0.5)'
//                 }}>
//                     {subtitle}
//                 </span>
//             )}
//             <h2 style={{
//                 fontSize: '48px',
//                 fontWeight: '800',
//                 color: 'white',
//                 margin: 0,
//                 letterSpacing: '-1px',
//                 textShadow: '0 2px 20px rgba(164, 58, 217, 0.3)'
//             }}>
//                 {title}
//             </h2>
//             {/* Soft glow behind title */}
//             <div style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: centered ? '50%' : '0',
//                 transform: 'translate(-50%, -50%)',
//                 width: '300px',
//                 height: '100px',
//                 background: 'radial-gradient(ellipse at center, rgba(164, 58, 217, 0.25) 0%, transparent 70%)',
//                 filter: 'blur(50px)',
//                 zIndex: -1,
//                 pointerEvents: 'none'
//             }}></div>
//         </div>
//     );
// };
import React from 'react';

export const GlassCard = ({ children, className = '', hoverEffect = false, ...props }) => {
    return (
        <div
            className={`
                bg-glass-bg backdrop-blur-glass border border-glass-border rounded-card p-8 
                shadow-glass relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                ${hoverEffect ? 'hover-lift' : ''} 
                ${className}
            `}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-card pointer-events-none opacity-50 z-0" />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export const SectionTitle = ({ title, subtitle, centered = true, id }) => {
    return (
        <div 
            id={id} 
            className={`mb-16 relative z-10 ${centered ? 'text-center' : 'text-left'}`}
        >
            {subtitle && (
                <span className="block text-accent text-sm font-bold tracking-[3px] mb-3 uppercase 
                               drop-shadow-[0_0_10px_rgba(164,58,217,0.5)]">
                    {subtitle}
                </span>
            )}
            
            <h2 className="text-5xl font-extrabold text-white m-0 tracking-tight 
                         drop-shadow-[0_2px_20px_rgba(164,58,217,0.3)] font-heading">
                {title}
            </h2>

            <div className={`
                absolute top-1/2 -translate-y-1/2 w-[300px] h-[100px] 
                bg-[radial-gradient(ellipse_at_center,rgba(164,58,217,0.25)_0%,transparent_70%)] 
                blur-[50px] -z-10 pointer-events-none
                ${centered ? 'left-1/2 -translate-x-1/2' : 'left-0'}
            `} />
        </div>
    );
};