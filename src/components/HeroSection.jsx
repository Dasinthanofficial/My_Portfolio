import React from 'react';
import { Button, SocialRow } from './Buttons';
import TechSphere3D from './TechSphere3D';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-between 
                 px-6 py-28 lg:px-20 lg:py-32 min-h-[85vh] relative gap-16 overflow-hidden
                 text-center lg:text-left"
    >
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] 
                   bg-[radial-gradient(circle,rgba(164,58,217,0.08)_0%,transparent_70%)] 
                   blur-[100px] z-0 pointer-events-none"
      />

      <div className="max-w-[650px] z-10 flex flex-col items-center lg:items-start flex-[1.2]">
        <div
          className="text-accent font-bold text-sm mb-6 flex items-center gap-4 
                     tracking-[4px] uppercase opacity-0 animate-[fadeInLeft_1s_ease_forwards]"
        >
          <span className="w-10 h-px bg-accent inline-block" />
          MERN Stack Developer
        </div>

        <h2
          className="text-[clamp(24px,3vw,32px)] font-medium text-white/70 mb-2 leading-tight 
                     opacity-0 animate-[fadeInLeft_1s_ease_0.2s_forwards]"
        >
          Hello, I'm
        </h2>

        <h1
          className="text-[clamp(45px,9vw,95px)] font-black mb-7 leading-none tracking-tight lg:tracking-[-2px] pb-2.5
                     bg-gradient-text bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(164,58,217,0.3)]
                     opacity-0 animate-[fadeInLeft_1s_ease_0.4s_forwards]"
        >
          Dasinthan
        </h1>

        <p
          className="text-text-muted text-[clamp(16px,1.5vw,19px)] leading-relaxed mb-10 max-w-[550px]
                     opacity-0 animate-[fadeInLeft_1s_ease_0.6s_forwards]"
        >
          I am a passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I
          build scalable, modern web applications and am actively seeking an{' '}
          <span className="text-white font-semibold">Internship</span> to apply my skills and contribute to real-world
          projects.
        </p>

        <div
          className="flex gap-5 mb-10 flex-wrap justify-center lg:justify-start
                     opacity-0 animate-[fadeInLeft_1s_ease_0.8s_forwards]"
        >
          <Button variant="primary" onClick={() => document.getElementById('my-projects')?.scrollIntoView({ behavior: 'smooth' })}>
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

      <div
        className="flex-1 flex justify-center items-center z-10 min-w-full lg:min-w-[400px] 
                   order-first lg:order-last mb-[-50px] lg:mb-0
                   opacity-0 animate-[fadeInRight_1.5s_ease_0.5s_forwards]"
      >
        <TechSphere3D />
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