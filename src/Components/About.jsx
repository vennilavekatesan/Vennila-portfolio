import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-emerald-400">About Me</h2>
        
        <div className="text-lg text-gray-400 leading-relaxed max-w-3xl">
          <p className="mb-4">
            I'm a Frontend Developer with over 3 years of experience at Comcast, where I've specialized 
            in building scalable e-commerce applications and micro-frontend architectures.
          </p>
          <p>
            My expertise lies in React.js, Redux Toolkit, and Sitecore JSS. I've successfully delivered 
            features that significantly improved performance and drove substantial revenue growth for the 
            Xfinity platform. Currently expanding my skills into full-stack development with Node.js, Express, and MongoDB.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;