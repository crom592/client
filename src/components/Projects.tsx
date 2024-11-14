import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: '인공지능 기반 추천 시스템',
      description: '사용자 행동 데이터를 분석하여 개인화된 추천을 제공하는 머신러닝 기반 시스템',
      technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
      image: '/project1.jpg',
      link: '#'
    },
    {
      title: '실시간 협업 플랫폼',
      description: '실시간 문서 편집과 화상 회의를 지원하는 팀 협업 도구',
      technologies: ['Node.js', 'Socket.io', 'React', 'MongoDB'],
      image: '/project2.jpg',
      link: '#'
    },
    {
      title: '블록체인 거래 시스템',
      description: '안전하고 투명한 거래를 위한 블록체인 기반 플랫폼',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      image: '/project3.jpg',
      link: '#'
    }
  ];

  return (
    <div id="projects" className="w-full py-16 bg-light">
      <div className="max-w-[1240px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            프로젝트
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-48 bg-gray-200">
                  {/* Replace with actual project images */}
                  <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary">
                    Project Image
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    자세히 보기
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
