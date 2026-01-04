// import React, { useState } from 'react';
// import { GlassCard, SectionTitle } from './SectionComponents';
// import { Button, SocialRow } from './Buttons';
// import { FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

// const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdakykze'; 
// const ContactSection = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSent, setIsSent] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setIsSubmitting(true);

//     try {
//       const res = await fetch(FORMSPREE_ENDPOINT, {
//         method: 'POST',
//         headers: { Accept: 'application/json' },
//         body: new FormData(e.currentTarget),
//       });

//       if (!res.ok) {
//         setError('Failed to send message. Please try again or email me directly.');
//         setIsSubmitting(false);
//         return;
//       }

//       setIsSent(true);
//       setFormData({ name: '', email: '', message: '' });

//       // Hide success screen after 5s
//       setTimeout(() => setIsSent(false), 5000);
//     } catch (err) {
//       setError('Network error. Please try again or email me directly.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="px-5 pb-20 pt-0 md:px-20 md:pb-24 relative z-10" id="contact">
//       <SectionTitle title="Get In Touch" subtitle="Contact Me" />

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
//         <div className="flex flex-col gap-8 lg:mt-5">
//           <div>
//             <h3 className="text-4xl font-bold text-white mb-4 font-heading leading-tight">
//               Let's build something <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#d6bcfa]">
//                 amazing together.
//               </span>
//             </h3>
//             <p className="text-text-muted text-lg leading-relaxed max-w-md">
//               I'm actively looking for internship opportunities. Whether you have a project in mind or just want to
//               connect, feel free to drop me a message!
//             </p>
//           </div>

//           <div className="flex flex-col gap-6">
//             <div className="flex items-center gap-4 group cursor-pointer">
//               <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-neon">
//                 <FaEnvelope />
//               </div>
//               <div>
//                 <span className="block text-sm text-text-muted font-medium uppercase tracking-wider">Email Me</span>
//                 <a
//                   href="mailto:dasinthanpathmanathan984@gmail.com"
//                   className="text-xl text-white font-semibold hover:text-accent transition-colors"
//                 >
//                   dasinthanpathmanathan984@gmail.com
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 text-xl">
//                 <FaMapMarkerAlt />
//               </div>
//               <div>
//                 <span className="block text-sm text-text-muted font-medium uppercase tracking-wider">Location</span>
//                 <span className="text-xl text-white font-semibold">Sri Lanka</span>
//               </div>
//             </div>
//           </div>

//           <div className="mt-4">
//             <span className="block text-sm text-text-muted font-medium uppercase tracking-wider mb-4">
//               Connect Socially
//             </span>
//             <SocialRow />
//           </div>
//         </div>

//         <GlassCard className="relative overflow-hidden border-t border-l border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
//           {isSent && (
//             <div className="absolute inset-0 z-20 bg-bg0/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-[fadeIn_0.5s_ease-out]">
//               <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-4xl mb-4 shadow-[0_0_20px_rgba(74,222,128,0.3)]">
//                 <FaCheckCircle />
//               </div>
//               <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
//               <p className="text-text-muted">Thanks for reaching out. I'll get back to you shortly.</p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
//             {/* Formspree uses these field names fine */}
//             <input type="hidden" name="_subject" value="New message from portfolio contact form" />

//             {error && (
//               <div className="text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm">
//                 {error}
//               </div>
//             )}

//             <div className="group">
//               <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2 group-focus-within:text-accent transition-colors">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-bg0/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:border-accent focus:bg-white/5 focus:outline-none focus:shadow-[0_0_15px_rgba(164,58,217,0.1)] transition-all duration-300"
//                 placeholder="John Doe"
//               />
//             </div>

//             <div className="group">
//               <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2 group-focus-within:text-accent transition-colors">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-bg0/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:border-accent focus:bg-white/5 focus:outline-none focus:shadow-[0_0_15px_rgba(164,58,217,0.1)] transition-all duration-300"
//                 placeholder="john@example.com"
//               />
//             </div>

//             <div className="group">
//               <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2 group-focus-within:text-accent transition-colors">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={4}
//                 className="w-full bg-bg0/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:border-accent focus:bg-white/5 focus:outline-none focus:shadow-[0_0_15px_rgba(164,58,217,0.1)] transition-all duration-300 resize-none"
//                 placeholder="Hi, I'd like to discuss a project..."
//               />
//             </div>

