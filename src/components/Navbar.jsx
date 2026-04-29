import React from 'react';
import { Moon, Sun, ArrowRight } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md z-50 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-500 dark:text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-500/30">
            RG
          </div>
          <span className="text-slate-900 dark:text-white font-bold tracking-wider">RISHABH GUPTA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#home" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
          
          <a 
            href="/resume2.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 px-6 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 text-slate-700 dark:text-slate-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] active:scale-95 ml-2 font-medium"
          >
            Resume <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-[#1e293b] text-yellow-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700/50"
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
