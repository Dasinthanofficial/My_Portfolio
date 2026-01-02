import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassCard, SectionTitle } from './SectionComponents';
import { Button } from './Buttons';

const ProjectsSection = ({ limit, showViewMore = false, title = 'My Projects', subtitle = 'Portfolio' }) => {
  const navigate = useNavigate();

  const projects = [
    { title: 'MERN Task Manager', desc: 'Drag and drop task board with auth.', tags: ['React', 'DND', 'MongoDB'] },
    { title: 'Real-time Chat', desc: 'Live messaging using Socket.io.', tags: ['Socket.io', 'Node', 'React'] },
    { title: 'Mini E-commerce', desc: 'Product grid with cart functionality.', tags: ['React', 'Stripe', 'ContextAPI'] },
    { title: 'Portfolio Dashboard', desc: 'Admin panel to manage content.', tags: ['React', 'Firebase'] },
    { title: 'Python File Organizer', desc: 'Script to sort files by extension.', tags: ['Python', 'OS', 'Automation'] },
    { title: 'AWS S3 Uploader', desc: 'Simple image upload to cloud storage.', tags: ['AWS S3', 'Node', 'Multer'] },
  ];

  const visibleProjects = typeof limit === 'number' ? projects.slice(0, limit) : projects;

  return (
    <section className="px-5 pb-20 pt-0 md:px-20 md:pb-24" id="my-projects">
      <SectionTitle title={title} subtitle={subtitle} />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
        {visibleProjects.map((proj, i) => (
          <GlassCard key={i} hoverEffect className="p-0 overflow-hidden group">
            <div
              className="h-[200px] bg-gradient-to-br from-[#2d0b55] to-bg0 
                         flex items-center justify-center relative overflow-hidden
                         border-b border-accent/20"
            >
              <div
                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] 
                           bg-[radial-gradient(circle,rgba(164,58,217,0.15)_0%,transparent_60%)] 
                           rotate-[30deg]"
              />
              <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-accent/10 blur-[30px] rounded-full" />
              <span className="text-white/70 font-bold tracking-[4px] z-10 text-sm drop-shadow-[0_0_10px_rgba(164,58,217,0.5)]">
                PREVIEW
              </span>
            </div>

            <div className="p-7">
              <div className="flex gap-2 mb-4 flex-wrap">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-[11px] uppercase tracking-wider font-bold ${idx === 0 ? 'text-accent' : 'text-text-muted'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-[22px] mb-2.5 text-white font-bold font-heading">{proj.title}</h3>
              <p className="text-text-muted text-[15px] leading-relaxed mb-7 min-h-[48px]">{proj.desc}</p>

              <div className="flex gap-3">
                <Button variant="primary" className="px-6 py-2.5 text-sm rounded-xl">
                  Live Demo
                </Button>
                <Button variant="secondary" className="px-6 py-2.5 text-sm rounded-xl">
                  GitHub
                </Button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {showViewMore && typeof limit === 'number' && projects.length > limit && (
        <div className="mt-10 flex justify-center">
          <Button variant="secondary" onClick={() => navigate('/projects')}>
            View More Projects
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;