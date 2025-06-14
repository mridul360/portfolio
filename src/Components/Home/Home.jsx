import React from 'react'
import Navbar from '../Navbar/Navbar'
import Container from '../Layout/Container'
import bg2 from '../../assets/bg.png'
import me from '../../assets/me3.jpg'



const Home = () => {
  return (
    <div className='h-[100vh]  bg-no-repeat bg-cover bg-center  'style={{ backgroundImage: `url(${bg2})` }}>
      <Container>
        
        <div className='p-105 relative'>
           
            
          <div>
            <div>
            </div>
            <div className='absolute top-[200px] left-[902px]'>
              <img className=' h-[500px] w-[500px] rounded-[50%] border border-[#252525]' src={me} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
