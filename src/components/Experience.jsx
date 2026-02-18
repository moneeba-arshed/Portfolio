import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'Instly',
            role: 'Frontend Developer',
            period: 'Present',
            description: 'Specializing in React.js, building scalable dashboards, and implementing modern UI systems. Collaborating with cross-functional teams to deliver high-quality production web applications.',
        },
                {
            company: 'Nescom',
            role: 'Machine Learning Intern',
            period: '4 Months',
            description: 'Worked on machine learning models and data preprocessing. Gained experience in research and development environments.',
        },
        {
            company: 'Virtual Soft Company',
            role: 'SQA Tester - Internship',
            period: '03/2024 – 05/2024',
            description: 'Contributed to testing processes using Jira as a project management tool. Conducted thorough manual testing for applications and websites to ensure functionality, usability, and reliability.',
        },
        {
            company: 'Virtual Soft Company',
            role: 'React JS - Internship',
            period: '07/2022 – 09/2022',
            description: 'Gained hands-on experience in React.js development, collaborating with experienced developers to build responsive user interfaces. Developed reusable UI components to enhance performance and scalability.',
        },
        {
            company: 'Virtual Soft Company',
            role: 'Web Developer - Internship',
            period: '04/2022 – 07/2022',
            description: 'Built responsive and visually appealing web designs using Bootstrap. Designed and developed dynamic, user-friendly interfaces, enhancing user engagement.',
        },
    ];

    return (
        <section id="experience" className="section-padding bg-main">
            <div className="container-custom">
                <div className="flex flex-col mb-20 animate-fade-in">
                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-subtle mb-6 flex items-center gap-2">
                        <Briefcase size={14} />
                        Professional Journey
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
                </div>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative group">
                            <div className="flex flex-col md:flex-row md:gap-16">
                                <div className="md:w-1/4 mb-4 md:mb-0">
                                    <div className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-subtle">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="md:w-3/4 relative pb-12 last:pb-0">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-8 md:-left-[41px] top-2 h-2 w-2 bg-content rounded-full z-10" />

                                    {/* Vertical line */}
                                    {index !== experiences.length - 1 && (
                                        <div className="absolute -left-[31px] md:-left-[38px] top-4 bottom-0 w-px bg-border" />
                                    )}

                                    <div className="transition-standard group-hover:translate-x-1">
                                        <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                                        <p className="text-lg font-bold text-subtle uppercase tracking-wider mb-6">{exp.company}</p>
                                        <p className="text-lg text-subtle leading-relaxed max-w-2xl">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
