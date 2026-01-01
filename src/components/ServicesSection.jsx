import React from 'react';
import { GlassCard, SectionTitle } from './SectionComponents';
// Importing professional icons
import { 
    FaLaptopCode, 
    FaServer, 
    FaUserShield, 
    FaPython, 
    FaAws, 
    FaRocket 
} from 'react-icons/fa';

const ServicesSection = () => {
    const services = [
        { 
            title: 'Full Stack Development', 
            desc: 'Building responsive, single-page applications (SPA) from scratch using the MERN stack.', 
            icon: <FaLaptopCode />, 
            tech: ['React.js', 'Redux', 'Tailwind'] 
        },
        { 
            title: 'Backend Architecture', 
            desc: 'Designing scalable RESTful APIs, managing databases, and handling server-side logic.', 
            icon: <FaServer />, 
            tech: ['Node.js', 'Express', 'MongoDB'] 
        },
        { 
            title: 'Security & Auth', 
            desc: 'Implementing secure user authentication and authorization flows with encryption.', 
            icon: <FaUserShield />, 
            tech: ['JWT', 'Bcrypt', 'OAuth'] 
        },
        { 
            title: 'Python Scripting', 
            desc: 'Writing basic scripts for data manipulation, file handling, and process automation.', 
            icon: <FaPython />, 
            tech: ['Python 3', 'Automation', 'Data'] 
        },
        { 
            title: 'Cloud Fundamentals', 
            desc: 'Deploying static sites and managing file storage using Amazon Web Services.', 
            icon: <FaAws />, 
            tech: ['AWS S3', 'EC2 Basics', 'IAM'] 
        },
        { 
            title: 'Deployment & DevOps', 
            desc: 'Proficient in version control (Git) and deploying apps to modern cloud platforms.', 
            icon: <FaRocket />, 
            tech: ['Git/GitHub', 'Vercel', 'Render'] 
        },
    ];

    return (
        <section className="px-5 pb-20 pt-0 md:px-20 md:pb-24" id="services">
            <SectionTitle title="What I Bring" subtitle="My Expertise" />

            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                {services.map((item, index) => (
                    <GlassCard 
                        key={index} 
                        hoverEffect 
                        className="h-full flex flex-col group"
                    >
                        {/* Icon with glow and transition */}
                        <div className="text-5xl mb-6 text-white drop-shadow-[0_0_15px_rgba(164,58,217,0.5)] 
                                      group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl mb-3 text-white font-bold font-heading group-hover:text-accent transition-colors duration-300">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-text-muted text-[15px] leading-relaxed mb-6 flex-1">
                            {item.desc}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2">
                            {item.tech.map((t, i) => (
                                <span 
                                    key={i} 
                                    className="text-xs px-3.5 py-1.5 bg-accent/10 border border-accent/20 
                                             rounded-full text-[#E0AAFF] font-medium transition-all duration-300
                                             group-hover:bg-accent/20 group-hover:border-accent/40"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;