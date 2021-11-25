import './App.css';
import React from 'react';
import StudentList from './routes/StudentList'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';
import StudentForm from './routes/StudentForm';
import { Routes, Route } from 'react-router-dom'
import Student from './routes/Student';
import AlertTag from './components/AlertTag';
import useAlert from './hooks/useAlert';

export default function App() {
  const { type, message, isOpened } = useAlert();
  return (
    <Layout>
      <Navbar />
      <AlertTag isOpened={isOpened} type={type} message={message} />
      <Routes>
        <Route path="/" element={<StudentList hoverable />} />
        <Route path="/addStudent" element={<StudentForm />} />
        <Route path="/student/:StudentId" element={<Student />} />
      </Routes>
    </Layout>
      )}
      

export default App;
