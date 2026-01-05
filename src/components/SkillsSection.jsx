import React from 'react';
import { GlassCard, SectionTitle } from './SectionComponents';
import { FaAws, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostman, SiRender, SiTailwindcss, SiVercel } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Full Stack',
      priority: true,
      skills: [{ name: 'MERN Stack', icon: null, level: 80, composite: ['MongoDB', 'Express', 'React', 'Node.js'] }],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3 / Tailwind', icon: <SiTailwindcss /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React.js', icon: <FaReact /> },
      ],
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
      ],
    },
    {
      category: 'Programming & Cloud',
      skills: [
        { name: 'Python', icon: <FaPython />, isBasic: true, level: 40 },
        { name: 'AWS', icon: <FaAws />, isBasic: true, level: 40 },
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Render', icon: <SiRender /> },
      ],
    },
    {
      category: 'Tools & Version Control',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'VS Code', icon: <VscVscode /> },
      ],
    },
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
          <span key={i} className={i < stars ? 'opacity-100' : 'opacity-20'}>
            ⭐
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="px-5 pb-20 pt-0 md:px-20 md:pb-24" id="skills">
      <SectionTitle title="Skills / Tech Stack" subtitle="My Toolkit" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {skillCategories.map((cat, idx) => (
          <GlassCard key={idx} hoverEffect className={cat.priority ? 'border-accent/50 bg-accent/5' : ''}>
            <h3
              className={`text-xl mb-6 font-bold flex items-center gap-2.5 ${
                cat.priority ? 'text-accent' : 'text-white'
              }`}
            >
              {cat.category}
              {cat.priority && (
                <span className="text-xs bg-accent text-white px-2 py-0.5 rounded shadow-sm">Main strength</span>
              )}
            </h3>

            <div className="flex flex-col gap-5">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl text-accent">{skill.icon}</span>
                      <span className="text-white font-medium">{skill.name}</span>
                      {skill.isBasic && (
                        <span className="text-[10px] px-1.5 py-0.5 border border-white/20 rounded text-text-muted">
                          Basic
                        </span>
                      )}
                    </div>
                  </div>

                  {skill.level ? (
                    <div className="mt-1">
                      <StarRating level={skill.level} />
                      <ProgressBar level={skill.level} />
                    </div>
                  ) : null}

                  {skill.composite && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skill.composite.map((c, ci) => (
                        <span key={ci} className="text-[11px] text-text-muted bg-white/5 px-2 py-0.5 rounded">
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