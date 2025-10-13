// JS classes and Archives
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import UpperNavbar from './Components/organisms/UpperNavbar';
import DefaultBackground from './Components/atoms/DefaultBackground';

//pages
import RegisterCard from './Components/organisms/RegisterCard';

function App() {
  return (
    <div className='min-h-screen w-screen bg-gradient-to-r from-black via-gray-900 to-gray-700 text-white'>
      <Router>
        <UpperNavbar />
          {/* <RegisterCard></RegisterCard> */}
        <Routes>
          {/* <Route path="/" element={<></>} /> */}
          <Route path="/register" element={<RegisterCard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
