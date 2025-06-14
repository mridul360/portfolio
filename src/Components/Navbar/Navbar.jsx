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
        <div className='flex justify-between  items-center px-[20px] rounded-b-xl'
          style={{
            background: 'rgba(23, 23, 23, 0.4)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5.4px)',
            WebkitBackdropFilter: 'blur(5.4px)',
            border: '1px solid rgba(23, 23, 23, 0.3)',
          }}>
          <div>
            <img className='h-[80px]' src={logo} alt="" />
          </div>
          <div>

            <ul className='flex gap-[50px] text-white font-bold'>
              <li> <a href="#" className="relative group text-gray-700 hover:text-black">About Me
      <span className="absolute left-1/2 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span></a></li>
              <li> <a href="#" className="relative group text-gray-700 hover:text-black">Reviews
      <span className="absolute left-1/2 -bottom-1 h-0.5 bg-white  w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span></a></li>
              <li> <a href="#" className="relative group text-gray-700 hover:text-black">Hire Me
      <span className="absolute left-1/2 -bottom-1 h-0.5 bg-white  w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span></a></li>
              <li><a className='px-6 py-4 bg-[#346ea0] rounded-xl text-black' href="">Contact Me</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
