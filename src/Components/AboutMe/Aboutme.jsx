import React from 'react'
import bg2 from '../../assets/bgMe.jpeg'
import Container from '../Layout/Container'

const Aboutme = () => {
  return (
    <div id='about'  className='relative h-[100vh]' >
        <div className='  bg-no-repeat bg-cover bg-center filter blur-sm ' ></div>
      <div className='absolute inset-0 bg-black/90 backdrop-blur-[1px]'>
        <Container>
        <div>
            <div>
                <h2></h2>
                <p></p>
            </div>
            <div></div>
            <div></div>
        </div>
      </Container>
      </div>
    </div>
  )
}

export default Aboutme
