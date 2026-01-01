// import React from 'react';
// import { GlassCard, SectionTitle } from './SectionComponents';
// import {
//     FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt, FaGithub
// } from 'react-icons/fa';
// import {
//     SiTailwindcss, SiExpress, SiMongodb, SiVercel, SiRender, SiPostman
// } from 'react-icons/si';
// import { VscVscode } from 'react-icons/vsc';

// const SkillsSection = () => {
//     const skillCategories = [
//         {
//             category: "Full Stack",
//             priority: true,
//             skills: [
//                 { name: "MERN Stack", icon: null, level: 80, composite: ["MongoDB", "Express", "React", "Node.js"] }
//             ]
//         },
//         {
//             category: "Frontend",
//             skills: [
//                 { name: "HTML5", icon: <FaHtml5 /> },
//                 { name: "CSS3 / Tailwind", icon: <SiTailwindcss /> },
//                 { name: "JavaScript", icon: <FaJs /> },
//                 { name: "React.js", icon: <FaReact /> }
//             ]
//         },
//         {
//             category: "Backend & Database",
//             skills: [
//                 { name: "Node.js", icon: <FaNodeJs /> },
//                 { name: "Express.js", icon: <SiExpress /> },
//                 { name: "MongoDB", icon: <SiMongodb /> }
//             ]
//         },
//         {
//             category: "Programming & Cloud",
//             skills: [
//                 { name: "Python", icon: <FaPython />, isBasic: true, level: 40 },
//                 { name: "AWS", icon: <FaAws />, isBasic: true, level: 40 },
//                 { name: "Vercel", icon: <SiVercel /> },
//                 { name: "Render", icon: <SiRender /> }
//             ]
//         },
//         {
//             category: "Tools & Version Control",
//             skills: [
//                 { name: "Git", icon: <FaGitAlt /> },
//                 { name: "GitHub", icon: <FaGithub /> },
//                 { name: "Postman", icon: <SiPostman /> },
//                 { name: "VS Code", icon: <VscVscode /> }
//             ]
//         }
//     ];

//     const ProgressBar = ({ level, color = "var(--accent-primary)" }) => (
//         <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', marginTop: '12px', overflow: 'hidden' }}>
//             <div style={{ width: `${level}%`, height: '100%', background: color, borderRadius: '10px', boxShadow: `0 0 10px ${color}` }}></div>
//         </div>
//     );

//     const StarRating = ({ level }) => {
//         const stars = Math.round(level / 20);
//         return (
//             <div style={{ display: 'flex', gap: '4px', marginTop: '8px', color: 'var(--accent-primary)' }}>
//                 {[...Array(5)].map((_, i) => (
//                     <span key={i} style={{ opacity: i < stars ? 1 : 0.2 }}>⭐</span>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <section style={{ padding: '0 80px 100px' }} id="skills">
//             <SectionTitle title="Skills / Tech Stack" subtitle="My Toolkit" />

//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
//                 {skillCategories.map((cat, idx) => (
//                     <GlassCard key={idx} hoverEffect style={{
//                         border: cat.priority ? '1px solid rgba(164, 58, 217, 0.5)' : '1px solid var(--glass-border)',
//                         background: cat.priority ? 'rgba(164, 58, 217, 0.05)' : 'var(--glass-bg)'
//                     }}>
//                         <h3 style={{
//                             fontSize: '20px',
//                             color: cat.priority ? 'var(--accent-primary)' : 'white',
//                             marginBottom: '24px',
//                             fontWeight: '700',
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '10px'
//                         }}>
//                             {cat.category}
//                             {cat.priority && <span style={{ fontSize: '12px', background: 'var(--accent-primary)', color: 'white', padding: '2px 8px', borderRadius: '4px' }}>Main strength</span>}
//                         </h3>

//                         <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//                             {cat.skills.map((skill, sIdx) => (
//                                 <div key={sIdx}>
//                                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                                         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                                             <span style={{ fontSize: '24px', color: 'var(--accent-primary)' }}>{skill.icon}</span>
//                                             <span style={{ color: 'white', fontWeight: '500' }}>{skill.name}</span>
//                                             {skill.isBasic && (
//                                                 <span style={{
//                                                     fontSize: '10px',
//                                                     padding: '2px 6px',
//                                                     border: '1px solid rgba(255,255,255,0.2)',
//                                                     borderRadius: '4px',
//                                                     color: 'var(--text-muted)'
//                                                 }}>Basic</span>
//                                             )}
//                                         </div>
//                                     </div>
//                                     {skill.level && (
//                                         <div style={{ marginTop: '4px' }}>
//                                             <StarRating level={skill.level} />
//                                             <ProgressBar level={skill.level} />
//                                         </div>
//                                     )}
//                                     {skill.composite && (
//                                         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
//                                             {skill.composite.map((c, ci) => (
//                                                 <span key={ci} style={{ fontSize: '11px', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>{c}</span>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </GlassCard>
//                 ))}
//             </div>

