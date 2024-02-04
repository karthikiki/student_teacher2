import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import StudentDashboard from './Components/StudentDashboard'
import Students from './Components/Students'
import AddStudents from './Components/AddStudents'
import UpdateStudent from './Components/UpdateStudent'
import NoPage from './Components/NoPage'
import TeacherDashboard from './Components2/TeacherDashboard'
import Teachers from './Components2/Teachers'
import AddTeacher from './Components2/AddTeacher';
import UpdateTeacher from './Components2/UpdateTeacher'


import { useEffect, useState } from 'react';

function App() {

  const [students, setStudents] = useState([]);
  const [teachers,setTeachers] = useState([]);

  useEffect(()=>{
    const result = async ()=>{
      try {
        const response = await fetch('https://649820699543ce0f49e1abe3.mockapi.io/users',{
          method:"GET"
        });
        const data = await response.json();
        console.log(data);
        setStudents([...data])

        //teacher's data
        const response1 = await fetch('https://64987c339543ce0f49e2143a.mockapi.io/teacher',{
          method:"GET",
        })
        const data1 = await response1.json();
        console.log(data1)
        setTeachers([...data1])
      } catch (error) {
        console.log('Error fetching data:', error.message)
      }
    }
    result();
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard
         students={students}
         setStudents={setStudents}/>}/>
        <Route path='/studentDashboard' element={<StudentDashboard
        students={students}
        setStudents={setStudents}/>}/>
        <Route path='/students' element={<Students
         students={students}
         setStudents={setStudents}/>}/>
        <Route path='/add' element={<AddStudents
         students={students}
         setStudents={setStudents}/>}/>
        <Route path='/edit/:id' element={<UpdateStudent
         students={students}
         setStudents={setStudents}/>}/>
 
        <Route path='/teacherDashboard' element={<TeacherDashboard
        teachers={teachers}
        setTeachers={setTeachers}/>}/>

        <Route path='/teachers' element={<Teachers
        teachers={teachers}
        setTeachers={setTeachers}/>}/>

        <Route path='/addteacher' element={<AddTeacher
        teachers={teachers}
        setTeachers={setTeachers}/>}/>

        <Route path='/edit_teacher/:id' element={<UpdateTeacher
        teachers={teachers}
        setTeachers={setTeachers}/>}/>

        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
