import React from 'react';
import me2 from '../../assets/me3.jpg';
import Container from '../Layout/Container';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const imageVariants = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const techStack = [
  { 
    icon: <FaHtml5 className='text-orange-500 text-xl' />, 
    name: 'HTML5',
    color: 'text-orange-500',
    hoverClass: 'hover:bg-orange-500/20'
  },
  { 
    icon: <FaCss3Alt className='text-blue-500 text-xl' />, 
    name: 'CSS3',
    color: 'text-blue-500',
    hoverClass: 'hover:bg-blue-500/20'
  },
  { 
    icon: <FaJsSquare className='text-yellow-400 text-xl' />, 
    name: 'JavaScript',
    color: 'text-yellow-400',
    hoverClass: 'hover:bg-yellow-400/20'
  },
  { 
    icon: <FaReact className='text-blue-400 text-xl' />, 
    name: 'React',
    color: 'text-blue-400',
    hoverClass: 'hover:bg-blue-400/20'
  },
  { 
    icon: <SiTailwindcss className='text-cyan-400 text-xl' />, 
    name: 'Tailwind',
    color: 'text-cyan-400',
    hoverClass: 'hover:bg-cyan-400/20'
  },
  { 
    icon: <FaBootstrap className='text-purple-500 text-xl' />, 
    name: 'Bootstrap',
    color: 'text-purple-500',
    hoverClass: 'hover:bg-purple-500/20'
  }
];

const Aboutme = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id='about' 
      className='relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-gray-900 to-black px-0 py-20 sm:py-24 lg:py-28'
      ref={ref}
    >
      <Container>
        <motion.div 
          className='relative z-10 flex w-full flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:gap-16'
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className='min-w-0 w-full max-w-3xl text-center text-white lg:w-3/5 lg:text-left'
            variants={containerVariants}
          >
            <motion.h2 
              className='mb-5 bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent sm:mb-6 sm:text-4xl md:text-5xl'
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            
            <motion.p 
              className='mb-8 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl'
              variants={itemVariants}
            >
              I am a passionate Frontend Developer with entry-level experience building responsive, 
              user-friendly web applications. Skilled in HTML5, CSS3, JavaScript and React.js with 
              a strong focus on performance, accessibility, and modern UI/UX principles. Proven ability 
              to collaborate with cross-functional teams to deliver high-quality digital experiences. 
              Dedicated to writing clean, maintainable code and staying updated with the latest frontend 
              technologies.
            </motion.p>

            <motion.div
              className='mb-8 flex justify-center sm:mb-10 lg:hidden'
              variants={imageVariants}
            >
              <div className='relative'>
                <div className='absolute -inset-3 rounded-full bg-linear-to-r from-purple-600 to-blue-500 blur-md opacity-75'></div>
                <img
                  className='relative h-56 w-56 rounded-full border-4 border-gray-800 object-cover sm:h-72 sm:w-72'
                  src={me2}
                  alt='Profile'
                  loading='lazy'
                  decoding='async'
                />
              </div>
            </motion.div>
            
            <motion.div 
              className='mb-8'
              variants={itemVariants}
            >
              <h3 className='text-xl font-semibold mb-4 text-gray-200'>Tech Stack</h3>
              <div
                className='group w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-black/10 px-1 py-3 sm:px-2 sm:py-4'
                style={{ maskImage: 'linear-gradient(to right, transparent, black 9%, black 91%, transparent)' }}
                aria-label='Technology stack'
              >
                <motion.div
                  className='flex w-max gap-2 pr-2 sm:gap-4 sm:pr-3'
                  initial={{ x: 0 }}
                  animate={inView ? { x: ['0%', '-50%'] } : { x: 0 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                >
                  {[...techStack, ...techStack].map((tech, index) => (
                    <motion.div 
                      key={`${tech.name}-${index}`}
                      aria-hidden={index >= techStack.length}
                      className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-gray-800 px-3 py-2 text-sm transition-all duration-300 sm:px-4 sm:text-base ${tech.hoverClass}`}
                      whileHover={{ 
                        y: -8,
                        scale: 1.06,
                        rotate: index % 2 === 0 ? -2 : 2,
                        transition: { type: 'spring', stiffness: 400, damping: 18 }
                      }}
                    >
                      <motion.span 
                        whileHover={{ scale: 1.25, rotate: 8 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className={tech.color}
                      >
                        {tech.icon}
                      </motion.span>
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

          </motion.div>

          {/* Image Section */}
          <motion.div 
            className='hidden w-full justify-center lg:flex lg:w-2/5'
            variants={imageVariants}
          >
            <div className='relative'>
              <div className='absolute -inset-4 bg-linear-to-r from-purple-600 to-blue-500 rounded-full blur-md opacity-75'></div>
              <img 
                className='relative h-56 w-56 object-cover rounded-full border-4 border-gray-800 sm:h-72 sm:w-72 md:h-80 md:w-80' 
                src={me2} 
                alt="Profile" 
                loading='lazy'
                decoding='async'
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>

      
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-10 blur-3xl'></div>
        <div className='absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-600 opacity-10 blur-3xl'></div>
      </div>
    </section>
  );
};

export default Aboutme;