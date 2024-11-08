import React from 'react'
import Navbar from '../components/Navbar'
import Add_employees from '../components/Add_employees'
import Display_employees from '../components/Display_employees'


function Index() {
  const [refreshRequired,setRefreshRequired]=useState('')
  const [employeeId,setEmployeeId]=useState('')
  return (
    <div>
        <h1>Index Component</h1>
      <Navbar></Navbar>
      <Add_employees setRefreshRequired={setRefreshRequired} employeeId={employeeId}></Add_employees>
      <Display_employees refreshRequired={refreshRequired}setEmployeeId={setEmployeeId}></Display_employees>
    </div>
  )
}

export default Index
