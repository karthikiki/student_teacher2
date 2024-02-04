import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>This Page Doesn't Exists</h2>
      <Button onClick={()=>navigate("/")}>Back</Button>
      <Button  onClick={() => navigate("/")}><DashboardIcon/></Button>
    </div>
    
  )
}

export default NoPage