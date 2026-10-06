import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-electric-blue/30 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
