import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import DashboardIcon from '@mui/icons-material/Dashboard';

const Students = ({students,setStudents}) => {
  const navigate = useNavigate();

   //Delete
 const deleteStudent = async(studId)=>{
  const response = await fetch(`https://649820699543ce0f49e1abe3.mockapi.io/users/${studId}`,{
    method:"DELETE"
  })
  const data = await response.json()
  if(data){
   const remainStudents = students.filter((stud)=>stud.id !== studId)
   setStudents(remainStudents)
  }
 }
  return (
    <div >
      <Button  onClick={() => navigate("/")}><DashboardIcon/></Button>
     <div className='look2'>
     <h1>Student's List</h1>
      <h3>Here we can View Students Data</h3>
     </div>
    <div className='card-container'>
       {students&&students.map((stud,idx)=>(

         <Card sx={{ maxWidth: 375 }} key={idx} >
           <CardContent>
               <Typography gutterBottom variant="h5" component="div">
               <b><i>{stud.name}</i></b>
               </Typography>
               <Typography variant="body2" color="text.secondary">
                Batch: {stud.batch}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                Gender: {stud.gender}
               </Typography>
              <Typography variant="body2" color="text.secondary">
               Qualification: {stud.Qualification}
              </Typography>
          </CardContent>
        <div>
          <CardActions className='button'>
          <Button 
           varient="outlined" 
           startIcon={<EditIcon/>}
           onClick={()=>navigate(`/edit/${idx}`)}> 
            Edit
            </Button>
          <Button  
          varient="outlined" 
          startIcon={<DeleteIcon/>} 
          onClick={()=>deleteStudent(stud.id)}
          >
            Delete
            </Button>
        </CardActions>
        </div>
      </Card>
        ))}  
    </div> 
    </div>
  )
}

export default Students