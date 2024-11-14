import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: '이지원',
      role: 'CTO',
      company: '테크 이노베이션 코리아',
      content: '김성은은 우리 팀의 핵심 멤버입니다. 그의 기술적 전문성과 리더십은 프로젝트의 성공에 크게 기여했습니다.',
      image: '/testimonial1.jpg'
    },
    {
      name: '박민수',
      role: '프로젝트 매니저',
      company: '글로벌 테크',
      content: '뛰어난 문제 해결 능력과 팀워크를 가진 개발자입니다. 항상 최고의 결과물을 만들어내는 것을 보았습니다.',
      image: '/testimonial2.jpg'
    },
    {
      name: '최유진',
      role: '개발팀 리더',
      company: '스타트업 솔루션즈',
      content: '새로운 기술을 빠르게 습득하고 적용하는 능력이 인상적입니다. 팀의 생산성을 크게 향상시켰습니다.',
      image: '/testimonial3.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="testimonials" className="w-full py-16 bg-light">
      <div className="max-w-[1240px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            추천사
          </h2>

          <div className="relative">
            {/* Testimonial Carousel */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Image placeholder */}
                    <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary">Photo</span>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg italic mb-4">
                        "{testimonials[currentIndex].content}"
                      </p>
                      <div>
                        <h4 className="text-xl font-bold text-dark">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-primary font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-gray-600">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-4' : 'bg-primary/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
