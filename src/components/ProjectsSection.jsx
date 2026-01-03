// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GlassCard, SectionTitle } from './SectionComponents';
// import { Button } from './Buttons';

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
//       tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe','OpenRouter API','Google Gemini Vision API'],
//       demoUrl: 'https://remin-ex-final-frontend.vercel.app/',
//       githubLinks: [
//         { label: 'Frontend', url: 'https://github.com/Dasinthanofficial/ReminEx_final_frontend.git' },
//         { label: 'Backend', url: 'https://github.com/Dasinthanofficial/ReminEx_final_backend.git' },
//       ],
//     },
//     {
//       title: 'Real-time Chat',
//       desc: 'Live messaging using Socket.io.',
//       tags: ['Socket.io', 'Node', 'React'],
//       demoUrl: 'https://your-demo-link.com',
//       githubUrl: 'https://github.com/yourname/repo2',
//     },
//     {
//       title: 'Python File Organizer',
//       desc: 'Script to sort files by extension.',
//       tags: ['Python', 'OS', 'Automation'],
//       demoUrl: '',
//       githubUrl: 'https://github.com/yourname/repo5',
//     },
//   ];

//   const visibleProjects =
//     typeof limit === 'number' ? projects.slice(0, limit) : projects;

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

//       <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
//         {visibleProjects.map((proj, i) => {
//           const githubLinks = getGithubLinks(proj);

//           const frontend = githubLinks.find((l) => l.label?.toLowerCase() === 'frontend');
//           const backend = githubLinks.find((l) => l.label?.toLowerCase() === 'backend');
//           const singleRepo = !frontend && !backend ? githubLinks[0] : null;

//           return (
//             <GlassCard key={`${proj.title}-${i}`} hoverEffect className="p-0 group">
//               {/* Thumbnail */}
//               <div
//                 className="h-[200px] overflow-hidden bg-gradient-to-br from-[#2d0b55] to-bg0 
//                            flex items-center justify-center relative
//                            border-b border-accent/20"
//               >
//                 <div
//                   className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] 
//                              bg-[radial-gradient(circle,rgba(164,58,217,0.15)_0%,transparent_60%)] 
//                              rotate-[30deg]"
//                 />
//                 <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-accent/10 blur-[30px] rounded-full" />
//                 <span className="text-white/70 font-bold tracking-[4px] z-10 text-sm drop-shadow-[0_0_10px_rgba(164,58,217,0.5)]">
//                   PREVIEW
//                 </span>
//               </div>

//               {/* Content */}
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

//                 <h3 className="text-[22px] mb-2.5 text-white font-bold font-heading">
//                   {proj.title}
//                 </h3>

//                 <p className="text-text-muted text-[15px] leading-relaxed mb-6">
//                   {proj.desc}
//                 </p>

//                 {/* ✅ Buttons are NOT pinned to bottom anymore, so you always see them */}
//                 <div className="grid grid-cols-2 gap-3">
//                   {/* Demo full width */}
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
//                       className="col-span-2 px-6 py-2.5 text-sm rounded-xl opacity-100 cursor-not-allowed"
//                       disabled
//                     >
//                       Demo N/A
//                     </Button>
//                   )}

//                   {/* FE + BE => 2 buttons (total 3 with demo) */}
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
//                       className="col-span-2 px-6 py-2.5 text-sm rounded-xl opacity-100 cursor-not-allowed"
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

/* 🔹 Import project images */
import reminexImg from '../assets/reminex.png';
// import chatImg from '../assets/projects/chat.png';
// import pythonImg from '../assets/projects/python.png';

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
        {
          label: 'Frontend',
          url: 'https://github.com/Dasinthanofficial/ReminEx_final_frontend.git',
        },
        {
          label: 'Backend',
          url: 'https://github.com/Dasinthanofficial/ReminEx_final_backend.git',
        },
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

  const visibleProjects =
    typeof limit === 'number' ? projects.slice(0, limit) : projects;

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

      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
        {visibleProjects.map((proj, i) => {
          const githubLinks = getGithubLinks(proj);
          const frontend = githubLinks.find(
            (l) => l.label?.toLowerCase() === 'frontend'
          );
          const backend = githubLinks.find(
            (l) => l.label?.toLowerCase() === 'backend'
          );
          const singleRepo = !frontend && !backend ? githubLinks[0] : null;

          return (
            <GlassCard
              key={`${proj.title}-${i}`}
              hoverEffect
              className="p-0 group"
            >
              {/* 🔹 Image Thumbnail */}
              <div className="h-[200px] overflow-hidden relative border-b border-accent/20">
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2d0b55] to-bg0">
                    <span className="text-white/70 font-bold tracking-[4px] text-sm">
                      PREVIEW
                    </span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* 🔹 Card Content */}
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

                <h3 className="text-[22px] mb-2.5 text-white font-bold font-heading">
                  {proj.title}
                </h3>

                <p className="text-text-muted text-[15px] leading-relaxed mb-6">
                  {proj.desc}
                </p>

                {/* 🔹 Action Buttons */}
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
