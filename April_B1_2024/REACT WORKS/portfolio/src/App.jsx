import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbarcomp from './Navbarcomp'
import Header from './Header/Header'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbarcomp></Navbarcomp>
        <Header></Header>
        </div>
    </>
  )
}

export default App
