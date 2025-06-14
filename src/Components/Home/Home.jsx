import React from 'react'
import Navbar from '../Navbar/Navbar'
import Container from '../Layout/Container'
import bg2 from '../../assets/bg.png'
import me from '../../assets/me3.jpg'



const Home = () => {
  return (
    <div id='home' className='h-[100vh]  bg-no-repeat bg-cover bg-center  ' style={{ backgroundImage: `url(${bg2})` }}>
      <Container>

        <div className='p-105 relative'>


          <div className=''>

            <div className='absolute top-[400px] left-[152px] text-white'>
              <h2 className='text-[44px] leading-[54px] mb-6'>
                Mridul Hasan
              </h2>
              <p>Crafting Extraordinary Experiences Through Design</p>
            </div>
            <div className='absolute top-[200px] left-[852px]'>
              <img className=' h-[500px] w-[500px] rounded-[50%] border border-[#252525]' src={me} alt="" />
            </div>
            <div className='absolute top-[520px] left-[152px]'>
              <button className="relative px-10 py-4 bg-textHead text-black font-bold border-2  border-black rounded-[30px] overflow-hidden group transition-all duration-500 hover:text-white">
              <span className="relative z-10">Download CV</span>
              <span className="absolute inset-0 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">↓</span> </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
