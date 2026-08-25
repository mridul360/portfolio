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
    <motion.div className='relative z-20 flex flex-col items-center lg:items-start'>
      <motion.button
        type='button'
        onClick={() => setIsContactOpen((open) => !open)}
        aria-expanded={isContactOpen}
        aria-label={isContactOpen ? 'Close contact links' : 'Open contact links'}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className='flex min-h-12 items-center gap-2 rounded-full border border-yellow-300/70 bg-yellow-400 px-4 py-3 text-sm font-bold text-black shadow-lg shadow-yellow-400/20'
      >
        <motion.span animate={{ rotate: isContactOpen ? 90 : 0 }} transition={{ duration: 0.25 }}>
          {isContactOpen ? <FiX /> : <FiMessageCircle />}
        </motion.span>
        Contact Me
      </motion.button>
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scaleY: 0.6 }}
            animate={{ opacity: 1, height: 'auto', scaleY: 1 }}
            exit={{ opacity: 0, height: 0, scaleY: 0.6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            style={{ transformOrigin: 'top center' }}
            className='w-full max-w-sm overflow-hidden'
            aria-label='Contact links'
          >
            <div className='mt-2 grid grid-cols-1 gap-2 rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-2xl backdrop-blur-xl min-[380px]:grid-cols-2'>
              {contactLinks.map((contactLink, index) => (
                <motion.a
                  key={contactLink.label}
                  href={contactLink.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={contactLink.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className='flex min-w-0 items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-yellow-400 hover:text-black'
                >
                  <span className='text-lg'>{contactLink.icon}</span>
                  {contactLink.label}
                </motion.a>
              ))}
              <motion.div whileHover={{ y: -3, scale: 1.03 }}>
                <Link
                  to='/hire'
                  onClick={() => setIsContactOpen(false)}
                  aria-label='Open project form'
                  className='flex min-w-0 items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-yellow-400 hover:text-black'
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
