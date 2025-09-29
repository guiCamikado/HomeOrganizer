// JS classes and Archives
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
  // navbar
  import UpperNavbar from './Components/navbar/UpperNavbar';

  //pages
  import LoginForm from './Components/pages/Login';
  import RegisterForm from './Components/pages/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <UpperNavbar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
