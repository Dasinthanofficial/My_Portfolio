import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassCard, SectionTitle } from './SectionComponents';
import { Button } from './Buttons';

import reminexImg from '../assets/reminex.png';

const openInNewTab = (url) => {
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
};

const ProjectsSection = ({
  limit,
  showViewMore = false,
  title = 'My Projects',
  subtitle = 'Portfolio',
  sectionClassName = 'px-5 pb-20 pt-0 md:px-20 md:pb-24',
  titleClassName = '',
}) => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'ReminEx',
      desc: 'Web app to track food expiry, reduce waste, and suggest AI-powered recipes.',
      tags: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Tailwind CSS',
        'Stripe',
        'OpenRouter API',
        'Gemini Vision API',
      ],
      demoUrl: 'https://remin-ex-final-frontend.vercel.app/',
      image: reminexImg,
      githubLinks: [
        { label: 'Frontend', url: 'https://github.com/Dasinthanofficial/ReminEx_final_frontend.git' },
        { label: 'Backend', url: 'https://github.com/Dasinthanofficial/ReminEx_final_backend.git' },
      ],
    },
    {
      title: 'Real-time Chat',
      desc: 'Live messaging using Socket.io.',
      tags: ['Socket.io', 'Node.js', 'React'],
      demoUrl: 'https://your-demo-link.com',
      githubUrl: 'https://github.com/yourname/repo2',
    },
    {
      title: 'Python File Organizer',
      desc: 'Script to automatically sort files by extension.',
      tags: ['Python', 'Automation'],
      githubUrl: 'https://github.com/yourname/repo5',
    },
  ];

  const visibleProjects = typeof limit === 'number' ? projects.slice(0, limit) : projects;

  const getGithubLinks = (proj) => {
    if (Array.isArray(proj.githubLinks) && proj.githubLinks.length > 0) {
      return proj.githubLinks.filter((l) => l?.label && l?.url);
    }
    if (proj.githubUrl) return [{ label: 'GitHub', url: proj.githubUrl }];
    return [];
  };

  return (
    <section className={sectionClassName} id="my-projects">
      <SectionTitle title={title} subtitle={subtitle} className={titleClassName} />

      {/* Mobile-safe grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {visibleProjects.map((proj, i) => {
          const githubLinks = getGithubLinks(proj);
          const frontend = githubLinks.find((l) => l.label?.toLowerCase() === 'frontend');
          const backend = githubLinks.find((l) => l.label?.toLowerCase() === 'backend');
          const singleRepo = !frontend && !backend ? githubLinks[0] : null;

          return (
            <GlassCard key={`${proj.title}-${i}`} hoverEffect className="p-0 group">
              <div className="h-[200px] overflow-hidden relative border-b border-accent/20">
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2d0b55] to-bg0">
                    <span className="text-white/70 font-bold tracking-[4px] text-sm">PREVIEW</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="p-7">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={`${tag}-${idx}`}
                      className={`text-[11px] uppercase tracking-wider font-bold ${
                        idx === 0 ? 'text-accent' : 'text-text-muted'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-[22px] mb-2.5 text-white font-bold font-heading">{proj.title}</h3>

                <p className="text-text-muted text-[15px] leading-relaxed mb-6">{proj.desc}</p>

                <div className="grid grid-cols-2 gap-3">
                  {proj.demoUrl ? (
                    <Button
                      variant="primary"
                      className="col-span-2 px-6 py-2.5 text-sm rounded-xl"
                      onClick={() => openInNewTab(proj.demoUrl)}
                    >
                      Live Demo
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      className="col-span-2 px-6 py-2.5 text-sm rounded-xl cursor-not-allowed"
                      disabled
                    >
                      Demo N/A
                    </Button>
                  )}

                  {frontend && backend ? (
                    <>
                      <Button
                        variant="secondary"
                        className="px-6 py-2.5 text-sm rounded-xl"
                        onClick={() => openInNewTab(frontend.url)}
                      >
                        Frontend
                      </Button>
                      <Button
                        variant="secondary"
                        className="px-6 py-2.5 text-sm rounded-xl"
                        onClick={() => openInNewTab(backend.url)}
                      >
                        Backend
                      </Button>
                    </>
                  ) : singleRepo ? (
                    <Button
                      variant="secondary"
                      className="col-span-2 px-6 py-2.5 text-sm rounded-xl"
                      onClick={() => openInNewTab(singleRepo.url)}
                    >
                      {singleRepo.label || 'GitHub'}
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      className="col-span-2 px-6 py-2.5 text-sm rounded-xl cursor-not-allowed"
                      disabled
                    >
                      Repo N/A
                    </Button>
                  )}
                </div>
              </div>
            </GlassCard>
          );
        })}
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