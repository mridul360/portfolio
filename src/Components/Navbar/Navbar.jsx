import { NavLink, Link } from 'react-router-dom';
import { FiBriefcase, FiHome, FiMail, FiStar, FiUser } from 'react-icons/fi';
import logo from "../../assets/logo2.png";
import Container from '../Layout/Container';

const Navbar = () => {
  const links = [
    { label: 'Home', to: '/', icon: FiHome },
    { label: 'About Me', to: '/about', icon: FiUser },
    { label: 'Recent Works', to: '/works', icon: FiBriefcase },
    { label: 'Reviews', to: '/reviews', icon: FiStar },
    { label: 'Hire Me', to: '/hire', icon: FiMail },
  ];

  return (
    <nav className='fixed bottom-3 left-1/2 z-9999 w-[calc(100%-1.5rem)] -translate-x-1/2 lg:bottom-auto lg:left-0 lg:top-0 lg:w-full lg:translate-x-0' aria-label="Main navigation">
      <Container>
        <div 
          className='relative flex min-h-16 items-center justify-center rounded-2xl px-2 sm:px-6 lg:justify-between lg:rounded-b-xl lg:rounded-t-none lg:px-4'
          style={{
            background: 'rgba(23, 23, 23, 0.4)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5.4px)',
            WebkitBackdropFilter: 'blur(5.4px)',
            border: '1px solid rgba(23, 23, 23, 0.3)',
          }}
        >
          <div className='hidden lg:block'>
            <Link to="/" aria-label="Go to homepage">
              <img className='h-14 sm:h-16' src={logo} alt="Mridul Hasan" />
            </Link>
          </div>
          <ul className='flex w-full items-center justify-around gap-1 lg:w-auto lg:justify-end lg:gap-8 lg:font-bold'>
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
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
