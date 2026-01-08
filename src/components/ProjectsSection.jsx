// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GlassCard, SectionTitle } from './SectionComponents';
// import { Button } from './Buttons';

// import reminexImg from '../assets/reminex.png';

// const openInNewTab = (url) => {
//   if (!url) return;
//   window.open(url, '_blank', 'noopener,noreferrer');
// };

// const ProjectsSection = ({
//   limit,
//   showViewMore = false,
//   title = 'My Projects',
//   subtitle = 'Portfolio',
//   sectionClassName = 'px-5 pb-20 pt-0 md:px-20 md:pb-24',
//   titleClassName = '',
// }) => {
//   const navigate = useNavigate();

//   const projects = [
//     {
//       title: 'ReminEx',
//       desc: 'Web app to track food expiry, reduce waste, and suggest AI-powered recipes.',
//       tags: [
//         'React',
//         'Node.js',
//         'Express',
//         'MongoDB',
//         'Tailwind CSS',
//         'Stripe',
//         'OpenRouter API',
//         'Gemini Vision API',
//       ],
//       demoUrl: 'https://remin-ex-final-frontend.vercel.app/',
//       image: reminexImg,
//       githubLinks: [
//         { label: 'Frontend', url: 'https://github.com/Dasinthanofficial/ReminEx_final_frontend.git' },
//         { label: 'Backend', url: 'https://github.com/Dasinthanofficial/ReminEx_final_backend.git' },
//       ],
//     },
//     {
//       title: 'Live Weather Checker',
//       desc: 'Real-time weather app with city search',
//       tags: ['React','openWeatherMap API','Tailwind CSS'],
//       demoUrl: 'https://weather-woad-three-53.vercel.app/',
//        githubLinks: [
//         { label: 'Frontend', url: 'https://github.com/Dasinthanofficial/Weather_checker_location_based.git' },
//         { label: 'Backend', url: '' },
//       ],
//     },
//     {
//       title: 'Python File Organizer',
//       desc: 'Script to automatically sort files by extension.',
//       tags: ['Python', 'Automation'],
//       githubUrl: 'https://github.com/yourname/repo5',
//     },
//   ];

//   const visibleProjects = typeof limit === 'number' ? projects.slice(0, limit) : projects;

//   const getGithubLinks = (proj) => {
//     if (Array.isArray(proj.githubLinks) && proj.githubLinks.length > 0) {
//       return proj.githubLinks.filter((l) => l?.label && l?.url);
//     }
//     if (proj.githubUrl) return [{ label: 'GitHub', url: proj.githubUrl }];
//     return [];
//   };

//   return (
//     <section className={sectionClassName} id="my-projects">
//       <SectionTitle title={title} subtitle={subtitle} className={titleClassName} />

//       {/* Mobile-safe grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
//         {visibleProjects.map((proj, i) => {
//           const githubLinks = getGithubLinks(proj);
//           const frontend = githubLinks.find((l) => l.label?.toLowerCase() === 'frontend');
//           const backend = githubLinks.find((l) => l.label?.toLowerCase() === 'backend');
//           const singleRepo = !frontend && !backend ? githubLinks[0] : null;

//           return (
//             <GlassCard key={`${proj.title}-${i}`} hoverEffect className="p-0 group">
//               <div className="h-[200px] overflow-hidden relative border-b border-accent/20">
//                 {proj.image ? (
//                   <img
//                     src={proj.image}
//                     alt={proj.title}
//                     loading="lazy"
//                     decoding="async"
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2d0b55] to-bg0">
//                     <span className="text-white/70 font-bold tracking-[4px] text-sm">PREVIEW</span>
//                   </div>
//                 )}
//                 <div className="absolute inset-0 bg-black/20" />
//               </div>

//               <div className="p-7">
//                 <div className="flex gap-2 mb-4 flex-wrap">
//                   {proj.tags.map((tag, idx) => (
//                     <span
//                       key={`${tag}-${idx}`}
//                       className={`text-[11px] uppercase tracking-wider font-bold ${
//                         idx === 0 ? 'text-accent' : 'text-text-muted'
//                       }`}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <h3 className="text-[22px] mb-2.5 text-white font-bold font-heading">{proj.title}</h3>

//                 <p className="text-text-muted text-[15px] leading-relaxed mb-6">{proj.desc}</p>

//                 <div className="grid grid-cols-2 gap-3">
//                   {proj.demoUrl ? (
//                     <Button
//                       variant="primary"
//                       className="col-span-2 px-6 py-2.5 text-sm rounded-xl"
//                       onClick={() => openInNewTab(proj.demoUrl)}
//                     >
//                       Live Demo
//                     </Button>
//                   ) : (
//                     <Button
//                       variant="secondary"
//                       className="col-span-2 px-6 py-2.5 text-sm rounded-xl cursor-not-allowed"
//                       disabled
//                     >
//                       Demo N/A
//                     </Button>
//                   )}

