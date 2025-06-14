import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Works from './Components/Works/Works'
import Aboutme from './Components/AboutMe/Aboutme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home />
    <Aboutme/>
    <Works/>
    </>
  )
}

export default App
