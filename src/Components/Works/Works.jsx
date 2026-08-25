import React, { useState } from 'react';
import Container from '../Layout/Container';
import agenc from '../../assets/agenc.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi';
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const allProjects = [
  {
    id: 1,
    title: "Agenc",
    description: "A modern agency landing page with smooth animations",
    image: agenc,
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://mridul360.github.io/agenc/",
    codeLink: "https://github.com/mridul360/agenc",
    featured: true
  },
  {
    id: 2,
    title: "Portfolio V1",
    description: "My first portfolio website showcasing early projects",
    image: agenc,
    tech: ["React", "Tailwind CSS"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "E-commerce",
    description: "Fully responsive e-commerce template with cart functionality",
    image: agenc,
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "Weather App",
    description: "Real-time weather application with API integration",
    image: agenc,
    tech: ["React", "API"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 5,
    title: "Task Manager",
    description: "Productivity app with drag-and-drop functionality",
    image: agenc,
    tech: ["React", "Firebase"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Content management system for bloggers",
    image: agenc,
    tech: ["React", "Node.js"],
    liveLink: "#",
    codeLink: "#"
  },{
    id: 7,
    title: "Task Manager",
    description: "Productivity app with drag-and-drop functionality",
    image: agenc,
    tech: ["React", "Firebase"],
    liveLink: "#",
    codeLink: "#"
  },
];

const techIcons = {
  "HTML": <FaHtml5 className="text-orange-500" />,
  "CSS": <FaCss3Alt className="text-blue-500" />,
  "JavaScript": <FaJs className="text-yellow-400" />,
  "React": <FaReact className="text-blue-400" />
};

const Works = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects ? allProjects : allProjects.slice(0, 3);

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }),
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.94,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    hover: {
      y: -12,
      scale: 1.015,
      transition: { type: 'spring', stiffness: 240, damping: 24, mass: 0.8 }
    }
  };

  const toggleAllProjects = () => {
    setShowAllProjects((isShowingAll) => {
      if (isShowingAll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      return !isShowingAll;
    });
  };

  return (
    <section id='works' className='min-h-screen py-20 flex items-center relative overflow-hidden'>
    
      <div className="absolute inset-0 bg-linear-to-br from-[#0a1128] via-[#0f172a] to-[#14213d] z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMEg0MFY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-20 z-0"></div>
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.05em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1, delay: 0.2 }}
            className='mb-4 text-xs font-semibold uppercase text-amber-300'
          >
            Selected work archive
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">My <span className="text-amber-400">Work Tree</span></span>
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-amber-400/30 z-0"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto relative">
            Here are some of my selected works. Each project represents a unique challenge and solution.
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-amber-400"></span>
          </p>
        </motion.div>

        <motion.div layout transition={{ type: 'spring', stiffness: 180, damping: 26 }} className="relative grid grid-cols-1 gap-6 px-2 sm:px-4 md:grid-cols-2 lg:gap-x-12 before:absolute before:bottom-0 before:left-1/2 before:top-0 before:hidden before:w-px before:-translate-x-1/2 before:bg-linear-to-b before:from-transparent before:via-amber-300/40 before:to-transparent lg:before:block">
          <motion.div
            className='pointer-events-none absolute left-1/2 top-0 z-10 hidden h-28 w-px -translate-x-1/2 bg-linear-to-b from-amber-200 via-amber-400 to-transparent lg:block'
            animate={{ opacity: [0.35, 1, 0.35], scaleY: [0.8, 1, 0.8] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout="position"
              transition={{ layout: { type: 'spring', stiffness: 180, damping: 26 } }}
              custom={i}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              variants={cardVariants}
              className={`group relative lg:before:absolute lg:before:top-1/2 lg:before:h-px lg:before:w-8 lg:before:bg-amber-300/40 ${i % 2 === 0 ? 'lg:mr-8 lg:before:-right-8' : 'lg:ml-8 lg:before:-left-8'}`}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.span
                className={`absolute top-1/2 z-10 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-amber-200 bg-amber-400 shadow-[0_0_16px_rgba(251,191,36,0.9)] lg:block ${i % 2 === 0 ? '-right-9.5' : '-left-9.5'}`}
                animate={{ scale: [1, 1.35, 1], boxShadow: ['0 0 8px rgba(251,191,36,0.5)', '0 0 22px rgba(251,191,36,1)', '0 0 8px rgba(251,191,36,0.5)'] }}
                transition={{ duration: 2.4, delay: i * 0.12, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className={`absolute inset-0 rounded-2xl bg-amber-400/10 blur-sm ${hoveredCard === project.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
              
              <motion.div 
                className={`relative h-full rounded-2xl p-4 transition-all duration-500 sm:p-5 ${project.featured ? 'border-2 border-amber-400' : 'border border-gray-700/50'}`}
                style={{
                  background: 'rgba(15, 15, 25, 0.7)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className='mb-3 flex items-center justify-between border-b border-white/10 pb-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gray-500'>
                  <span>Node {String(i + 1).padStart(2, '0')}</span>
                  <span className='flex items-center gap-2 text-emerald-400'><span className='h-1.5 w-1.5 rounded-full bg-emerald-400'></span>Live</span>
                </div>
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-linear-to-r from-amber-400 to-amber-600 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Featured
                  </div>
                )}
                
                <h3 className={`relative mb-1 text-xl font-bold ${project.featured ? 'text-amber-400' : 'text-white'}`}>
                  {project.title}
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-400"></span>
                </h3>
                
                <p className="mb-3 min-h-12 text-sm text-gray-300">{project.description}</p>
                
                <div className="group relative mb-3 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-103 sm:h-40" 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 text-black rounded-full hover:bg-amber-400 hover:scale-110 transition-all duration-300"
                    >
                      <FiExternalLink size={20} />
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 text-black rounded-full hover:bg-amber-400 hover:scale-110 transition-all duration-300"
                    >
                      <FiGithub size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.tech.map(tech => (
                    <motion.span 
                      key={tech} 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center rounded-full bg-gray-800/80 px-2.5 py-1 text-xs text-gray-200 backdrop-blur-sm"
                    >
                      {techIcons[tech] || null}
                      <span className="ml-1">{tech}</span>
                    </motion.span>
                  ))}
                </div>
                
                <div className="mt-3 flex justify-between gap-2">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-4 rounded-lg text-center font-medium transition-all ${
                      project.featured 
                        ? 'bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black shadow-lg shadow-amber-400/20' 
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 rounded-lg bg-transparent border border-gray-600 hover:border-amber-400 text-white text-center font-medium transition-all hover:bg-gray-800/50"
                  >
                    View Code
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {allProjects.length > 3 && (
          <motion.div layout className="mt-10 text-center sm:mt-12">
            <motion.button 
              layout
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={toggleAllProjects}
              className="relative mx-auto flex items-center overflow-hidden rounded-full border-2 border-amber-400 bg-transparent px-6 py-3 font-medium text-amber-400 transition-colors duration-300 hover:bg-amber-400 hover:text-black sm:px-8"
            >
              <AnimatePresence initial={false}>
                <motion.span
                  key={showAllProjects ? 'less' : 'more'}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10"
                >
                  {showAllProjects ? 'Show Less' : `View All Projects (${allProjects.length - 3} more)`}
                </motion.span>
              </AnimatePresence>
              <motion.span
                className="relative z-10 ml-2"
                animate={{ rotate: showAllProjects ? 180 : 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <FiChevronDown />
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default Works;
