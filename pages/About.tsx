import React from 'react';
import { EXPERIENCE, SKILLS, PROFILE } from '../constants';
import { Download, Calendar, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16">
        <div>
          <h1 className="text-4xl font-serif text-white mb-2">{PROFILE.name}</h1>
          <p className="text-xl text-indigo-400 mb-4">{PROFILE.title}</p>
          <div className="flex gap-4 text-slate-400 text-sm">
            <span className="flex items-center gap-1"><MapPin size={14} /> {PROFILE.location}</span>
          </div>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-200 transition-colors">
          <Download size={18} /> Download Resume
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-12">
        
        {/* Left Column: Timeline */}
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-serif text-white mb-8 border-b border-white/5 pb-2">Experience</h2>
            <div className="space-y-12">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-950"></div>
                  <h3 className="text-xl font-medium text-white">{exp.role}</h3>
                  <div className="flex justify-between items-center text-sm text-slate-500 mb-3 mt-1">
                    <span className="font-medium text-indigo-300">{exp.company}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-400 leading-relaxed text-sm flex gap-2">
                        <span className="text-indigo-500 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
             <h2 className="text-2xl font-serif text-white mb-8 border-b border-white/5 pb-2">Education</h2>
             <div className="relative pl-8 border-l border-white/10">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-slate-950"></div>
                <h3 className="text-xl font-medium text-white">B.Tech & M.Tech (Dual Degree)</h3>
                <div className="flex justify-between items-center text-sm text-slate-500 mb-3 mt-1">
                  <span className="font-medium text-indigo-300">IIT Madras</span>
                  <span>2016 - 2021</span>
                </div>
                <p className="text-slate-400 text-sm">Bachelors in Engineering Design. Masters in Biomedical Design.</p>
             </div>
          </section>
        </div>

        {/* Right Column: Skills */}
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-serif text-white mb-6">Core Competencies</h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-medium rounded border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-white/5 rounded-2xl p-6 border border-white/5">
            <h3 className="text-lg font-medium text-white mb-4">The "Why Me"</h3>
            <p className="text-sm text-slate-400 leading-relaxed italic">
              "I don't just build models; I build businesses. I don't just design screens; I design narratives. My value lies in the overlap of rigorous analytics and empathetic creativity."
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
