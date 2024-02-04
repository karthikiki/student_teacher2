import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Base = ({title,description,children}) => {
    const navigate = useNavigate();
    return (
    <div className='main-component base-component'>
        <div className='sidebar'>
        <Button onClick={()=> navigate("/")}>Home</Button>
        <Button onClick={()=> navigate("/studentDashboard")}>Student Dashboard</Button>
        <Button onClick={()=> navigate("/teacherDashboard")}>Teacher Dashboard</Button>
        </div>
        <header>
         <main className='main-segment'>
            <Typography variant='h4' component="h2">{title}</Typography>
            <h2>{description}</h2>
                <div className='gap'>
                   {children}
                </div>
         </main>
        </header>
    </div>
  )
}

export default Base