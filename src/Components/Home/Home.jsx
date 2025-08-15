import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import me from '../../assets/me3.jpg';
import bg2 from '../../assets/bg.png';

const Home = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const image = {
    hidden: { scale: 0.4, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Scroll trigger hooks
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });


  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center relative overflow-hidden"
      // Add this to your CSS

      style={{
        background: "linear-gradient(-45deg, #0f172a, #1e293b, #334155, #475569)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite"
      }}
      ref={ref}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-75 items-center w-full"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
        >
          {/* Text content */}
          <motion.div
            className="text-white"
            variants={container}
          >
            <motion.p className="text-yellow-400 font-mono mb-2" variants={item}>
              Hello, I'm
            </motion.p>

            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2" variants={item}>
              Mridul <span className="text-yellow-400">Hasan</span>
            </motion.h1>

            <motion.h2 className="text-2xl sm:text-3xl text-gray-300 mb-4" variants={item}>
              Digital Designer & Developer
            </motion.h2>

            <motion.p className="text-gray-300 mb-6 max-w-lg" variants={item}>
              I create beautiful, functional websites and applications focused on user experience.
            </motion.p>

            {/* Buttons */}
            <motion.div className="flex flex-wrap gap-4 mb-8" variants={item}>
              <motion.button
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-300 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload /> Download CV
              </motion.button>

              <motion.button
                className="border-2 border-yellow-400 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-400 hover:text-black transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiArrowRight /> My Projects
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div className="flex gap-4" variants={item}>
              {[
                { icon: <FiGithub />, url: 'https://github.com' },
                { icon: <FiLinkedin />, url: 'https://linkedin.com' },
                { icon: <FiTwitter />, url: 'https://twitter.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 text-2xl transition"
                  whileHover={{ y: -3 }}
                  variants={item}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center"
            variants={image}
          >
            <div className="relative">
              <motion.img
                src={me}
                alt="Mridul Hasan"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 border-gray-800 object-cover shadow-xl"
                whileHover={{ scale: 1.03 }}
              />

              <motion.div
                className="absolute -bottom-2 -left-2 bg-gray-800/90 px-4 py-2 rounded-full"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <span className="text-yellow-400 font-bold">new</span> Experience
              </motion.div>

              <motion.div
                className="absolute -top-2 -right-2 bg-gray-800/90 px-4 py-2 rounded-full"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <span className="text-yellow-400 font-bold">5+</span> Projects
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="mb-2">Scroll down</p>
        <div className="w-px h-8 bg-yellow-400 mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Home;