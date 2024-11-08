import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import About from './About'
import Banner from './Banner'
import Profile from './Profile'
import Skills from './Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <h1>Introduction to React</h1>
      <About></About>
      <Banner></Banner>
      <Profile></Profile>
      <Skills></Skills>
    </>
  )
}

export default App
