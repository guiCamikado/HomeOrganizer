// JS classes and Archives
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import UpperNavbar from './Components/navbar/UpperNavbar';
import DefaultBackground from './Components/background/DefaultBackground';

//pages
import RegisterForm from './Components/pages/Register';

function App() {
  return (
    <>
      <Router>
        <UpperNavbar />
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
      <DefaultBackground></DefaultBackground>
    </>
  )
}

export default App
