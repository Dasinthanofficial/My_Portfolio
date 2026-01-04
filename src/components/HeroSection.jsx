import React from 'react';
import { Button, SocialRow } from './Buttons';
import TechSphere3D from './TechSphere3D';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-between
                 px-5 py-16 sm:py-20 lg:px-20 lg:py-32 min-h-[85vh]
                 relative gap-10 lg:gap-16 overflow-hidden
                 text-center lg:text-left"
    >
      <div
        className="absolute top-[15%] left-1/2 -translate-x-1/2
                   w-[650px] h-[650px] sm:w-[900px] sm:h-[900px] lg:w-[1000px] lg:h-[1000px]
                   bg-[radial-gradient(circle,rgba(164,58,217,0.08)_0%,transparent_70%)]
                   blur-[100px] z-0 pointer-events-none"
      />

      {/* Sphere first on mobile */}
      <div
        className="flex-1 flex justify-center items-center z-10 w-full
                   order-first lg:order-last"
      >
        <TechSphere3D />
      </div>

      <div className="max-w-[650px] z-10 flex flex-col items-center lg:items-start flex-[1.2]">
        <div
          className="text-accent font-bold text-xs sm:text-sm mb-5 flex items-center gap-3
                     tracking-[2px] sm:tracking-[4px] uppercase
                     opacity-0 animate-[fadeInLeft_1s_ease_forwards]"
        >
          <span className="w-8 sm:w-10 h-px bg-accent inline-block" />
          MERN Stack Developer
        </div>

        <h2
          className="text-[clamp(20px,3vw,32px)] font-medium text-white/70 mb-2 leading-tight
                     opacity-0 animate-[fadeInLeft_1s_ease_0.2s_forwards]"
        >
          Hello, I'm
        </h2>

        <h1
          className="text-[clamp(40px,10vw,95px)] font-black mb-5 sm:mb-7 leading-none tracking-tight lg:tracking-[-2px] pb-2
                     bg-gradient-text bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(164,58,217,0.3)]
                     opacity-0 animate-[fadeInLeft_1s_ease_0.4s_forwards]"
        >
          Dasinthan
        </h1>

        <p
          className="text-text-muted text-[15px] sm:text-[16px] md:text-[19px]
                     leading-relaxed mb-8 sm:mb-10 max-w-[550px]
                     opacity-0 animate-[fadeInLeft_1s_ease_0.6s_forwards]"
        >
          I am a passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I
          build scalable, modern web applications and am actively seeking an{' '}
          <span className="text-white font-semibold">Internship</span> to apply my skills and contribute to real-world
          projects.
        </p>

        <div
          className="flex gap-4 sm:gap-5 mb-8 sm:mb-10 flex-wrap justify-center lg:justify-start
                     opacity-0 animate-[fadeInLeft_1s_ease_0.8s_forwards]"
        >
          <Button
            variant="primary"
            onClick={() =>
              document.getElementById('my-projects')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Work
          </Button>
          <Button variant="secondary" onClick={() => window.open('/cv.pdf', '_blank')}>
            Download CV
          </Button>
        </div>

        <div className="opacity-0 animate-[fadeInLeft_1s_ease_1s_forwards]">
          <SocialRow />
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px) scale(0.9); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;