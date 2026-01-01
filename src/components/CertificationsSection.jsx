import React from 'react';
import { GlassCard, SectionTitle } from './SectionComponents';
import { FaFreeCodeCamp, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import { SiGooglesheets } from 'react-icons/si';

const CertificationsSection = () => {
    const certifications = [
        {
            title: "Responsive Web Design",
            issuer: "freeCodeCamp",
            date: "Issued 2024",
            link: "https://www.freecodecamp.org/", // Add your link here
            icon: <FaFreeCodeCamp />,
            color: "text-white"
        },
        {
            title: "Google Sheets",
            issuer: "Alison",
            date: "Issued 2024",
            link: "https://alison.com/", // Add your link here
            icon: <SiGooglesheets />,
            color: "text-[#34A853]" // Google Sheets Green
        }
    ];

    return (
        <section className="px-6 py-20 md:px-20 md:py-28" id="certifications">
            <SectionTitle title="Certifications" subtitle="Credentials & Badges" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {certifications.map((cert, index) => (
                    <GlassCard 
                        key={index} 
                        hoverEffect 
                        // CHANGED: flex-col for vertical layout, items-start for left alignment
                        className="group flex flex-col items-start p-8 h-full min-h-[280px]"
                    >
                        {/* Icon Box */}
                        <div className={`
                            w-16 h-16 mb-6 rounded-2xl bg-white/5 border border-white/10 
                            flex items-center justify-center text-3xl shrink-0 shadow-neon
                            group-hover:scale-110 transition-transform duration-300
                            ${cert.color}
                        `}>
                            {cert.icon || <FaCertificate />}
                        </div>

                        {/* Content */}
                        <div className="flex-1 w-full">
                            <h3 className="text-2xl font-bold text-white leading-tight mb-2 group-hover:text-accent transition-colors duration-300">
                                {cert.title}
                            </h3>
                            <div className="text-base font-medium text-text-muted/80 mb-8">
                                {cert.issuer} • <span className="text-white/40">{cert.date}</span>
                            </div>
                        </div>

                        {/* Verify Link - Pushed to bottom */}
                        <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-accent hover:text-white transition-colors mt-auto"
                        >
                            Show Credential
                            <FaExternalLinkAlt className="text-[10px] mb-0.5" />
                        </a>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};

export default CertificationsSection;