// JS classes and Archives
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import UpperNavbar from './Components/navbar/UpperNavbar';
import DefaultBackground from './Components/background/DefaultBackground';

//pages
import RegisterCard from './Components/registerCard/RegisterCard';

function App() {
  return (
    <div className='min-h-screen w-screen bg-gradient-to-r from-black via-gray-900 to-gray-700'>
      <Router>
        <UpperNavbar />
          {/* <RegisterCard></RegisterCard> */}
        <Routes>
          <Route path="/register" element={<RegisterCard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
