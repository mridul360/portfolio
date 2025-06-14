import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import logo from "../../assets/logo2.png";
import Container from '../Layout/Container';

const Navbar = () => {
  return (
    <div className='navbar'
    >
      <Container>
        <div className='flex justify-between bg-[#] items-center px-[20px] rounded-b-xl'
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

            <ul className='flex gap-[50px] text-textHead font-bold'>
              <li><a href="">Recent Work</a></li>
              <li><a href="">Reviews</a></li>
              <li><a href="">Hire Me</a></li>
              <li><a className='px-6 py-4 bg-[#346ea0] rounded-xl text-[]' href="">Contact Me</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
