// import React from 'react';
// import { GlassCard, SectionTitle } from './SectionComponents';
// import { Button } from './Buttons';

// const ProjectsSection = () => {
//     const projects = [
//         { title: 'MERN Task Manager', desc: 'Drag and drop task board with auth.', tags: ['React', 'DND', 'MongoDB'] },
//         { title: 'Real-time Chat', desc: 'Live messaging using Socket.io.', tags: ['Socket.io', 'Node', 'React'] },
//         { title: 'Mini E-commerce', desc: 'Product grid with cart functionality.', tags: ['React', 'Stripe', 'ContextAPI'] },
//         { title: 'Portfolio Dashboard', desc: 'Admin panel to manage content.', tags: ['React', 'Firebase'] },
//         { title: 'Python File Organizer', desc: 'Script to sort files by extension.', tags: ['Python', 'OS', 'Automation'] },
//         { title: 'AWS S3 Uploader', desc: 'Simple image upload to cloud storage.', tags: ['AWS S3', 'Node', 'Multer'] },
//     ];

//     return (
//         <section style={{ padding: '0 80px 100px' }} id="my-projects">
//             <SectionTitle title="My Projects" subtitle="Portfolio" />

//             <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
//                 gap: '32px'
//             }} className="projects-grid">
//                 {projects.map((proj, i) => (
//                     <GlassCard key={i} hoverEffect style={{ padding: 0, overflow: 'hidden' }}>
//                         {/* Neon Placeholder Thumbnail */}
//                         <div style={{
//                             height: '200px',
//                             background: 'linear-gradient(135deg, #2d0b55 0%, #0B0014 100%)',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             borderBottom: '1px solid rgba(164, 58, 217, 0.2)',
//                             position: 'relative',
//                             overflow: 'hidden'
//                         }}>
//                             {/* Decorative glow in thumb */}
//                             <div style={{
//                                 position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
//                                 background: 'radial-gradient(circle, rgba(164, 58, 217, 0.15) 0%, transparent 60%)',
//                                 transform: 'rotate(30deg)'
//                             }}></div>
//                             <div style={{
//                                 position: 'absolute', bottom: '0', right: '0', width: '100px', height: '100px',
//                                 background: 'rgba(164, 58, 217, 0.1)',
//                                 filter: 'blur(30px)',
//                                 borderRadius: '50%'
//                             }}></div>
//                             <span style={{
//                                 color: 'rgba(255,255,255,0.7)',
//                                 fontWeight: '700',
//                                 letterSpacing: '4px',
//                                 zIndex: 1,
//                                 fontSize: '14px',
//                                 textShadow: '0 0 10px rgba(164, 58, 217, 0.5)'
//                             }}>
//                                 PREVIEW
//                             </span>
//                         </div>

//                         <div style={{ padding: '28px' }}>
//                             <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
//                                 {proj.tags.map((tag, idx) => (
//                                     <span key={idx} style={{
//                                         fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700',
//                                         color: idx === 0 ? 'var(--accent-primary)' : 'var(--text-muted)'
//                                     }}>{tag}</span>
//                                 ))}
//                             </div>
//                             <h3 style={{ fontSize: '22px', marginBottom: '10px', color: 'white', fontWeight: '700' }}>{proj.title}</h3>
//                             <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6', marginBottom: '28px', minHeight: '48px' }}>
//                                 {proj.desc}
//                             </p>
//                             <div style={{ display: 'flex', gap: '12px' }}>
//                                 <Button variant="primary" style={{ padding: '10px 24px', fontSize: '14px' }}>Live Demo</Button>
//                                 <Button variant="secondary" style={{ padding: '10px 24px', fontSize: '14px' }}>GitHub</Button>
//                             </div>
//                         </div>
//                     </GlassCard>
//                 ))}
//             </div>
//             <style>{`
//           @media (max-width: 900px) {
//              section#my-projects { padding: 0 20px 80px !important; }
//           }
//         `}</style>
//         </section>
//     );
// };

// export default ProjectsSection;

import React from 'react';
import { GlassCard, SectionTitle } from './SectionComponents';
import { Button } from './Buttons';

const ProjectsSection = () => {
    const projects = [
        { title: 'MERN Task Manager', desc: 'Drag and drop task board with auth.', tags: ['React', 'DND', 'MongoDB'] },
        { title: 'Real-time Chat', desc: 'Live messaging using Socket.io.', tags: ['Socket.io', 'Node', 'React'] },
        { title: 'Mini E-commerce', desc: 'Product grid with cart functionality.', tags: ['React', 'Stripe', 'ContextAPI'] },
        { title: 'Portfolio Dashboard', desc: 'Admin panel to manage content.', tags: ['React', 'Firebase'] },
        { title: 'Python File Organizer', desc: 'Script to sort files by extension.', tags: ['Python', 'OS', 'Automation'] },
        { title: 'AWS S3 Uploader', desc: 'Simple image upload to cloud storage.', tags: ['AWS S3', 'Node', 'Multer'] },
    ];

    return (
        <section className="px-5 pb-20 pt-0 md:px-20 md:pb-24" id="my-projects">
            <SectionTitle title="My Projects" subtitle="Portfolio" />

            <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
                {projects.map((proj, i) => (
                    // We remove default padding from GlassCard and add overflow-hidden to handle the image
                    <GlassCard key={i} hoverEffect className="p-0 overflow-hidden group">
                        
                        {/* Neon Placeholder Thumbnail */}
                        <div className="h-[200px] bg-gradient-to-br from-[#2d0b55] to-bg0 
                                      flex items-center justify-center relative overflow-hidden
                                      border-b border-accent/20">
                            
                            {/* Decorative angled glow */}
                            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] 
                                          bg-[radial-gradient(circle,rgba(164,58,217,0.15)_0%,transparent_60%)] 
                                          rotate-[30deg]" />
                            
                            {/* Bottom corner glow */}
                            <div className="absolute bottom-0 right-0 w-[100px] h-[100px] 
                                          bg-accent/10 blur-[30px] rounded-full" />
                            
                            <span className="text-white/70 font-bold tracking-[4px] z-10 text-sm 
                                           drop-shadow-[0_0_10px_rgba(164,58,217,0.5)]">
                                PREVIEW
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-7">
                            {/* Tags */}
                            <div className="flex gap-2 mb-4 flex-wrap">
                                {proj.tags.map((tag, idx) => (
                                    <span key={idx} className={`text-[11px] uppercase tracking-wider font-bold 
                                        ${idx === 0 ? 'text-accent' : 'text-text-muted'}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-[22px] mb-2.5 text-white font-bold font-heading">{proj.title}</h3>
                            <p className="text-text-muted text-[15px] leading-relaxed mb-7 min-h-[48px]">
                                {proj.desc}
                            </p>

                            <div className="flex gap-3">
                                <Button variant="primary" className="px-6 py-2.5 text-sm rounded-xl">Live Demo</Button>
                                <Button variant="secondary" className="px-6 py-2.5 text-sm rounded-xl">GitHub</Button>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;