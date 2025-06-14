import React from 'react'
import Navbar from '../Navbar/Navbar'
import Container from '../Layout/Container'
import bg2 from '../../assets/background.jpg'


const Home = () => {
  return (
    <div className='h-[100vh]  bg-no-repeat bg-cover bg-center 'style={{ backgroundImage: `url(${bg2})` }}>
       <Navbar />
      <Container>
        
        <div className='p-105'>
           
            
          <div>
            <div>

            </div>
            <div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
