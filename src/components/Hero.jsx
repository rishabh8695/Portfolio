import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex-col flex items-start flex-1 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
          Hi! I am <br className="hidden md:block" /><span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-slate-400">Rishabh Gupta</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gradient font-semibold mb-6 tracking-wide">
          Aspiring Data Scientist
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl leading-relaxed mb-10 font-light">
          Second-year B.Tech CSE student passionate about data science, turning
          raw data into actionable insights using <strong className="text-slate-700 dark:text-slate-200 font-medium">Python, Pandas, and machine learning.</strong>
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rishabhkumargupta9935@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-blue-500 hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all text-slate-900 dark:text-white font-semibold"
          >
            <Mail size={18} />
            Get In Touch
          </a>
          <a href="https://github.com/rishabh8695" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-700 backdrop-blur-sm transition-all text-slate-700 dark:text-slate-100 font-medium">
            <FaGithub size={18} className="text-slate-900 dark:text-slate-100" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/rishabh-kumar-gupta-56b004326" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-700 backdrop-blur-sm transition-all text-slate-700 dark:text-slate-100 font-medium">
            <FaLinkedin size={18} className="text-blue-500 dark:text-blue-300" /> LinkedIn
          </a>
        </div>
      </div>

      <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] shrink-0 z-10 group">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <img
          src="profile.png"
          alt="Rishabh Gupta"
          className="w-full h-full object-cover rounded-full border border-slate-300 dark:border-white/10 shadow-2xl relative z-10 p-2 bg-slate-50 dark:bg-background/50 backdrop-blur-md"
        />
      </div>
    </section>
  );
};

export default Hero;
