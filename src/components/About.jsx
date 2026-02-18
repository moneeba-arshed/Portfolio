import React from 'react';
import { User, Code2, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-alt/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-subtle mb-6">About Me</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Passionate about building exceptional digital experiences.
            </h2>
            <div className="space-y-6 text-lg text-subtle leading-relaxed">
              <p>
                I am a Computer Engineering graduate currently pursuing an MS in Computer Science at FAST Islamabad. My journey in tech is driven by a desire to bridge the gap between complex engineering and intuitive user experiences.
              </p>
              <p>
                In my current role at <span className="text-content font-semibold">Instly</span>, I focus on building production-ready dashboards that help users manage complex workflows with ease. I believe in clean code, scalable architecture, and the power of a well-crafted UI.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="p-6 rounded-2xl bg-main border border-border">
                <Code2 className="mb-4 opacity-40" size={24} />
                <h4 className="font-bold mb-2">Modern Stack</h4>
                <p className="text-sm text-subtle">Building with React, Tailwind, and Vite for performance.</p>
              </div>
              <div className="p-6 rounded-2xl bg-main border border-border">
                <Rocket className="mb-4 opacity-40" size={24} />
                <h4 className="font-bold mb-2">Performance</h4>
                <p className="text-sm text-subtle">Optimizing for speed, responsiveness, and accessibility.</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-linear-to-br from-content/5 to-transparent rounded-3xl -rotate-3"></div>
            <div className="absolute inset-0 border border-border rounded-3xl rotate-3"></div>
            <div className="relative h-full w-full bg-alt rounded-3xl overflow-hidden flex items-center justify-center border border-border">
              <span className="text-8xl font-black opacity-[0.03] select-none tracking-tighter">MA</span>
              <User size={120} className="text-content opacity-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
