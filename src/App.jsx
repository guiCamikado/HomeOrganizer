import { useState } from 'react';
import './App.css';
import LoginForm from './Components/pages/Login';
import UpperNavbar from './Components/navbar/UpperNavbar';
import RegisterForm from './Components/pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

      {/* <UpperNavbar></UpperNavbar>
      <RegisterForm></RegisterForm>
      <LoginForm></LoginForm> */}
    </>
  )
}

export default App
