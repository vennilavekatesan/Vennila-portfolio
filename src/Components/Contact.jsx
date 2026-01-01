import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-gray-950/50 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-emerald-400">Let's Work Together</h2>
        
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          I'm currently looking for new opportunities and exciting projects. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a 
            href="mailto:vennilavenkatesan08@gmail.com" 
            className="flex items-center gap-2 px-6 py-3 bg-gray-950 border border-gray-900 hover:border-emerald-400 rounded-lg transition-colors"
          >
            <Mail size={20} className="text-emerald-400" />
            <span>vennilavenkatesan08@gmail.com</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/vennila07" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-6 py-3 bg-gray-950 border border-gray-900 hover:border-emerald-400 rounded-lg transition-colors"
          >
            <Linkedin size={20} className="text-emerald-400" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/vennilavekatesan/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-6 py-3 bg-gray-950 border border-gray-900 hover:border-emerald-400 rounded-lg transition-colors"
          >
            <Github size={20} className="text-emerald-400" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;