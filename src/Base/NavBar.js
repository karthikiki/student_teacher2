import { AppBar, Button,  Toolbar } from '@mui/material';
import React from 'react'
import { Link }from 'react-router-dom'


const NavBar = () => {

  return (
    <AppBar position="static">
    <Toolbar>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/studentDashboard">
        Student Dashboard
      </Button>
      <Button color="inherit" component={Link} to="/teacherDashboard">
       Teacher Dashboard
      </Button>
    </Toolbar>
  </AppBar>
  )
}

export default NavBar