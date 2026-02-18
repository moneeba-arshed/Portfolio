import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'moneebaarshed@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+92 3170755868' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Islamabad, Pakistan' },
  ];

  return (
    <section id="contact" className="section-padding bg-alt/30">
      <div className="container-custom">
        <div className="flex flex-col mb-20 animate-fade-in">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-subtle mb-6 flex items-center gap-2">
            <MessageSquare size={14} />
            Get In Touch
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's build something <br /> exceptional together.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <p className="text-xl text-subtle leading-relaxed max-w-lg mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="h-12 w-12 rounded-full bg-main flex items-center justify-center border border-border group-hover:invert transition-standard">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-subtle mb-1">{info.label}</p>
                    <p className="text-lg font-bold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-main p-10 rounded-3xl border border-border">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <div className="h-20 w-20 rounded-full bg-content/5 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-content" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-subtle">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-subtle ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-alt/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-content/10 focus:border-content transition-standard"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-subtle ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-6 py-4 bg-alt/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-content/10 focus:border-content transition-standard"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-subtle ml-1">Your Message</label>
                  <textarea
                    required
                    rows="4"
                    placeholder="How can I help you?"
                    className="w-full px-6 py-4 bg-alt/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-content/10 focus:border-content transition-standard resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full btn-primary py-5 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {formState === 'sending' ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