//             <style>{`
//                 @media (max-width: 900px) {
//                     section#skills { padding: 0 20px 80px !important; }
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default SkillsSection;

import React from 'react';
import { GlassCard, SectionTitle } from './SectionComponents';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
    SiTailwindcss, SiExpress, SiMongodb, SiVercel, SiRender, SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const SkillsSection = () => {
    const skillCategories = [
        {
            category: "Full Stack",
            priority: true,
            skills: [
                { name: "MERN Stack", icon: null, level: 80, composite: ["MongoDB", "Express", "React", "Node.js"] }
            ]
        },
        {
            category: "Frontend",
            skills: [
                { name: "HTML5", icon: <FaHtml5 /> },
                { name: "CSS3 / Tailwind", icon: <SiTailwindcss /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "React.js", icon: <FaReact /> }
            ]
        },
        {
            category: "Backend & Database",
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "MongoDB", icon: <SiMongodb /> }
            ]
        },
        {
            category: "Programming & Cloud",
            skills: [
                { name: "Python", icon: <FaPython />, isBasic: true, level: 40 },
                { name: "AWS", icon: <FaAws />, isBasic: true, level: 40 },
                { name: "Vercel", icon: <SiVercel /> },
                { name: "Render", icon: <SiRender /> }
            ]
        },
        {
            category: "Tools & Version Control",
            skills: [
                { name: "Git", icon: <FaGitAlt /> },
                { name: "GitHub", icon: <FaGithub /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "VS Code", icon: <VscVscode /> }
            ]
        }
    ];

    const ProgressBar = ({ level }) => (
        <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
            <div 
                className="h-full bg-accent rounded-full shadow-[0_0_10px_var(--accent-primary)]"
                style={{ width: `${level}%` }}
            />
        </div>
    );

    const StarRating = ({ level }) => {
        const stars = Math.round(level / 20);
        return (
            <div className="flex gap-1 mt-2 text-accent">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < stars ? 'opacity-100' : 'opacity-20'}>⭐</span>
                ))}
            </div>
        );
    };

    return (
        <section className="px-5 pb-20 pt-0 md:px-20 md:pb-24" id="skills">
            <SectionTitle title="Skills / Tech Stack" subtitle="My Toolkit" />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6">
                {skillCategories.map((cat, idx) => (
                    <GlassCard 
                        key={idx} 
                        hoverEffect 
                        className={cat.priority 
                            ? 'border-accent/50 bg-accent/5' 
                            : ''}
                    >
                        {/* Category Header */}
                        <h3 className={`text-xl mb-6 font-bold flex items-center gap-2.5 
                            ${cat.priority ? 'text-accent' : 'text-white'}`}>
                            {cat.category}
                            {cat.priority && (
                                <span className="text-xs bg-accent text-white px-2 py-0.5 rounded shadow-sm">
                                    Main strength
                                </span>
                            )}
                        </h3>

                        {/* Skills List */}
                        <div className="flex flex-col gap-5">
                            {cat.skills.map((skill, sIdx) => (
                                <div key={sIdx}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl text-accent">{skill.icon}</span>
                                            <span className="text-white font-medium">{skill.name}</span>
                                            {skill.isBasic && (
                                                <span className="text-[10px] px-1.5 py-0.5 border border-white/20 
                                                               rounded text-text-muted">
                                                    Basic
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Progress & Rating (if applicable) */}
                                    {skill.level && (
                                        <div className="mt-1">
                                            <StarRating level={skill.level} />
                                            <ProgressBar level={skill.level} />
                                        </div>
                                    )}

                                    {/* Composite Skills Chips */}
                                    {skill.composite && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {skill.composite.map((c, ci) => (
                                                <span key={ci} className="text-[11px] text-text-muted bg-white/5 
                                                                        px-2 py-0.5 rounded">
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;