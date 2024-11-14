import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: '시니어 소프트웨어 엔지니어',
      company: '테크 이노베이션 코리아',
      period: '2020 - 현재',
      description: [
        '대규모 분산 시스템 설계 및 구현',
        '팀 리드로서 10명의 개발자 관리',
        '시스템 성능 최적화로 처리량 50% 향상',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Kubernetes'],
    },
    {
      title: '소프트웨어 엔지니어',
      company: '글로벌 테크',
      period: '2018 - 2020',
      description: [
        '마이크로서비스 아키텍처 설계 및 구현',
        'DevOps 파이프라인 구축',
        '실시간 데이터 처리 시스템 개발',
      ],
      technologies: ['Python', 'Docker', 'MongoDB', 'Jenkins'],
    },
    {
      title: '주니어 개발자',
      company: '스타트업 솔루션즈',
      period: '2016 - 2018',
      description: [
        '웹 애플리케이션 프론트엔드 개발',
        'RESTful API 설계 및 구현',
        '사용자 인터페이스 개선',
      ],
      technologies: ['JavaScript', 'React', 'Express.js', 'MySQL'],
    },
  ];

  return (
    <div id="experience" className="w-full py-16 bg-white">
      <div className="max-w-[1240px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            경력 사항
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20" />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full mt-6" />

                {/* Content */}
                <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <div className="bg-light rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-dark mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">{exp.company}</h4>
                    <p className="text-gray-600 mb-4">{exp.period}</p>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
