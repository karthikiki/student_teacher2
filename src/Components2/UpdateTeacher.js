import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

const UpdateTeacher = ({teachers,setTeachers}) => {
  const navigate = useNavigate();

  const{id} = useParams();
  const editTeacher = teachers[id]

  const [name,setName] = useState("");
  const [subject,setSubject] = useState("");
  const [contact,setContact] = useState("");
  const [performance,setPerformance] = useState("");

  useEffect(()=>{
    setName(editTeacher.name)
    setSubject(editTeacher.subject)
    setContact(editTeacher.contact)
    setPerformance(editTeacher.performance)
  },[editTeacher])

 async function updateTeacher(){
  const updatedData={
    name:name,
    subject:subject,
    contact:contact,
    performance:performance,
  }

  const response1 = await fetch(`https://64987c339543ce0f49e2143a.mockapi.io/teacher/${editTeacher.id}`,{
    method:"PUT",
    body:JSON.stringify(updatedData),
    headers:{"Content-Type":"application/json"}
  })
  const data1 =await response1.json()
    if(data1){
      console.log(updatedData)
      teachers[id] = updatedData
      setTeachers([...teachers])
      navigate("/teachers")
    }
 }
  return (
    
    <div>
      <Button  onClick={() => navigate("/")}><DashboardIcon/></Button>
      <div className='look2'>
         <h1>Teachers</h1>
         <h3>{`Edit Teacher - (${name})`}</h3>
      </div>
      <div className='text-field'>
            <TextField
            id='outlined-basic'
            label="Name"
            fullWidth sx={{m:1}}
            varient="outlined"
            type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
             <TextField
            id='outlined-basic'
            label="Subject"
            fullWidth sx={{m:1}}
            varient="outlined"
            type="text"
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}/>
             <TextField
            id='outlined-basic'
            label="Contact"
            fullWidth sx={{m:1}}
            varient="outlined"
            type="text"
                value={contact}
                onChange={(e)=>setContact(e.target.value)}/>
             <TextField
            id='outlined-basic'
            label="Performance"
            fullWidth sx={{m:1}}
            varient="outlined"
            type="text"
                value={performance}
                onChange={(e)=>setPerformance(e.target.value)}/>    

                <br></br>
                <Button onClick={updateTeacher}>Update Teacher</Button>        
        </div>
      </div>  
  )
}

export default UpdateTeacher