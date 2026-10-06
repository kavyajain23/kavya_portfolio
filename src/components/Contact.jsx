import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare,
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null); // 'submitted' | null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out your name, email, and message.');
      return;
    }
    
    // Demonstrate form submission
    setFormStatus('submitted');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-navy-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs font-mono font-medium uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for internships, mentorship, collaborative student projects, and tech conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Invitation */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Invitation Box as requested */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-electric-blue/20 space-y-4">
              <div className="flex items-center gap-2 text-electric-blue">
                <Sparkles className="w-5 h-5 text-electric-blue" />
                <h3 className="font-bold text-white text-lg">Let's Build Together</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                As a passionate B.Tech student at JECRC University, I am keen to connect with developers, professors, seniors, and industry teams for:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span>
                  <span>Early-stage internships & apprentice developer roles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-purple"></span>
                  <span>Collaborative hackathons & student tech projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Frontend & AI literacy knowledge sharing</span>
                </li>
              </ul>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              
              {/* Email with 1-Click Copy */}
              <div className="glass-card rounded-xl p-4 flex items-center justify-between border border-white/10 hover:border-electric-blue/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center text-electric-blue">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Email Address</span>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-electric-blue transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-electric-blue shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400 font-mono hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-[11px] font-mono hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 flex items-center justify-between border border-white/10 hover:border-accent-purple/40 transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">LinkedIn Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-accent-purple transition-colors">
                      Kavya Jain
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-accent-purple transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 flex items-center justify-between border border-white/10 hover:border-electric-blue/40 transition-colors group"
                aria-label="GitHub Profile"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">GitHub Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-electric-blue transition-colors">
                      @kavyajain23
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-electric-blue transition-colors" />
              </a>

              {/* Location Badge */}
              <div className="glass-card rounded-xl p-4 flex items-center gap-3 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-navy-900 border border-white/10 flex items-center justify-center text-slate-300">
                  <MapPin className="w-5 h-5 text-electric-cyan" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Campus & City</span>
                  <span className="text-sm font-semibold text-white">
                    Jaipur, Rajasthan, India
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form Interface */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-electric-blue" />
                  <span>Send a Message</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Have an inquiry or project idea? Drop a note below.
                </p>
              </div>

              {/* Notice Regarding Demonstration Form as requested */}
              <div className="mb-6 p-3.5 rounded-xl bg-navy-900/90 border border-electric-blue/20 flex items-start gap-3 text-xs text-slate-300">
                <AlertCircle className="w-4 h-4 text-electric-blue shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Interactive Demonstration Interface:</span>
                  <p className="text-slate-400 mt-0.5">
                    This form simulates messaging client-side. For urgent queries, write directly to <a href={`mailto:${personalInfo.email}`} className="text-electric-blue underline underline-offset-2">{personalInfo.email}</a>.
                  </p>
                </div>
              </div>

              {formStatus === 'submitted' ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center text-emerald-400">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Message Received (Demo Mode)
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>! Your demo message has been logged. You can also send a direct mail via your default email client:
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Kavya,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-blue to-accent-purple text-navy-950 font-bold text-xs shadow-md"
                    >
                      Open Email App with this Message
                    </a>
                    <button
                      onClick={() => {
                        setFormStatus(null);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="contact-name" className="text-xs font-mono font-medium text-slate-300 block">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="contact-email" className="text-xs font-mono font-medium text-slate-300 block">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-subject" className="text-xs font-mono font-medium text-slate-300 block">
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Student Project Collaboration or Internship Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-message" className="text-xs font-mono font-medium text-slate-300 block">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your note, idea, or questions here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-electric-blue via-electric-cyan to-accent-purple hover:opacity-95 text-navy-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-electric-blue/20 transition-all focus-visible:ring-2 focus-visible:ring-electric-blue"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
