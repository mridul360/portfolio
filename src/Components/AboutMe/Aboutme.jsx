import React from 'react';
import me2 from '../../assets/me5.jpg';
import Container from '../Layout/Container';
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaLinkedin, FaReact } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiTailwindcss } from "react-icons/si";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
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
    triggerOnce: false
  });

  return (
    <section 
      id='about' 
      className='relative min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 overflow-hidden'
      ref={ref}
    >
      <Container>
        <motion.div 
          className='flex flex-col lg:flex-row items-center gap-12 relative z-10'
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className='lg:w-3/5 mt-65 text-white'
            variants={containerVariants}
          >
            <motion.h2 
              className='text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500'
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            
            <motion.p 
              className='text-lg md:text-xl leading-relaxed text-gray-300 mb-8'
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
              className='mb-8'
              variants={itemVariants}
            >
              <h3 className='text-xl font-semibold mb-4 text-gray-200'>Tech Stack</h3>
              <div className='flex flex-wrap gap-4'>
                {techStack.map((tech, index) => (
                  <motion.div 
                    key={index}
                    className={`flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${tech.hoverClass}`}
                    variants={itemVariants}
                    custom={index * 0.1}
                    whileHover={{ 
                      y: -5,
                      scale: 1.05,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <motion.span 
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.1 }}
                      className={tech.color}
                    >
                      {tech.icon}
                    </motion.span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className='text-xl font-semibold mb-4 text-gray-200'>Connect With Me</h3>
              <div className='flex gap-4'>
                {[
                  { icon: <FaGithub className='text-2xl' />, url: 'https://github.com/mridul360' },
                  { icon: <FaLinkedin className='text-2xl' />, url: 'https://www.linkedin.com/in/mridul-hasan-mh1207' },
                  { icon: <FaXTwitter className='text-2xl' />, url: '#' }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.url} 
                    className='text-gray-400 hover:text-white transition-colors'
                    variants={itemVariants}
                    custom={index * 0.1}
                    whileHover={{ 
                      scale: 1.2,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className='lg:w-2/5 flex mt-40 justify-center'
            variants={imageVariants}
          >
            <div className='relative'>
              <div className='absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-md opacity-75'></div>
              <img 
                className='relative h-64 w-64 md:h-80 md:w-80 object-cover rounded-full border-4 border-gray-800' 
                src={me2} 
                alt="Profile" 
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