//             <div className="pt-2">
//               <Button
//                 type="submit"
//                 variant="primary"
//                 className={`w-full group ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <span className="flex items-center gap-2">
//                     <svg
//                       className="animate-spin h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       />
//                     </svg>
//                     Sending...
//                   </span>
//                 ) : (
//                   <>
//                     Send Message
//                     <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                   </>
//                 )}
//               </Button>
//             </div>
//           </form>

//           <style>{`
//             @keyframes fadeIn {
//               from { opacity: 0; transform: scale(0.95); }
//               to { opacity: 1; transform: scale(1); }
//             }
//           `}</style>
//         </GlassCard>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
// export { ContactSection };

import React, { useEffect, useMemo, useState } from 'react';
import { GlassCard, SectionTitle } from './SectionComponents';
import { Button, SocialRow } from './Buttons';
import { FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdakykze';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // ✅ Correct redirect format: query BEFORE hash
  const redirectUrl = useMemo(() => {
    if (typeof window === 'undefined') return '';
    return `${window.location.origin}${window.location.pathname}?sent=1#contact`;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sent = new URLSearchParams(window.location.search).get('sent') === '1';
    if (!sent) return;

    setIsSent(true);
    setFormData({ name: '', email: '', message: '' });

    // clean URL (keep #contact)
    window.history.replaceState({}, '', `${window.location.pathname}#contact`);

    const t = window.setTimeout(() => setIsSent(false), 5000);
    return () => window.clearTimeout(t);
  }, []);

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    // native submit will navigate away; this just updates UI instantly
    setIsSubmitting(true);
  };

  return (
    <section className="px-5 pb-20 pt-0 md:px-20 md:pb-24 relative z-10" id="contact">
      <SectionTitle title="Get In Touch" subtitle="Contact Me" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
        <div className="flex flex-col gap-8 lg:mt-5">
          <div>
            <h3 className="text-4xl font-bold text-white mb-4 font-heading leading-tight">
              Let&apos;s build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#d6bcfa]">
                amazing together.
              </span>
            </h3>
            <p className="text-text-muted text-lg leading-relaxed max-w-md">
              I&apos;m actively looking for internship opportunities. Whether you have a project in mind or just want to
              connect, feel free to drop me a message!
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-neon">
                <FaEnvelope />
              </div>
              <div>
                <span className="block text-sm text-text-muted font-medium uppercase tracking-wider">Email Me</span>
                <a
                  href="mailto:dasinthanpathmanathan984@gmail.com"
                  className="text-xl text-white font-semibold hover:text-accent transition-colors"
                >
                  dasinthanpathmanathan984@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span className="block text-sm text-text-muted font-medium uppercase tracking-wider">Location</span>
                <span className="text-xl text-white font-semibold">Sri Lanka</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <span className="block text-sm text-text-muted font-medium uppercase tracking-wider mb-4">
              Connect Socially
            </span>
            <SocialRow />
          </div>
        </div>

        <GlassCard className="relative overflow-hidden border-t border-l border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          {isSent && (
            <div className="absolute inset-0 z-20 bg-bg0/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-[fadeIn_0.5s_ease-out]">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-4xl mb-4 shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                <FaCheckCircle />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
              <p className="text-text-muted">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
            </div>
          )}

          <form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 relative z-10"
          >
            <input type="hidden" name="_subject" value="New message from portfolio contact form" />
            <input type="hidden" name="_redirect" value={redirectUrl} />

            <div className="group">
              <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2 group-focus-within:text-accent transition-colors">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-bg0/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:border-accent focus:bg-white/5 focus:outline-none focus:shadow-[0_0_15px_rgba(164,58,217,0.1)] transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2 group-focus-within:text-accent transition-colors">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-bg0/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:border-accent focus:bg-white/5 focus:outline-none focus:shadow-[0_0_15px_rgba(164,58,217,0.1)] transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2 group-focus-within:text-accent transition-colors">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-bg0/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:border-accent focus:bg-white/5 focus:outline-none focus:shadow-[0_0_15px_rgba(164,58,217,0.1)] transition-all duration-300 resize-none"
                placeholder="Hi, I'd like to discuss a project..."
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                className={`w-full group ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </Button>
            </div>
          </form>

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </GlassCard>
      </div>
    </section>
  );
};

export default ContactSection;
export { ContactSection };