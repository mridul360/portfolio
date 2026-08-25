import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import me from '../../assets/me3.jpg';

const Home = () => {
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15
      }
    }
  };

  const item = {
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

  const image = {
    hidden: { scale: 0.88, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });


  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center pt-24 pb-16 sm:pt-28"


      style={{
        background: "linear-gradient(-45deg, #0f172a, #1e293b, #334155, #475569)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite"
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container relative z-10 mx-auto flex w-full items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid w-full items-center gap-12 md:grid-cols-2 md:gap-8 lg:gap-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
        >

          <motion.div
            className="text-center text-white md:text-left"
            variants={container}
          >
            <motion.p className="text-yellow-400 font-mono mb-2" variants={item}>
              Hello, I'm
            </motion.p>

            <motion.h1 className="mb-3 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl" variants={item}>
              Mridul <span className="text-yellow-400">Hasan</span>
            </motion.h1>

            <motion.h2 className="mb-4 text-xl text-gray-300 sm:text-2xl md:text-3xl" variants={item}>
              Digital Designer & Developer
            </motion.h2>

            <motion.p className="mx-auto mb-6 max-w-lg text-gray-300 md:mx-0" variants={item}>
              I create beautiful, functional websites and applications focused on user experience.
            </motion.p>

            <motion.div className="mb-8 flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start" variants={item}>
              <motion.button
                className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-300 sm:px-6 sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload /> Download CV
              </motion.button>

              <motion.button
                className="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-yellow-400 px-5 py-3 text-sm font-bold text-white transition hover:bg-yellow-400 hover:text-black sm:px-6 sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate('/works');
                }}
              >
                <FiArrowRight /> My Projects
              </motion.button>
            </motion.div>

            <motion.div className="flex justify-center gap-4 md:justify-start" variants={item}>
              {[
                { icon: <FiGithub />, url: 'https://github.com/mridul360' },
                { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/mridul-hasan-mh1207' },
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

          <motion.div
            className="flex justify-center"
            variants={image}
          >
            <div className="relative">
              <motion.img
                src={me}
                alt="Mridul Hasan"
                className="h-56 w-56 rounded-full border-4 border-gray-800 object-cover shadow-xl sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
                whileHover={{ scale: 1.03 }}
              />

              <motion.div
                className="absolute -bottom-3 -left-2 rounded-full bg-gray-800/90 px-3 py-2 text-sm sm:-left-6 sm:px-4 sm:text-base"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <span className="text-yellow-400 font-bold">new</span> Experience
              </motion.div>

              <motion.div
                className="absolute -right-2 -top-3 rounded-full bg-gray-800/90 px-3 py-2 text-sm sm:-right-6 sm:px-4 sm:text-base"
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

      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm text-gray-300 sm:bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="mb-2">Change The Page</p>
        <div className="w-px h-8 bg-yellow-400 mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Home;
