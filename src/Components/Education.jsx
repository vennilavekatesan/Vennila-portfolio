import React from 'react';
import { Award } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-32 px-6 lg:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-emerald-400">Education & Achievements</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-gray-950 border border-gray-900 rounded-xl p-8 hover:border-emerald-400/50 transition-colors">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Bachelor of Engineering</h3>
              <p className="text-emerald-400 font-medium">Electronics and Communication Engineering</p>
              <p className="text-gray-400 mt-2">SSN College of Engineering</p>
              <p className="text-gray-500 text-sm">Jul 2018 - June 2022</p>
            </div>
            <div className="pt-4 border-t border-gray-900">
              <p className="text-gray-300">CGPA: <span className="text-emerald-400 font-semibold">86.9%</span> (Distinction)</p>
              <p className="text-gray-400 text-sm mt-2">🎓 Rural Merit Scholarship for HSC Topper</p>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="bg-gray-950 border border-gray-900 rounded-xl p-8 hover:border-emerald-400/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-emerald-400" size={28} />
              <h3 className="text-2xl font-semibold">Awards & Recognition</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-emerald-400 mb-1">🏆 Comcast Spotlight Champ Award (2x)</p>
                <p className="text-gray-400 text-sm">Recognized for delivering high-profit margin features and contributions to ACP program</p>
              </div>
              <div className="pt-4 border-t border-gray-900">
                <p className="font-semibold text-emerald-400 mb-1">🎓 Academic Excellence Awards</p>
                <p className="text-gray-400 text-sm">First position in 10th and 12th grade, demonstrating consistent academic excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;