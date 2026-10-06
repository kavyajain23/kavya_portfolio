import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Code2, 
  Cpu, 
  MapPin, 
  GraduationCap, 
  FolderGit2, 
  Copy, 
  Check, 
  Play
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('code');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const pythonCode = `# Student Engineering Profile
student = {
    "name": "Kavya Jain",
    "degree": "B.Tech in CSE Core",
    "university": "JECRC University",
    "duration": "2026 - 2030",
    "location": "Jaipur, India",
    "passions": ["AI & Machine Intelligence", "Modern Frontend", "Productivity"],
    "currently_learning": [
        "AUTOCAD",
        "DIGITAL DATA & AI LITERACY",
        "COMMUNICATION SKILLS"
    ]
}

def mission():
    return "Turning ideas into useful digital experiences."

print(mission())`;

  const promptExample = `// Generative AI Exploration Note
PROMPT > Explain how modern frontend frameworks bridge student ideas with user-friendly web interfaces.

RESPONSE:
"Frontend tools like React and Tailwind CSS empower engineering students to rapidly translate problem-solving algorithms into intuitive, accessible digital experiences."`;

  const copyCode = () => {
    navigator.clipboard.writeText(pythonCode);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-radial-glow">
      {/* Background Decorative Grid and Glow Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      
      {/* Glowing Orb Accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-electric-blue/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-accent-purple/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Information & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-electric-blue/30 text-xs font-mono text-slate-300 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-electric-blue font-semibold">1st Year Undergrad</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">JECRC University '30</span>
            </div>

            {/* Prominent Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <br />
                <span className="text-gradient">Kavya Jain</span>
              </h1>
              
              {/* Requested Headline */}
              <p className="text-xl sm:text-2xl font-semibold text-slate-200 flex items-center gap-2">
                <span className="text-slate-100">{personalInfo.headline}</span>
              </p>
            </div>

            {/* Requested Short Intro */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              "{personalInfo.introSnippet}"
            </p>

            {/* Quick Context Metadata Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <GraduationCap className="w-3.5 h-3.5 text-electric-blue" />
                <span>B.Tech CSE Core</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-accent-purple" />
                <span>Jaipur, India</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-electric-cyan" />
                <span>Expected Grad: 2030</span>
              </span>
            </div>

            {/* Action Buttons as requested: "Explore Projects" & "Get in Touch" */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-electric-blue to-accent-purple hover:from-electric-cyan hover:to-accent-violet text-navy-950 font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-electric-blue/20 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-electric-blue"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 rounded-xl glass-card hover:bg-white/10 border border-slate-700 hover:border-electric-blue/50 text-white font-semibold text-sm sm:text-base flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-electric-blue"
              >
                <span>Get in Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: Subtle AI & Technology Interactive Visual Element */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Decorative Ambient Frame */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Back Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue/30 via-accent-purple/30 to-electric-cyan/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              {/* Terminal / Code Card */}
              <div className="relative rounded-2xl bg-navy-900/90 border border-electric-blue/25 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-navy-950/80 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-electric-blue" />
                      kavya_workspace.py
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={copyCode}
                      className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                      title="Copy code"
                      aria-label="Copy code snippet"
                    >
                      {copiedSnippet ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px] text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Sub-Tabs: Interactive Exploration */}
                <div className="flex items-center border-b border-white/5 bg-navy-950/40 px-3 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`py-2 px-3 border-b-2 font-medium transition-colors flex items-center gap-1.5 ${
                      activeTab === 'code'
                        ? 'border-electric-blue text-electric-blue'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Python Init</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`py-2 px-3 border-b-2 font-medium transition-colors flex items-center gap-1.5 ${
                      activeTab === 'ai'
                        ? 'border-accent-purple text-accent-purple'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>AI Literacy Note</span>
                  </button>
                </div>

                {/* Terminal Body */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[290px] bg-navy-950/60">
                  {activeTab === 'code' ? (
                    <div className="space-y-1 text-slate-300">
                      <div className="text-slate-500 italic"># Kavya Jain - Engineering Workspace</div>
                      <div><span className="text-accent-purple">const</span> <span className="text-electric-blue">student</span> = &#123;</div>
                      <div className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"Kavya Jain"</span>,</div>
                      <div className="pl-4"><span className="text-slate-400">degree:</span> <span className="text-emerald-300">"B.Tech CSE Core"</span>,</div>
                      <div className="pl-4"><span className="text-slate-400">college:</span> <span className="text-emerald-300">"JECRC University"</span>,</div>
                      <div className="pl-4"><span className="text-slate-400">batch:</span> <span className="text-amber-300">"2026 – 2030"</span>,</div>
                      <div className="pl-4"><span className="text-slate-400">focus:</span> [<span className="text-sky-300">"AI"</span>, <span className="text-sky-300">"Frontend"</span>, <span className="text-sky-300">"Productivity"</span>],</div>
                      <div className="pl-4"><span className="text-slate-400">learning:</span> [<span className="text-pink-300">"AutoCAD"</span>, <span className="text-pink-300">"AI Literacy"</span>, <span className="text-pink-300">"Communication"</span>]</div>
                      <div>&#125;;</div>
                      <div className="pt-2">
                        <span className="text-electric-blue">console</span>.<span className="text-yellow-300">log</span>(
                        <span className="text-emerald-300">"Building digital experiences 🚀"</span>
                        );
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 text-slate-300">
                      <div className="p-2.5 rounded bg-navy-900/80 border border-electric-blue/20">
                        <span className="text-accent-purple font-semibold text-[11px] block uppercase tracking-wider mb-1">
                          Current Focus: AI Literacy
                        </span>
                        <p className="text-xs text-slate-300">
                          "Exploring how prompt engineering, vector representations, and machine intelligence assist in fast software prototyping."
                        </p>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">Digital Data Literacy</span>
                          <span className="text-emerald-400 font-semibold">Active Study</span>
                        </div>
                        <div className="w-full bg-navy-800 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-electric-blue to-accent-purple h-full w-3/4 rounded-full"></div>
                        </div>
                      </div>

                      <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
                        <Play className="w-3 h-3 text-electric-blue" />
                        <span>Interactive terminal ready for project testing</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Status Bar */}
                <div className="px-4 py-2 bg-navy-950/90 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>UTF-8</span>
                    <span>•</span>
                    <span>React 18</span>
                  </div>
                  <span className="text-electric-blue">Jaipur, IN</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
