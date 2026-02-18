import React from 'react';
import { Layers, Terminal, Database, ShieldCheck, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layers size={20} />,
      skills: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3'],
    },
    {
      title: 'Back-end & Learning',
      icon: <Database size={20} />,
      skills: ['Node.js', 'Python', 'Machine Learning'],
    },
    {
      title: 'Tools & Workflow',
      icon: <Terminal size={20} />,
      skills: ['Git/GitHub', 'Vite', 'Postman'],
    },
    {
      title: 'Professional',
      icon: <ShieldCheck size={20} />,
      skills: ['Agile Methodology', 'Problem Solving', 'Team Collaboration', 'Effective Communication'],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-alt/30">
      <div className="container-custom">
        <div className="flex flex-col mb-20 animate-fade-in">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-subtle mb-6 flex items-center gap-2">
            <Cpu size={14} />
            My Toolkit
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-main border border-border hover:invert transition-standard group"
            >
              <div className="h-12 w-12 rounded-full bg-alt flex items-center justify-center mb-6 group-hover:bg-content">
                <div className="group-hover:text-main">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-subtle text-sm font-medium">
                    <div className="h-1 w-1 rounded-full bg-content opacity-40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
