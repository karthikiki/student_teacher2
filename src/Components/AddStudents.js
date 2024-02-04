import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';

const AddStudents = ({students,setStudents}) => {
  const navigate = useNavigate();
  const[name,setName] = useState("")
  const[batch,setBatch] = useState("")
  const[gender,setGender] = useState("")
  const[Qualification,setQualification] = useState("")
  
  const createStudent = async ()=>{
    const newStudent={
      name : name,
      batch : batch,
      gender : gender,
      Qualification : Qualification,
    }

    const result = await fetch("https://649820699543ce0f49e1abe3.mockapi.io/users",{
      method:"POST",
      body:JSON.stringify(newStudent),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await result.json()
     setStudents([...students,data])
     navigate("/students")
  }
  
  return (
  <div>  
    <Button  onClick={() => navigate("/")}><DashboardIcon/></Button>
    <div className='look2'>
        <h1>Create New Student Data</h1>
        <h3>This is a page to add students in the database.</h3>
    </div>
    <div className='text-field'>
     <TextField 
     id="outlined-basic" 
     label="Name" 
     fullWidth sx={{m:1 }}
     variant="outlined"
     type="text" 
        value = {name} 
        onChange={(e)=>setName(e.target.value)} />
     <TextField 
     id="outlined-basic" 
     label="Batch" 
     fullWidth sx={{m:1 }}
     variant="outlined"
     type="text" 
        value = {batch} 
        onChange={(e)=>setBatch(e.target.value)}/>
     <TextField 
     id="outlined-basic" 
     label="Gender" 
     fullWidth sx={{m:1 }}
     variant="outlined" 
     type="text" 
        value = {gender} onChange={(e)=>setGender(e.target.value)}/>
     <TextField 
     id="outlined-basic" 
     label="Qualification" 
     fullWidth sx={{m:1 }}
     variant="outlined" 
     type="text" 
        value = {Qualification} onChange={(e)=>setQualification(e.target.value)}/>
        
        <br></br>
        <Button 
        variant="outlined" 
        onClick={createStudent}>
          Add Student</Button>
    </div>
  </div>
  )
}

export default AddStudents