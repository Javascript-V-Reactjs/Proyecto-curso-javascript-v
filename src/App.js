import './App.css';
import React, { useState, useEffect } from 'react';
import List from './components/List'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';

function App () {
  const [students, setStudents] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [idInput, setIdInput] = useState()
  const [nameInput, setNameInput] = useState('')
  const [Alert, setAlert] = useState(false)

  useEffect(()=>{
    fetchStudents()
  }, [Alert])

  const fetchStudents = () => {
    fetch('https://students.hasura.app/api/rest/students', {
      method: 'GET',
      headers: {
        'x-hasura-admin-secret': '733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq'
      }
    }).then(response => response.json())
      .then(result => {
        setIsLoaded(true)
        setStudents(result.students)
    })
  }

  const insertStudent = async (id, name) => {
    return fetch('https://students.hasura.app/api/rest/student', {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': '733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq'
      },
      body: JSON.stringify({"id": id, "name": name})
  }).then(response => response.json())
   .catch(error => console.log(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setNameInput(" ")
    setIdInput(" ")
    for (let i = 0; i < students.length; i++) {
      const validId = students[i].id;
      if(validId === Number(idInput)){
        return alert("EL id está repetido");
      } 
    }
    insertStudent(idInput, nameInput).then(() => setAlert(true))
  }

  return (
      <Layout>
        <Navbar/>

        <form onSubmit={handleSubmit}>
          <input value={idInput} type="number" name="id" placeholder="id" onChange={e => setIdInput(e.target.value)} required></input>
          <input value={nameInput} type="text" name="name" placeholder="name" onChange={e => setNameInput(e.target.value)} required></input>
          <button type="submit" value="submit">Add student</button>
        </form>
        {Alert && <h2>Nuevo estudiante guardado</h2>}
        
        {!isLoaded ? <p>loading...</p> : <List students={students} hoverable/>}
        <Footer />
      </Layout>
    );
  }

export default App;
