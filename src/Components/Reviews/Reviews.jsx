import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    rating: 5,
    comment: 'This product completely transformed our workflow. The team is more productive than ever before!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Engineer',
    rating: 4,
    comment: 'Great features and excellent performance. The customer support team is very responsive and helpful.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Small Business Owner',
    rating: 5,
    comment: 'Easy to use and affordable. It has everything I need to manage my business efficiently.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 4,
    name: 'David Rodriguez',
    role: 'Freelance Designer',
    rating: 5,
    comment: 'The intuitive interface saves me hours every week. Highly recommended for creative professionals.',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    id: 5,
    name: 'Priya Patel',
    role: 'HR Manager',
    rating: 4,
    comment: 'Our onboarding process is now 50% faster thanks to this solution. The team loves it!',
    avatar: 'https://randomuser.me/api/portraits/women/82.jpg'
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction === 'right' ? 80 : -80,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        x: direction === 'right' ? -80 : 80,
        opacity: 0
      };
    }
  };

  return (
    <section id='reviews' className="animated-bg min-h-dvh px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <h2 className="mb-10 text-center text-3xl font-bold text-white sm:mb-12 sm:text-4xl">
        What Our Customers Say
      </h2>
      
      <div className="relative mx-auto h-104 max-w-3xl overflow-hidden sm:h-96">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="mx-auto w-full max-w-2xl rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg sm:p-8">
              <div className="mb-6 flex items-center">
                <img 
                  src={reviews[currentIndex].avatar} 
                  alt={reviews[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-indigo-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {reviews[currentIndex].name}
                  </h3>
                  <p className="text-gray-400">
                    {reviews[currentIndex].role}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i}
                    className={`h-5 w-5 ${i < reviews[currentIndex].rating ? 'text-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              
              <p className="text-base italic text-gray-300 sm:text-lg">
                "{reviews[currentIndex].comment}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
       
      <div className="mt-8 flex justify-center space-x-4">
        <button  
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-700 cursor-pointer hover:bg-gray-600 transition-colors"
          aria-label="Previous review"
        >
          <FaChevronLeft className="h-5 w-5 text-gray-300" />
        </button>
        
        <div className="flex items-center  space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full cursor-pointer transition-colors ${index === currentIndex ? 'bg-indigo-500' : 'bg-gray-600'}`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 cursor-pointer transition-colors"
          aria-label="Next review"
        >
          <FaChevronRight className="h-5 w-5 text-gray-300" />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
