import React from 'react';
import { techStack } from '../data';
import { GraduationCap, Star, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white text-center mb-16">
        About <span className="text-blue-500">Me</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
          <p>
            I'm <strong className="text-slate-900 dark:text-white">Rishabh Gupta</strong>, a second-year B.Tech Computer Science student with a specialization in <strong className="text-slate-900 dark:text-white">Data Science</strong>.
          </p>
          <p>
            I enjoy working with data to uncover patterns, build meaningful visualizations, and create machine learning solutions that solve real-world problems.
          </p>
          <p>
            I am a quick learner with strong analytical thinking and problem-solving skills, always eager to explore new technologies.
          </p>
          <p>
            I'm passionate about turning raw data into actionable insights using Python, Pandas, SQL, and Machine Learning.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-purple-400" size={24} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>
            <h4 className="text-blue-400 font-medium mb-2">B.Tech in Computer Science (Data Science)</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Second Year Student</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">• Key Subjects: Data Structures, DBMS, and Machine Learning</p>
          </div>
          
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Star className="text-yellow-400" size={24} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Interests</h3>
            </div>
            <ul className="text-blue-400 text-sm space-y-2">
              <li>• Data Analysis</li>
              <li>• Machine Learning</li>
              <li>• Data Visualization</li>
              <li>• Problem Solving</li>
            </ul>
          </div>
          
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-pink-400" size={24} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Goal</h3>
            </div>
            <ul className="text-blue-400 text-sm space-y-2">
              <li>• Build real-world ML solutions</li>
              <li>• Become industry-ready Data Scientist</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-6">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, idx) => (
            <span key={idx} className="px-5 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="card text-center p-10 bg-white dark:bg-slate-800/30 border-slate-200 dark:border-slate-700 relative">
        <span className="text-4xl text-blue-500 absolute top-6 left-6 font-serif opacity-50">"</span>
        <p className="text-xl italic text-slate-600 dark:text-slate-300">
          "Turning raw data into actionable insights drives my passion for data science."
        </p>
        <span className="text-4xl text-blue-500 absolute bottom-0 right-6 font-serif opacity-50">"</span>
      </div>
    </section>
  );
};

export default About;