//                   {frontend && backend ? (
//                     <>
//                       <Button
//                         variant="secondary"
//                         className="px-6 py-2.5 text-sm rounded-xl"
//                         onClick={() => openInNewTab(frontend.url)}
//                       >
//                         Frontend
//                       </Button>
//                       <Button
//                         variant="secondary"
//                         className="px-6 py-2.5 text-sm rounded-xl"
//                         onClick={() => openInNewTab(backend.url)}
//                       >
//                         Backend
//                       </Button>
//                     </>
//                   ) : singleRepo ? (
//                     <Button
//                       variant="secondary"
//                       className="col-span-2 px-6 py-2.5 text-sm rounded-xl"
//                       onClick={() => openInNewTab(singleRepo.url)}
//                     >
//                       {singleRepo.label || 'GitHub'}
//                     </Button>
//                   ) : (
//                     <Button
//                       variant="secondary"
//                       className="col-span-2 px-6 py-2.5 text-sm rounded-xl cursor-not-allowed"
//                       disabled
//                     >
//                       Repo N/A
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </GlassCard>
//           );
//         })}
//       </div>

//       {showViewMore && typeof limit === 'number' && projects.length > limit && (
//         <div className="mt-10 flex justify-center">
//           <Button variant="secondary" onClick={() => navigate('/projects')}>
//             View More Projects
//           </Button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProjectsSection;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassCard, SectionTitle } from './SectionComponents';
import { Button } from './Buttons';
import reminexImg from '../assets/reminex.png';
import form from '../assets/form.png';

const normalizeUrl = (url) => {
  const u = (url ?? '').toString().trim();
  if (!u) return '';
  return u.replace(/\.git$/i, '');
};

const openInNewTab = (url) => {
  const u = normalizeUrl(url);
  if (!u) return;
  window.open(u, '_blank', 'noopener,noreferrer');
};

const clampStyle = (lines) => ({
  display: '-webkit-box',
  WebkitLineClamp: lines,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

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
      title: 'Live Weather Checker',
      desc: 'Real-time weather app with city search',
      tags: ['React', 'openWeatherMap API', 'Tailwind CSS'],
      demoUrl: 'https://weather-woad-three-53.vercel.app/',
      githubLinks: [
        { label: 'Frontend', url: 'https://github.com/Dasinthanofficial/Weather_checker_location_based.git' },
        { label: 'Backend', url: '' }, // Backend button will show N/A (disabled)
      ],
    },
    {
      title: 'React Simple Form',
      desc: '',
      tags: ['React', 'Tailwind CSS'],
      demoUrl: 'https://react-simple-form-eta.vercel.app/',
      image: form,
      githubLinks: [
        { label: 'Frontend', url: 'https://github.com/Dasinthanofficial/React_simple_form.git' },
        { label: 'Backend', url: '' }, // Backend button will show N/A (disabled)
      ],
    },
  ];

  const visibleProjects = typeof limit === 'number' ? projects.slice(0, limit) : projects;

  const getLinkByLabel = (proj, label) => {
    const links = Array.isArray(proj.githubLinks) ? proj.githubLinks : [];
    const found = links.find((l) => (l?.label ?? '').toLowerCase() === label.toLowerCase());
    return normalizeUrl(found?.url);
  };

  const ActionButton = ({ url, label, variant = 'secondary' }) => {
    const available = !!normalizeUrl(url);

    return (
      <Button
        magnetic={false}
        variant={available ? variant : 'secondary'}
        disabled={!available}
        onClick={available ? () => openInNewTab(url) : undefined}
        className={[
          '!w-full !h-11 !px-4 !py-0 !rounded-xl',
          '!inline-flex items-center justify-center',
          'text-[13px] sm:text-sm font-semibold whitespace-nowrap',
          !available ? 'opacity-60 cursor-not-allowed' : '',
        ].join(' ')}
        title={available ? label : `${label} not available`}
      >
        {available ? label : `${label} N/A`}
      </Button>
    );
  };

  return (
    <section className={sectionClassName} id="my-projects">
      <SectionTitle title={title} subtitle={subtitle} className={titleClassName} />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
        {visibleProjects.map((proj, i) => {
          const demoUrl = normalizeUrl(proj.demoUrl);

          // Frontend: use Frontend repo, otherwise fallback to githubUrl
          const frontendUrl = getLinkByLabel(proj, 'frontend') || normalizeUrl(proj.githubUrl);

          // Backend: only use Backend repo (no fallback)
          const backendUrl = getLinkByLabel(proj, 'backend');

          return (
            <GlassCard key={`${proj.title}-${i}`} hoverEffect className="p-0 group h-full">
              {/* ✅ inner flex column fixes the "buttons not showing" problem */}
              <div className="h-full flex flex-col">
                <div className="h-[200px] overflow-hidden relative border-b border-accent/20 shrink-0">
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

                <div className="p-7 flex flex-col flex-1">
                  <div className="mb-4 min-h-[40px]" style={clampStyle(2)}>
                    <div className="flex gap-2 flex-wrap">
                      {proj.tags.map((tag, idx) => (
                        <span
                          key={`${tag}-${idx}`}
                          className={`text-[11px] uppercase tracking-wider font-bold ${idx === 0 ? 'text-accent' : 'text-text-muted'
                            }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-[22px] mb-2.5 text-white font-bold font-heading">{proj.title}</h3>

                  <p className="text-text-muted text-[15px] leading-relaxed mb-6 min-h-[72px]" style={clampStyle(3)}>
                    {proj.desc}
                  </p>

                  {/* ✅ clean button layout (1 + 2) */}
                  <div className="mt-auto">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="col-span-2">
                        <ActionButton url={demoUrl} variant="primary" label="Live Demo" />
                      </div>
                      <ActionButton url={frontendUrl} label="Frontend" />
                      <ActionButton url={backendUrl} label="Backend" />
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* ✅ View More button */}
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