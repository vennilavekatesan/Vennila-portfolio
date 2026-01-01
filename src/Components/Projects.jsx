import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'Modern e-commerce admin dashboard with product management, analytics, and real-time updates.',
      tech: ['React', 'Tailwind CSS', 'Chart.js', 'Redux'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Full-stack task management application with user authentication and real-time collaboration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location search, forecasts, and beautiful data visualizations.',
      tech: ['React', 'API Integration', 'Recharts'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="work" className="py-32 px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-emerald-400">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group bg-gray-950 rounded-xl overflow-hidden border border-gray-900 hover:border-emerald-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="h-48 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <Code2 size={48} className="text-emerald-400 relative z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-900 text-gray-400 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-gray-900">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    <Github size={16} />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    <ExternalLink size={16} />
                    Live
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