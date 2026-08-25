import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FiArrowDownCircle, FiExternalLink } from 'react-icons/fi';
import me from '../../assets/me3.jpg';
import ContactButton from '../ContactButton/ContactButton';

const Home = () => {
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
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
        duration: 1.1,
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
      className="relative flex min-h-dvh items-center overflow-hidden bg-cover bg-center px-0 py-24 sm:py-28"


      style={{
        background: "linear-gradient(-45deg, #0f172a, #1e293b, #334155, #475569)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite"
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid w-full items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-8 lg:gap-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >

          <motion.div
            className="text-center text-white md:text-left"
            variants={container}
          >
            <motion.p className="text-yellow-400 font-mono mb-2" variants={item}>
              Hello, I'm
            </motion.p>

            <motion.h1 className="mb-3 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" variants={item}>
              Mridul <span className="text-yellow-400">Hasan</span>
            </motion.h1>

            <motion.h2 className="mb-4 text-xl text-gray-300 sm:text-2xl md:text-3xl" variants={item}>
              Digital Designer & Developer
            </motion.h2>

            <motion.p className="mx-auto mb-6 max-w-lg text-gray-300 md:mx-0" variants={item}>
              I create beautiful, functional websites and applications focused on user experience.
            </motion.p>

            <motion.div className="mb-8 flex justify-center md:hidden" variants={image}>
              <div className="relative">
                <motion.img
                  src={me}
                  alt="Mridul Hasan"
                  className="h-52 w-52 rounded-full border-4 border-gray-800 object-cover shadow-xl sm:h-64 sm:w-64"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
                <div className="absolute -bottom-3 -left-2 rounded-full bg-gray-800/90 px-3 py-2 text-sm sm:-left-5 sm:text-base">
                  <span className="font-bold text-yellow-400">new</span> Experience
                </div>
                <div className="absolute -right-2 -top-3 rounded-full bg-gray-800/90 px-3 py-2 text-sm sm:-right-5 sm:text-base">
                  <span className="font-bold text-yellow-400">5+</span> Projects
                </div>
              </div>
            </motion.div>

            <motion.div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:justify-start" variants={item}>
              <motion.button
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-300 sm:w-auto sm:px-6 sm:text-base"
                whileHover={{ scale: 1.05 }}
              whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <FiArrowDownCircle /> Download CV
              </motion.button>

              <motion.button
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-yellow-400 px-5 py-3 text-sm font-bold text-white transition hover:bg-yellow-400 hover:text-black sm:w-auto sm:px-6 sm:text-base"
                whileHover={{ scale: 1.05 }}
              whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                            <motion.div
                              className="relative"
                              animate={{ y: [0, -8, 0] }}
                              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                            </motion.div>
                onClick={() => {
                  navigate('/works');
                }}
              >
                <FiExternalLink /> My Projects
              </motion.button>
            </motion.div>

            <motion.div className="flex justify-center gap-4 md:justify-start" variants={item}>
              {[
                { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/mridul360' },
                { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mridul-hasan-mh1207' },
                { icon: <FaXTwitter />, label: 'Twitter', url: 'https://twitter.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-300 transition hover:-translate-y-1 hover:text-yellow-400"
                  whileHover={{ y: -3 }}
                  variants={item}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div className='mt-7 flex justify-center md:justify-start' variants={item}>
              <ContactButton />
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden justify-center md:flex"
            variants={image}
          >
            <div className="relative mx-auto max-w-[calc(100vw-3rem)]">
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
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-center text-sm text-gray-300 sm:block sm:bottom-8"
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
