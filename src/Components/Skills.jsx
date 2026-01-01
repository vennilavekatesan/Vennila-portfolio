import React from 'react';

const Skills = () => {
  const skillsData = {
    frontend: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux Toolkit', 'Next.js'],
    tools: ['Git', 'GitHub', 'AWS', 'Azure DevOps', 'Sitecore', 'Webpack', 'Jest'],
    learning: ['Node.js', 'Express', 'MongoDB', 'REST APIs']
  };

  return (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-gray-950/50 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-emerald-400">Skills & Technologies</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="group bg-gray-950 border border-gray-900 rounded-xl p-6 hover:border-emerald-400 transition-all hover:shadow-xl hover:shadow-emerald-500/10">
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.frontend.map((skill) => (
                <span key={skill} className="px-4 py-2 text-sm bg-gray-900 text-gray-300 rounded border border-gray-800 hover:border-emerald-400 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="group bg-gray-950 border border-gray-900 rounded-xl p-6 hover:border-emerald-400 transition-all hover:shadow-xl hover:shadow-emerald-500/10">
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.tools.map((skill) => (
                <span key={skill} className="px-4 py-2 text-sm bg-gray-900 text-gray-300 rounded border border-gray-800 hover:border-emerald-400 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className="group bg-gray-950 border border-gray-900 rounded-xl p-6 hover:border-emerald-400 transition-all hover:shadow-xl hover:shadow-emerald-500/10">
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">Currently Learning</h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.learning.map((skill) => (
                <span key={skill} className="px-4 py-2 text-sm bg-gray-900 text-gray-300 rounded border border-gray-800 hover:border-emerald-400 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;