import React from 'react'
import bg2 from '../../assets/bgMe.jpeg'
import me2 from '../../assets/me5.jpg'
import Container from '../Layout/Container'
import { FaBootstrap, FaCss3Alt, FaDiscord, FaGithub, FaHtml5, FaJsSquare, FaLinkedin, FaReact } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiTailwindcss } from "react-icons/si";

const Aboutme = () => {
  return (
    <div id='about'  className='relative h-[100vh]' >
        <div className='  bg-no-repeat bg-cover bg-center filter blur-sm ' ></div>
      <div className='absolute inset-0 bg-black/90 backdrop-blur-[1px]'>
        <Container>
        <div className='flex items-center relative '>
            <div className='mt-80 w-[50%] text-white'>
                <h2 className='text-[44px] leading-[54px] mb-6 '>About Me</h2>
                <p>i am a passionate Frontend Developer with Entry Level of experience building responsive, user-friendly web applications. Skilled in HTML5, CSS3, JavaScript and React.js with a strong focus on performance, accessibility, and modern UI/UX principles. Proven ability to collaborate with cross-functional teams to deliver high-quality digital experiences. Dedicated to writing clean, maintainable code and staying updated with the latest frontend technologies.</p>
            </div>
            <div className=' absolute top-[250px] left-[900px]'>
                <img className='h-[300px] w-[300px]  rounded-[50%]' src={me2} alt="" />
            </div>
        </div>
      </Container>
      
            <div className='bg-black rounded-br-2xl rounded-tr-2xl px-5 py-5 font-bold text-4xl text-white py6 absolute top-[300px] left-0 '>
                <div className='mb-5'>
                    <a href=""><FaGithub /></a>
                </div>
                <div className='mb-5'><a  href=""><FaLinkedin /></a></div>
                <div className='mb-5'><a  href=""><FaXTwitter /></a></div>
                <div className=''><a  href=""><FaDiscord/></a></div>
            </div>
            <div className='absolute top-[700px] left-[30%] flex gap-[40px] items-center'>
                <h2 className='text-[44px] leading-[54px] text-white'>Worked With <span>:</span></h2>
                <div className='bg-black rounded-2xl px-5 py-5 font-bold text-4xl text-white py6  flex'>
                <div className='mr-5'>
                    <a href=""><FaHtml5 /></a>
                </div>
                <div className='mr-5'><a  href=""><FaCss3Alt /></a></div>
                <div className='mr-5'><a  href=""><FaJsSquare /></a></div>
                <div className='mr-5'><a  href=""><FaBootstrap /></a></div>
                <div className='mr-5'><a  href=""><SiTailwindcss /></a></div>
                <div className=''><a  href=""><FaReact /></a></div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Aboutme
