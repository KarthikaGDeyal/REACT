import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbarcomp from './Navbarcomp'
import Home from './Home'
import Aboutme from './Aboutme'
import Skills from './Skills'
import Qualification from './Qualification'

import Contact from './Contact'




function App() {
  const user={
    "name":"Karthika G Deyal",
    "degree":"B.Tech",
    "phone":7902871374,
    "address":"Puthoor House,Kavumbhagom PO,Thiruvalla,Pathanamthitta",
    "birthday":"22-03-1999",
    "experience":"Fresher",
    "email":"karthikadeyal1999@gmail.com",
    "freelance":"Available"
  }

  const skillset=[
    {"name":"HTML","percentage":"95%"},
    {"name":"Django","percentage":"100%"},
    {"name":"CSS","percentage":"95%"},
    {"name":"Bootstrap","percentage":"95%"},
    {"name":"JS","percentage":"95%"},
    {"name":"React","percentage":"95%"},
  ]
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbarcomp></Navbarcomp>
      <Home></Home>
      <Aboutme user={user}></Aboutme>
      <Skills skillset={skillset}></Skills>
      <Qualification></Qualification>
    
      <Contact></Contact>
      
    </div>
    </>
  )
}

export default App
