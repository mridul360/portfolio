import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import logo  from "../../assets/logo2.png";
import Container from '../Layout/Container';

const Navbar = () => {
  return (
    <div >
        <Container>
            <div className='flex justify-between bg-black items-center px-[70px] rounded-b-xl'>
      <div>
        <img className='h-[80px]'  src={logo} alt="" />
      </div>
      <div>
        <ul className='flex gap-[50px] text-white'>
            <li><a href="">Recent Work</a></li>
            <li><a href="">About Me</a></li>
            <li><a href="">Hire Me</a></li>
            <li><a href="">Reviews</a></li>
        </ul>
      </div>
      <div className='text-white flex gap-[20px]'>
        <FaLinkedin className='text-2xl ' />
        <FaUpwork  className='text-2xl ' />
      </div>
    </div>
        </Container>
    </div>
  )
}

export default Navbar
