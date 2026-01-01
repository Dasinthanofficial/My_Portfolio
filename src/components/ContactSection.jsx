import React, { useState } from 'react';
import { GlassCard, SectionTitle } from './SectionComponents';
import { Button, SocialRow } from './Buttons';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

export const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate sending email (Replace this with actual logic later)
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormData({ name: '', email: '', message: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => setIsSent(false), 5000);
        }, 1500);
    };

    return (
        <section className="px-5 pb-20 pt-0 md:px-20 md:pb-24 relative z-10" id="contact">
            <SectionTitle title="Get In Touch" subtitle="Contact Me" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
                
                {/* LEFT SIDE: Contact Info */}
                <div className="flex flex-col gap-8 lg:mt-5">
                    <div>
                        <h3 className="text-4xl font-bold text-white mb-4 font-heading leading-tight">
                            Let's build something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#d6bcfa]">
                                amazing together.
                            </span>
                        </h3>
                        <p className="text-text-muted text-lg leading-relaxed max-w-md">
                            I'm actively looking for internship opportunities. 
                            Whether you have a project in mind or just want to connect, feel free to drop me a message!
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Email Item */}
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-neon">
                                <FaEnvelope />
                            </div>
                            <div>
                                <span className="block text-sm text-text-muted font-medium uppercase tracking-wider">Email Me</span>
                                <a href="mailto:your.email@example.com" className="text-xl text-white font-semibold hover:text-accent transition-colors">
                                    your.email@example.com
                                </a>
                            </div>
                        </div>

                        {/* Location Item */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 text-xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <span className="block text-sm text-text-muted font-medium uppercase tracking-wider">Location</span>
                                <span className="text-xl text-white font-semibold">India</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <span className="block text-sm text-text-muted font-medium uppercase tracking-wider mb-4">Connect Socially</span>
                        <SocialRow />
                    </div>
                </div>

                {/* RIGHT SIDE: Interactive Form */}
                <GlassCard className="relative overflow-hidden border-t border-l border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    
                    {/* Success Overlay */}
                    {isSent && (
                        <div className="absolute inset-0 z-20 bg-bg0/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-[fadeIn_0.5s_ease-out]">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-4xl mb-4 shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                                <FaCheckCircle />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                            <p className="text-text-muted">Thanks for reaching out. I'll get back to you shortly.</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                        
                        {/* Name Input */}
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

                        {/* Email Input */}
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

                        {/* Message Input */}
                        <div className="group">
                            <label className="block text-sm font-bold text-text-muted uppercase tracking-wider mb-2 group-focus-within:text-accent transition-colors">
                                Message
                            </label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full bg-bg0/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:border-accent focus:bg-white/5 focus:outline-none focus:shadow-[0_0_15px_rgba(164,58,217,0.1)] transition-all duration-300 resize-none"
                                placeholder="Hi, I'd like to discuss a project..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <Button 
                                type="submit" 
                                variant="primary" 
                                className={`w-full group ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
                </GlassCard>
            </div>
            
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </section>
    );
};