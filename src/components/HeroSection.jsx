import React from 'react';
import { Button, SocialRow } from './Buttons';
import TechSphere3D from './TechSphere3D';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        px-4 pt-24 pb-10
        sm:px-6 sm:pt-28 sm:pb-14
        lg:px-20 lg:pt-40 lg:pb-24
        text-center lg:text-left
      "
    >
      <div
        className="
          absolute top-[10%] left-1/2 -translate-x-1/2
          w-[420px] h-[420px]
          sm:w-[650px] sm:h-[650px]
          lg:w-[1000px] lg:h-[1000px]
          bg-[radial-gradient(circle,rgba(164,58,217,0.08)_0%,transparent_70%)]
          blur-[90px] z-0 pointer-events-none
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="flex flex-col items-center lg:items-start">
          <div className="text-accent font-bold text-xs sm:text-sm mb-4 flex items-center gap-3 tracking-[3px] uppercase">
            <span className="w-8 h-px bg-accent inline-block" />
            MERN Stack Developer
          </div>

          <h2 className="text-[15px] sm:text-[18px] font-medium text-white/70 mb-1">
            Hello, I&apos;m
          </h2>

          <h1
            className="
              font-black leading-none tracking-tight
              text-[44px] sm:text-[62px] md:text-[78px] lg:text-[90px]
              mb-4
              bg-gradient-text bg-clip-text text-transparent
              drop-shadow-[0_0_25px_rgba(164,58,217,0.25)]
            "
          >
            Dasinthan
          </h1>

          <p className="text-text-muted text-[14px] sm:text-[16px] leading-relaxed max-w-[52ch] mb-6">
            I am a passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I
            build scalable, modern web applications and am actively seeking an{' '}
            <span className="text-white font-semibold">Internship</span> to apply my skills and contribute to real-world
            projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-6">
            <Button
              variant="primary"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('my-projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>

            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              Download CV
            </Button>
          </div>

          <div className="w-full flex justify-center lg:justify-start">
            <SocialRow />
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <TechSphere3D />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;