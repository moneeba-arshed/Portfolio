import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-main border-t border-border">
      <div className="container-custom px-6 text-content">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tighter">
              Moneeba<span className="opacity-40">.</span>
            </a>
            <p className="text-sm text-subtle mt-4 font-medium uppercase tracking-widest">
              Building scalable, modern digital experiences.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="https://github.com" target="_blank" rel="noopener" className="text-subtle hover:text-content transition-standard">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-subtle hover:text-content transition-standard">
              <Linkedin size={20} />
            </a>
            <a href="mailto:monee@example.com" className="text-subtle hover:text-content transition-standard">
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest bg-alt px-6 py-3 rounded-full border border-border hover:invert transition-standard"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
