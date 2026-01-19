import React from 'react';
import { GlassCard, SectionTitle } from './SectionComponents';
import profile from '../assets/profile1.png';

const AboutSection = () => {
  return (
    <section className="px-5 pb-20 pt-0 md:px-20 md:pb-24" id="about">
      <SectionTitle title="About me" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="h-full">
          <div className="flex flex-col sm:flex-row gap-7 items-center sm:items-start">
            <div className="shrink-0 w-[220px] h-[220px] rounded-[20px] bg-gradient-to-br from-accent to-accent/50 p-[3px] shadow-neon">
              <img
                src={profile}
                alt="Profile"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-[18px] block"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-3xl font-bold text-white mb-3.5 leading-tight font-heading">
                Hi, I'm{' '}
                <span className="text-accent drop-shadow-[0_0_10px_rgba(164,58,217,0.4)]">Dasinthan.</span>
                <br />
                Full-Stack Developer
              </h3>

              <p className="text-text-muted leading-relaxed mb-6 text-[15px]">
                I’m a passionate developer with a strong command of the MERN stack, focused on building scalable, full-featured web applications from the ground up.
              </p>

              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/15 rounded-full 
                           text-[#E0AAFF] text-[13px] font-semibold border border-accent/30 
                           shadow-[0_0_15px_rgba(164,58,217,0.2)]"
              >
                <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_var(--accent-primary)] animate-pulse" />
                Open to Internship
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="grid grid-cols-2 gap-6">
          <StatCard number="MERN" label="Stack Specialist" isAccent />
          <StatCard number="Python" label="Basics" />
          <StatCard number="AWS" label="Cloud Basics" isAccent />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label, isAccent = false }) => (
  <GlassCard hoverEffect className="flex flex-col justify-center items-center text-center py-8">
    <h4
      className={`text-[42px] font-bold mb-1 font-heading 
      ${isAccent
          ? 'text-accent drop-shadow-[0_0_15px_rgba(164,58,217,0.5)]'
          : 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]'
        }`}
    >
      {number}
    </h4>
    <span className="text-text-muted text-sm">{label}</span>
  </GlassCard>
);

export default AboutSection;