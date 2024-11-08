import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About'
import Nav from './Nav'
import Banner from './Banner'
import Footer from './Footer'
import Profile from './Profile'
import Skills from './Skills'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Skills></Skills>
     <Nav></Nav>
     <h1>Introduction To React</h1>
     <About></About>
     <Banner></Banner>
     <Footer></Footer>
     <Profile></Profile>
    </>
  )
}

export default App
