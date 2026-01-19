import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassCard, SectionTitle } from './SectionComponents';
import { Button } from './Buttons';
import { FaCertificate, FaExternalLinkAlt, FaFreeCodeCamp } from 'react-icons/fa';
import { SiGooglesheets } from 'react-icons/si';

const CertificationsSection = ({
  limit,
  showViewMore = false,
  title = 'Certifications',
  subtitle = 'Credentials & Badges',

  // ✅ new props to control spacing per page
  sectionClassName = 'px-6 py-20 md:px-20 md:py-28',
  titleClassName = '',
}) => {
  const navigate = useNavigate();

  const certifications = [
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'Issued 2025',
      link: 'https://www.freecodecamp.org/certification/fcc73a48fc0-d0e1-43ec-bf72-e3dea70380ba/responsive-web-design',
      icon: <FaFreeCodeCamp />,
      color: 'text-white',
    },
    // {
    //   title: 'Google Sheets',
    //   issuer: 'Alison',
    //   date: 'Issued 2025',
    //   link: 'https://alison.com/',
    //   icon: <SiGooglesheets />,
    //   color: 'text-[#34A853]',
    // },
  ];

  const visibleCerts = typeof limit === 'number' ? certifications.slice(0, limit) : certifications;

  return (
    <section className={sectionClassName} id="certifications">
      <SectionTitle title={title} subtitle={subtitle} className={titleClassName} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {visibleCerts.map((cert, index) => (
          <GlassCard
            key={index}
            hoverEffect
            className="group flex flex-col items-start p-8 h-full min-h-[280px]"
          >
            <div
              className={`
                w-16 h-16 mb-6 rounded-2xl bg-white/5 border border-white/10
                flex items-center justify-center text-3xl shrink-0 shadow-neon
                group-hover:scale-110 transition-transform duration-300
                ${cert.color}
              `}
            >
              {cert.icon || <FaCertificate />}
            </div>

            <div className="flex-1 w-full">
              <h3 className="text-2xl font-bold text-white leading-tight mb-2 group-hover:text-accent transition-colors duration-300">
                {cert.title}
              </h3>
              <div className="text-base font-medium text-text-muted/80 mb-8">
                {cert.issuer} • <span className="text-white/40">{cert.date}</span>
              </div>
            </div>

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

      {showViewMore && (
        <div className="mt-10 flex justify-center">
          <Button variant="secondary" onClick={() => navigate('/certifications')}>
            View More Certifications
          </Button>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;