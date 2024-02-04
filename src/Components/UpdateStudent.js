import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';

const UpdateStudent = ({students,setStudents}) => {
  const navigate = useNavigate();
  
  const{id} = useParams();
  const editStudent = students[id]

  const[name,setName] = useState("")
  const[batch,setBatch] = useState("")
  const[gender,setGender] = useState("")
  const[Qualification,setQualification] = useState("")
   
  useEffect(()=>{
    if(editStudent){
      setName(editStudent.name)
      setBatch(editStudent.batch)
      setGender(editStudent.gender)
      setQualification(editStudent.Qualification)
    }
  },[editStudent])

  async function UpdateStudent(){
    const Updated={
      name:name,
      batch:batch,
      gender:gender,
      Qualification:Qualification
    }
    const result = await fetch(`https://649820699543ce0f49e1abe3.mockapi.io/users/${editStudent.id}`,{
     method:"PUT",
     body:JSON.stringify(Updated),
     headers:{"Content-Type":"application/json"}
    })
    const data1 = await result.json()
    if(data1){
        console.log(Updated)
        students[id] = Updated
        setStudents([...students]);
        navigate("/students")
    }
  }
  return (
  <div>
    <Button  onClick={() => navigate("/")}><DashboardIcon/></Button>
    <div className='look2'>
    <h1>Edit Student Details</h1>
    <h3>Here we can edit student details in database</h3>
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
        onClick={UpdateStudent}>
          Update Student</Button>
    </div>
</div> 
  )
}

export default UpdateStudent