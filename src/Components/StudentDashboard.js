import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';

const StudentDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button  onClick={() => navigate("/")}><DashboardIcon/></Button>
        <div className='look2'>
           <h1>Student Dashboard</h1>
        </div>
        <div className='btn_das'>
           <Button onClick={()=>navigate("/students")}>Student's List</Button>
            <Button onClick={()=>navigate("/add")}>Add Student</Button>
        </div>
            
    </div>  
  )
}

export default StudentDashboard