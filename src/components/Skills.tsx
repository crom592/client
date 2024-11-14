import React from 'react';
import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const technicalSkills: SkillItem[] = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 }
  ];

  const softSkills: string[] = [
    '문제 해결', 
    '팀워크', 
    '애자일 방법론', 
    '지속적 학습', 
    '의사소통'
  ];

  return (
    <div id="skills" className="w-full bg-white py-16">
      <div className="max-w-[1240px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            기술 및 역량
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-dark mb-6">
                Technical Skills
              </h3>
              {technicalSkills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between text-dark mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-dark mb-6">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
