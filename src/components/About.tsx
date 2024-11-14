import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div id="about" className="w-full bg-light py-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-dark text-lg">
            안녕하세요! 저는 혁신적인 기술 솔루션을 만드는 것을 열정으로 삼는 소프트웨어 엔지니어입니다. 
            복잡한 문제를 해결하고 사용자 중심의 애플리케이션을 개발하는 것을 좋아합니다.
          </p>
          <p className="text-dark text-lg mt-4">
            지속적인 학습과 성장을 추구하며, 최신 기술 트렌드에 항상 관심을 기울입니다. 
            협업을 중요하게 생각하고, 팀의 성공을 위해 최선을 다합니다.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center items-center"
        >
          <div className="w-[300px] h-[300px] bg-primary/20 rounded-full flex justify-center items-center">
            <div className="w-[250px] h-[250px] bg-primary/40 rounded-full flex justify-center items-center">
              <div className="w-[200px] h-[200px] bg-primary rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
