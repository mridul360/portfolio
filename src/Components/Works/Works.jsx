import React from 'react'
import Container from '../Layout/Container'
import agenc from '../../assets/agenc.jpg'


const Works = () => {
  return (
    <div id='works' className='h-[100vh] bg-[#14213d]'>
      <Container>
        <div className='flex justify-between items-center p-30'>
            <div className='px-5 py-5 rounded-2xl 'style={{
            background: 'rgba(23, 23, 23, 0.4)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5.4px)',
            WebkitBackdropFilter: 'blur(5.4px)',
            border: '1px solid rgba(23, 23, 23, 0.3)',
          }}>
            <div><img className='h-[150px]' src={agenc} alt="" /></div>
            <div className='text-center mt-3'>
                <h2 className='text-[24px] leading-[24px] mb-6'>Agenc</h2>
                <p>Made with Html,Css and Js</p>
                <a href=""><button className='w-full bg-amber-100 rounded-3xl py-2 mt-3 cursor-pointer'>Code</button></a>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  )
}

export default Works
