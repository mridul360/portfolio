import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import logo from "../../assets/logo2.png";
import Container from '../Layout/Container';

const Navbar = () => {
  return (
    <div className='fixed w-full z-9999'
    >
      <Container>
        <div className='flex justify-between  items-center px-[30px] rounded-b-xl'
          style={{
            background: 'rgba(23, 23, 23, 0.4)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5.4px)',
            WebkitBackdropFilter: 'blur(5.4px)',
            border: '1px solid rgba(23, 23, 23, 0.3)',
          }}>
          <div>
            <a href="#home"><img  className='h-[80px]' src={logo} alt="" /></a>
          </div>
          <div>

            <ul className='flex gap-[50px]  font-bold items-center'>
              <li> <a href="#about" className="relative group text-white hover:text-black">About Me
      <span className="absolute left-1/2 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full group-hover:left-0 transition-all duration-400"></span></a></li>
              <li> <a href="#works" className="relative group text-white hover:text-black">Recent Works
      <span className="absolute left-1/2 -bottom-1 h-0.5 bg-white  w-0 group-hover:w-full group-hover:left-0 transition-all duration-400"></span></a></li>
              <li> <a href="#" className="relative group text-white hover:text-black">Reviews
      <span className="absolute left-1/2 -bottom-1 h-0.5 bg-white  w-0 group-hover:w-full group-hover:left-0 transition-all duration-400"></span></a></li>
      <li> <a href="#" className="relative group text-white hover:text-black">Hire Me
      <span className="absolute left-1/2 -bottom-1 h-0.5 bg-white  w-0 group-hover:w-full group-hover:left-0 transition-all duration-400"></span></a></li>
              
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
