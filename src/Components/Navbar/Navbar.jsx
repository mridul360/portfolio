import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../../assets/logo2.png";
import Container from '../Layout/Container';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { label: 'About Me', to: '/about' },
    { label: 'Recent Works', to: '/works' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'Hire Me', to: '/hire' },
  ];

  return (
    <nav className='fixed w-full z-9999' aria-label="Main navigation">
      <Container>
        <div 
          className='relative flex min-h-16 items-center justify-between rounded-b-xl px-4 sm:px-6'
          style={{
            background: 'rgba(23, 23, 23, 0.4)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5.4px)',
            WebkitBackdropFilter: 'blur(5.4px)',
            border: '1px solid rgba(23, 23, 23, 0.3)',
          }}
        >
          <div>
            <Link to="/" aria-label="Go to homepage">
              <img className='h-14 sm:h-16' src={logo} alt="Mridul Hasan" />
            </Link>
          </div>
          <ul className='hidden items-center gap-8 font-bold lg:flex'>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={({ isActive }) => `relative group cursor-pointer text-white transition-colors hover:text-blue-400 ${isActive ? 'active' : ''}`}>
                  {link.label}
                  <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full" />
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className='rounded-md p-2 text-2xl text-white transition hover:bg-white/10 lg:hidden'
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <div id="mobile-navigation" className={`${isMenuOpen ? 'block' : 'hidden'} absolute left-0 top-full w-full rounded-b-xl border border-white/10 bg-slate-950/95 p-4 shadow-xl backdrop-blur lg:hidden`}>
            <ul className='space-y-1 font-bold'>
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => `block cursor-pointer rounded-md px-4 py-3 text-white transition-colors hover:bg-white/10 hover:text-blue-400 ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
