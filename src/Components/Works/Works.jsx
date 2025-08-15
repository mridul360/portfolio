import React, { useState } from 'react';
import Container from '../Layout/Container';
import agenc from '../../assets/agenc.jpg';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi';
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

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
  }
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
  const [isExpanding, setIsExpanding] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Show only 3 projects initially
  const displayedProjects = showAllProjects ? allProjects : allProjects.slice(0, 3);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    }),
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const toggleAllProjects = () => {
    if (!showAllProjects) {
      setIsExpanding(true);
      setTimeout(() => {
        setShowAllProjects(true);
        setIsExpanding(false);
      }, 500);
    } else {
      setShowAllProjects(false);
    }
  };

  return (
    <section id='works' className='min-h-screen py-20 flex items-center relative overflow-hidden'>
      {/* Background elements same as before */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#0f172a] to-[#14213d] z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMEg0MFY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-20 z-0"></div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: "#f59e0b" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { 
              enable: true, 
              distance: 150, 
              color: "#f59e0b", 
              opacity: 0.2, 
              width: 1 
            },
            move: { 
              enable: true, 
              speed: 2, 
              direction: "none", 
              random: true,
              out_mode: "bounce"
            }
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" }
            }
          }
        }}
        className="absolute inset-0 z-0"
      />

      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">My <span className="text-amber-400">Projects</span></span>
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-amber-400/30 z-0"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto relative">
            Here are some of my selected works. Each project represents a unique challenge and solution.
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-amber-400"></span>
          </p>
        </motion.div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 transition-all duration-500 ${isExpanding ? 'opacity-50' : 'opacity-100'}`}>
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              className="relative group"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Project card content same as before */}
              <div className={`absolute inset-0 rounded-2xl bg-amber-400/10 blur-md ${hoveredCard === project.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
              
              <div 
                className={`relative h-full p-6 rounded-2xl transition-all duration-500 ${project.featured ? 'border-2 border-amber-400' : 'border border-gray-700/50'}`}
                style={{
                  background: 'rgba(15, 15, 25, 0.7)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transform: 'translateZ(0)'
                }}
              >
                {/* Rest of the card content */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Featured
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 relative ${project.featured ? 'text-amber-400' : 'text-white'}`}>
                  {project.title}
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-400"></span>
                </h3>
                
                <p className="text-gray-300 mb-4 min-h-[60px]">{project.description}</p>
                
                <div className="relative overflow-hidden rounded-xl mb-4 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={project.image} 
                    alt={project.title} 
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
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <motion.span 
                      key={tech} 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center px-3 py-1 rounded-full bg-gray-800/80 text-gray-200 text-sm backdrop-blur-sm"
                    >
                      {techIcons[tech] || null}
                      <span className="ml-1">{tech}</span>
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-4 gap-3">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-4 rounded-lg text-center font-medium transition-all ${
                      project.featured 
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black shadow-lg shadow-amber-400/20' 
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
              </div>
            </motion.div>
          ))}
        </div>

        {!showAllProjects && allProjects.length > 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleAllProjects}
              className="px-8 py-3 bg-transparent border-2 border-amber-400 text-amber-400 rounded-full font-medium hover:bg-amber-400 hover:text-black transition-all duration-300 relative overflow-hidden group flex items-center mx-auto"
            >
              <span className="relative z-10">View All Projects ({allProjects.length - 3} more)</span>
              <FiChevronDown className="ml-2 relative z-10" />
              <span className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
            </motion.button>
          </motion.div>
        )}

        {showAllProjects && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleAllProjects}
              className="px-8 py-3 bg-transparent border-2 border-amber-400 text-amber-400 rounded-full font-medium hover:bg-amber-400 hover:text-black transition-all duration-300 relative overflow-hidden group flex items-center mx-auto"
            >
              <span className="relative z-10">Show Less</span>
              <span className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
            </motion.button>
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default Works;