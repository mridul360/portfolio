import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
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
        staggerChildren: 0.14,
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
      <motion.div
        className='pointer-events-none absolute -right-48 top-1/2 hidden h-[38rem] w-[38rem] -translate-y-1/2 rounded-full border border-yellow-300/10 md:block'
        initial={{ rotate: -18, scale: 0.92, opacity: 0 }}
        animate={{ rotate: 342, scale: 1, opacity: 1 }}
        transition={{ rotate: { duration: 28, repeat: Infinity, ease: 'linear' }, scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 1 } }}
      />
      <motion.div
        className='pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-yellow-300/5 to-transparent'
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '100%', opacity: [0, 1, 0] }}
        transition={{ duration: 2.4, delay: 0.4, ease: 'easeInOut' }}
      />

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
              <motion.span
                className='mt-3 block h-1 w-20 rounded-full bg-yellow-400 md:w-28'
                initial={{ width: 0, opacity: 0 }}
                animate={inView ? { width: '7rem', opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.h1>

            <motion.h2 className="mb-4 text-xl text-gray-300 sm:text-2xl md:text-3xl" variants={item}>
              Digital Designer & Developer
            </motion.h2>

            <motion.p className="mx-auto mb-6 max-w-lg text-gray-300 md:mx-0" variants={item}>
              I create beautiful, functional websites and applications focused on user experience.
            </motion.p>

            <motion.div className="mb-8 flex justify-center md:hidden" variants={image}>
              <motion.div
                className="relative"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              >
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
              </motion.div>
            </motion.div>

            <motion.div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:justify-start" variants={item}>
              <motion.button
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-300 sm:w-auto sm:px-6 sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <FiArrowDownCircle /> Download CV
              </motion.button>

              <motion.button
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-yellow-400 px-5 py-3 text-sm font-bold text-white transition hover:bg-yellow-400 hover:text-black sm:w-auto sm:px-6 sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={() => {
                  navigate('/works');
                }}
              >
                <FiExternalLink /> My Projects
              </motion.button>
            </motion.div>

            <motion.div className='mt-7 flex justify-center md:justify-start' variants={item}>
              <ContactButton />
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden justify-center md:flex"
            variants={image}
          >
            <motion.div
              className="relative mx-auto max-w-[calc(100vw-3rem)]"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
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
            </motion.div>
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
