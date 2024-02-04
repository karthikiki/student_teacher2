import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';

const TeacherDashboard = () => {
  const navigate = useNavigate();
  return (
<div>
<Button  onClick={() => navigate("/")}><DashboardIcon/></Button>
<div className='look2'>
<h1>Teacher Dashboard</h1>
</div>
{/* <div className='nav_bar'> */}
<div className='btn_das'>
        <Button onClick={()=>navigate("/teachers")}>Teacher's List</Button>
        <Button onClick={()=>navigate("/addteacher")}>Add Teacher</Button>
      </div>
</div>
    
   
  )
}

export default TeacherDashboard