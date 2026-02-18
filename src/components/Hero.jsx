import React from 'react';
import { Github, Linkedin, Mail, FileText, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 bg-main">
      <div className="container-custom">
        <div className="max-w-4xl animate-fade-in px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-alt border border-border text-xs font-bold uppercase tracking-widest mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-content opacity-20"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-content"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="heading-xl mb-10">
            Moneeba Arshed<span className="opacity-20">.</span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-medium text-subtle mb-10 leading-[1.15]">
            Frontend Developer building scalable, <br className="hidden md:block" />
            modern React applications.
          </h2>

          <p className="text-xl text-subtle max-w-2xl mb-12 leading-relaxed">
            Specializing in high-performance UIs, modern design systems, and seamless user experiences. Based in Islamabad, PK.
          </p>

          <div className="flex flex-wrap gap-6 mb-16">
            <a href="#projects" className="btn-primary group py-5">
              View Work
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary py-5">
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex gap-6">
              {[
                { icon: <Github size={22} />, href: '#' },
                { icon: <Linkedin size={22} />, href: '#' },
                { icon: <Mail size={22} />, href: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="text-subtle hover:text-content transition-standard"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="h-px w-12 bg-border"></div>
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-subtle hover:text-content transition-standard"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
