import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const roles = [
    '소프트웨어 엔지니어',
    'Full-Stack 개발자',
    '문제 해결사',
    '혁신가'
  ];

  return (
    <div id="home" className="w-full h-screen bg-light flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[800px] w-full text-center"
      >
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-dark">
          안녕하세요, 저는 <span className="text-primary">김성은</span>입니다
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold text-secondary">
            저는 
            <ReactTyped
              strings={roles}
              typeSpeed={70}
              backSpeed={50}
              loop
              className="pl-2"
            />
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary text-white rounded-md font-medium my-6 mx-auto py-3 px-6 hover:bg-blue-500 transition duration-300"
        >
          내 작업 보기
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
