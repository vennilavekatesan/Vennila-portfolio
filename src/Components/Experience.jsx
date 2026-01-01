import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: 'Jan 2023 - Present',
      title: 'Software Development Engineer 2',
      company: 'Comcast India • Chennai, India',
      description: 'Working on Xfinity.com e-commerce platform using React, Redux Toolkit, and Sitecore JSS. Building reusable components and optimizing performance for large-scale applications. Implementing CI/CD pipelines with Azure DevOps and providing production support.',
      current: true
    },
    {
      period: 'Jan 2022 - Dec 2022',
      title: 'Software Engineer 1',
      company: 'Comcast India • Chennai, India',
      description: 'Developed internal job portal using React with global search and debounce functionality. Worked on mono-repo architecture for micro-frontend implementation. Optimized bundle size using Webpack and achieved high test coverage with Jest and React Testing Library.',
      current: false
    },
    {
      period: 'Jul 2021 - Dec 2021',
      title: 'Software Engineer Intern',
      company: 'Comcast India • Chennai, India',
      description: 'Started my journey working on Comcast Xfinity website using React and JavaScript. Learned modern frontend development practices, worked with REST APIs, and contributed to the Affordable Connectivity Program features. Gained experience with Elasticsearch for debugging customer issues.',
      current: false
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 lg:px-12 bg-gray-950/50 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-emerald-400">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`border-l-2 ${exp.current ? 'border-emerald-400' : 'border-gray-700'} pl-8 relative`}>
              <div className={`absolute -left-2 top-0 w-4 h-4 ${exp.current ? 'bg-emerald-400' : 'bg-gray-700'} rounded-full`}></div>
              <p className={`${exp.current ? 'text-emerald-400' : 'text-gray-500'} text-sm mb-2`}>{exp.period}</p>
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-400 mb-4">{exp.company}</p>
              <p className="text-gray-400 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;