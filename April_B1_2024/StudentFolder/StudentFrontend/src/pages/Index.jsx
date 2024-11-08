import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Add_students from '../components/Add_students'
import Display_students from '../components/Display_students'
function Index() {
  const [refreshRequired,setRefreshRequired]=useState('')
  const [studentId,setStudentsId]=useState('')
  return (
    <div>
      <h1>Index Component</h1>
      <Navbar></Navbar>
      <Add_students setRefreshRequired={setRefreshRequired} studentId={studentId}></Add_students>
      <Display_students refreshRequired={refreshRequired} setStudentsId={setStudentsId}></Display_students>
    </div>
  )
}

export default  Index
