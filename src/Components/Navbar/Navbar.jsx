import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FiBriefcase, FiHome, FiMail, FiMessageCircle, FiStar, FiUser, FiX } from 'react-icons/fi';
import logo from "../../assets/logo2.png";
import Container from '../Layout/Container';

const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const links = [
    { label: 'Home', to: '/', icon: FiHome },
    { label: 'About Me', to: '/about', icon: FiUser },
    { label: 'Recent Works', to: '/works', icon: FiBriefcase },
    { label: 'Reviews', to: '/reviews', icon: FiStar },
  ];

  return (
    <>
      <Link
        to='/'
        aria-label='Go to homepage'
        className='fixed left-3 top-3 z-9999 rounded-xl border border-white/10 bg-slate-950/70 p-1.5 shadow-lg lg:hidden'
      >
        <img className='h-10 w-auto object-contain sm:h-12' src={logo} alt='Mridul Hasan' />
      </Link>
      <nav className='fixed bottom-3 left-1/2 z-9999 w-[calc(100%-1.5rem)] -translate-x-1/2 lg:bottom-auto lg:left-0 lg:top-0 lg:w-full lg:translate-x-0' aria-label="Main navigation">
      <Container>
        <div 
          className='relative flex min-h-16 items-center justify-center rounded-2xl px-2 sm:px-6 lg:justify-between lg:rounded-b-xl lg:rounded-t-none lg:px-4 lg:backdrop-blur-md'
          style={{
            background: 'rgba(23, 23, 23, 0.4)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(23, 23, 23, 0.3)',
          }}
        >
          <div className='hidden lg:block'>
            <Link to="/" aria-label="Go to homepage">
              <img className='h-14 sm:h-16' src={logo} alt="Mridul Hasan" />
            </Link>
          </div>
          <div className='flex w-full items-center justify-around gap-1 lg:w-auto lg:justify-end lg:gap-8'>
          <ul className='flex min-w-0 flex-1 items-center justify-around gap-0 lg:flex-none lg:gap-8 lg:font-bold'>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  title={link.label}
                  className={({ isActive }) => `group relative flex min-w-12 flex-col items-center gap-1 rounded-xl px-2 py-2 text-white transition-colors hover:bg-white/10 hover:text-yellow-300 lg:block lg:min-w-0 lg:rounded-none lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-blue-400 ${isActive ? 'active' : ''}`}
                >
                  <link.icon className='text-xl lg:hidden' aria-hidden='true' />
                  <span className='whitespace-nowrap text-[11px] font-medium leading-none lg:text-lg lg:font-bold'>{link.label}</span>
                  <span className="absolute bottom-0 left-0 hidden h-0.5 w-0 bg-white transition-[width] duration-300 group-hover:w-full lg:block" />
                </NavLink>
              </li>
            ))}
          </ul>
          <div className='relative shrink-0 lg:block'>
            <button
              type='button'
              onClick={() => setIsContactOpen((open) => !open)}
              aria-expanded={isContactOpen}
              aria-label={isContactOpen ? 'Close contact information' : 'Open contact information'}
              className='group flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-2 text-white transition-colors hover:bg-white/10 hover:text-yellow-300 lg:min-w-0 lg:flex-row lg:gap-2 lg:rounded-full lg:border lg:border-yellow-300/70 lg:bg-yellow-400 lg:px-4 lg:py-2 lg:font-bold lg:text-black lg:hover:bg-yellow-300 lg:hover:text-black'
            >
              <span className='text-xl lg:text-base'>
                {isContactOpen ? <FiX /> : <FiMessageCircle />}
              </span>
              <span className='whitespace-nowrap text-[9px] font-medium leading-none sm:text-[11px] lg:text-sm lg:font-bold'>Contact Me</span>
            </button>

            <AnimatePresence>
              {isContactOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className='absolute bottom-full right-0 mb-3 w-[min(18rem,calc(100vw-2rem))] origin-bottom-right rounded-2xl border border-white/10 bg-slate-950/95 p-4 text-white shadow-2xl lg:bottom-auto lg:top-full lg:mb-0 lg:mt-3 lg:w-72 lg:origin-top-right lg:backdrop-blur-md'
                  role='dialog'
                  aria-label='Contact information'
                >
                  <p className='text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400'>Get in touch</p>
                  <a className='mt-2 block truncate text-sm text-gray-200 transition hover:text-yellow-300' href='mailto:mridulhasan222006@gmail.com'>
                    mridulhasan222006@gmail.com
                  </a>
                  <div className='mt-4 grid grid-cols-3 gap-2'>
                    <a className='flex items-center justify-center rounded-xl bg-white/5 p-3 text-lg text-gray-300 transition hover:bg-yellow-400 hover:text-black' href='https://github.com/mridul360' target='_blank' rel='noopener noreferrer' aria-label='GitHub' title='GitHub'><FaGithub /></a>
                    <a className='flex items-center justify-center rounded-xl bg-white/5 p-3 text-lg text-gray-300 transition hover:bg-yellow-400 hover:text-black' href='https://www.linkedin.com/in/mridul-hasan-mh1207' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' title='LinkedIn'><FaLinkedin /></a>
                    <a className='flex items-center justify-center rounded-xl bg-white/5 p-3 text-lg text-gray-300 transition hover:bg-yellow-400 hover:text-black' href='https://twitter.com' target='_blank' rel='noopener noreferrer' aria-label='Twitter' title='Twitter'><FaXTwitter /></a>
                  </div>
                  <Link className='mt-3 flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-bold text-black transition hover:bg-yellow-300' to='/hire' onClick={() => setIsContactOpen(false)}>
                    <FiMail /> Start a project
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          </div>
        </div>
      </Container>
      </nav>
    </>
  );
};

export default Navbar;
