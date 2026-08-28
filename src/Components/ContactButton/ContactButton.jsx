import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FiMessageCircle, FiX } from 'react-icons/fi';

const contactLinks = [
  { label: 'GitHub', icon: <FaGithub />, href: 'https://github.com/mridul360' },
  { label: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/mridul-hasan-mh1207' },
  { label: 'Twitter', icon: <FaXTwitter />, href: 'https://twitter.com' },
];

const ContactButton = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <motion.div layout className='relative z-20 flex flex-col items-start justify-start'>
      <motion.button
        type='button'
        onClick={() => setIsContactOpen((open) => !open)}
        aria-expanded={isContactOpen}
        aria-label={isContactOpen ? 'Close contact links' : 'Open contact links'}
        whileTap={{ scale: 0.97 }}
        className={`flex min-h-12 shrink-0 items-center rounded-full border border-yellow-300/70 bg-yellow-400 text-sm font-bold text-black shadow-lg shadow-yellow-400/20 transition-[padding,width] duration-300 ${isContactOpen ? 'w-12 justify-center p-0' : 'gap-2 px-4 py-3'}`}
      >
        <motion.span
          animate={{ rotate: isContactOpen ? 90 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className='flex'
        >
          {isContactOpen ? <FiX /> : <FiMessageCircle />}
        </motion.span>
        {!isContactOpen && 'Contact Me'}
      </motion.button>

      <AnimatePresence initial={false}>
        {isContactOpen && (
          <motion.div
            key='contact-links'
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 18 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            layout
            className='relative mt-2 w-[calc(100vw-2rem)] max-w-sm min-w-0 lg:absolute lg:left-full lg:top-0 lg:ml-2 lg:mt-0 lg:w-80'
            aria-label='Contact links'
          >
            <div className='grid min-w-0 flex-1 grid-cols-2 gap-1.5 rounded-2xl border border-white/10 bg-slate-950/95 p-1.5 shadow-xl backdrop-blur-sm sm:gap-2 sm:p-2'>
              {contactLinks.map((contactLink, index) => (
                <motion.a
                  key={contactLink.label}
                  href={contactLink.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={contactLink.label}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.16 }}
                  whileHover={{ scale: 1.02 }}
                  className='flex min-h-11 min-w-0 items-center gap-2 rounded-xl px-2 py-2 text-xs font-medium text-gray-300 transition-colors hover:bg-yellow-400 hover:text-black sm:px-3 sm:text-sm'
                >
                  <span className='text-lg'>{contactLink.icon}</span>
                  {contactLink.label}
                </motion.a>
              ))}
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link
                  to='/hire'
                  onClick={() => setIsContactOpen(false)}
                  aria-label='Open project form'
                  className='flex min-h-11 min-w-0 items-center gap-2 rounded-xl px-2 py-2 text-xs font-medium text-gray-300 transition-colors hover:bg-yellow-400 hover:text-black sm:px-3 sm:text-sm'
                >
                  <span className='text-lg'><FiMessageCircle /></span>
                  Start a project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactButton;
