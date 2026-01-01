import React from 'react';
import { ChevronDown, Sparkles, User } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-6 lg:px-12 pt-20 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Profile Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Image Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-emerald-400/30 bg-gray-950 shadow-2xl shadow-emerald-500/20">
                <img src="/Vennila.jpeg" alt="Vennila V" className="w-full h-full object-cover" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-black px-4 py-2 rounded-lg font-semibold text-sm shadow-xl animate-bounce">
                React
              </div>
              <div className="absolute -bottom-4 -left-4 bg-teal-500 text-black px-4 py-2 rounded-lg font-semibold text-sm shadow-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                3+ Years
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 animate-pulse">
              <Sparkles className="text-emerald-400" size={16} />
              <span className="text-sm text-emerald-400">Available for opportunities</span>
            </div>

            <p className="text-emerald-400 text-sm mb-4 tracking-wider uppercase">
              Frontend Developer
            </p>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Hey, I'm <span className="text-emerald-400">Vennila!</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Frontend Developer with 3+ years of experience specializing in React.js, Sitecore JSS, 
              and modern JavaScript frameworks. Passionate about building scalable, high-performance 
              web applications.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('work')}
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-black rounded-lg transition-all font-medium shadow-lg shadow-emerald-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-gray-700 hover:border-emerald-400 rounded-lg transition-colors font-medium"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <ChevronDown size={24} className="text-emerald-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;