import React from 'react'
import NavBar from '../Base/NavBar'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const backgroundStyle={
    backgroundImage: 'url("")',
    height:"100vh", 
  }
  return (
    <div style={backgroundStyle}>
    <NavBar/>
  <div className='look1'>
   <div>
   <h1>Welcome to the Student & Teacher Management!</h1>
   </div>
    <div >
      <Button  onClick={() => navigate("/studentDashboard")}>Student Dashboard</Button>
      <Button  onClick={() => navigate("/teacherDashboard")}>Teacher Dashboard</Button>
    </div>
  </div>
  </div>  
  )
}

export default Dashboard