import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import DashboardIcon from '@mui/icons-material/Dashboard';

const Teachers = ({teachers,setTeachers}) => {
  const navigate = useNavigate();
  const deleteTeachers = async(teachId)=>{
    const response1 = await fetch(`https://64987c339543ce0f49e2143a.mockapi.io/teacher/${teachId}`,{
       method:"DELETE"
    });
    const data1 = await response1.json()
    if(data1){
       const remainingTeachers = teachers.filter((teach,idx)=> teach.id !== teachId)
       setTeachers(remainingTeachers)
    }
  } 
  return (
   <div>
      <Button  onClick={() => navigate("/")}><DashboardIcon/></Button>
      <div className='look2'>
        <h1>Teacher's List</h1>
        <h3>Here we can view taecher's data</h3>
      </div>
    
      <div className='card-container'>
        {teachers&&teachers.map((teach,idx)=>(
        <Card sx={{maxWidth:400}} key={idx}>
             <CardContent>
               <Typography gutterBottom varient="h2" component="div">
                   <b>{teach.name}</b>
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Subject: {teach.subject}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Contact: {teach.contact}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                   Performance: {teach.performance}
               </Typography>
            </CardContent> 
            <CardActions className='button' >
               <Button   
                  varient="outlined" 
                  startIcon={<EditIcon/>}
                  onClick={()=>navigate(`/edit_teacher/${idx}`)}>
                  Edit
               </Button>
               <Button varient="outlined" startIcon={<DeleteIcon
          />} onClick={()=>deleteTeachers(teach.id)}>Delete</Button>
            </CardActions>
        </Card>
        ))}
     </div>
   </div>     
  )
}

export default Teachers