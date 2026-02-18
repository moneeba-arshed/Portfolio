import React from 'react';
import { ExternalLink, Github, Monitor, ShoppingCart, Layout, FolderOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cira Dashboard System',
      description: 'A comprehensive medical monitoring dashboard system for internal use, featuring real-time data visualization and patient management.',
      impact: 'Improved data retrieval speed by 40% and streamlined clinician workflow.',
      tech: ['React', 'Tailwind CSS', 'Redux', 'Vite'],
      icon: <Monitor size={24} />,
      live: '#',
      github: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A modern, high-performance e-commerce solution with a focus on seamless user experience and secure checkout flows.',
      impact: 'Enabled 15% faster page loads through component optimization.',
      tech: ['React', 'Node.js', 'MongoDB', 'Postman'],
      icon: <ShoppingCart size={24} />,
      live: '#',
      github: '#',
    },
    {
      title: 'Admin Panel',
      description: 'A versatile and scalable admin interface for managing multi-tenant applications and user permissions.',
      impact: 'Reduced administrative task time by 25% through intuitive UI/UX design.',
      tech: ['React', 'Tailwind', 'Git/GitHub', 'Agile'],
      icon: <Layout size={24} />,
      live: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-main">
      <div className="container-custom">
        <div className="flex flex-col mb-20 animate-fade-in">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-subtle mb-6 flex items-center gap-2">
            <FolderOpen size={14} />
            My Portfolio
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-full p-10 rounded-3xl bg-alt/40 border border-border transition-standard hover:border-content/30"
            >
              <div className="h-14 w-14 rounded-2xl bg-content/5 flex items-center justify-center mb-8 border border-border">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-subtle mb-6 line-clamp-2 md:line-clamp-none">{project.description}</p>

              <div className="mt-auto">
                <div className="p-4 rounded-xl bg-main/50 border border-border mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-subtle mb-2">Key Impact</p>
                  <p className="text-sm font-medium leading-relaxed italic">"{project.impact}"</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-content/5 border border-border text-[10px] font-bold uppercase tracking-wider text-subtle">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="flex-1 btn-primary py-3 text-sm flex items-center justify-center gap-2"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full border border-border hover:bg-alt transition-standard flex items-center justify-center"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
