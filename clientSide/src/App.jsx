import './App.css'
import {Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from './pages/singUpPage.jsx';
import LoginPage from  "./pages/LoginPage.jsx";
import NavBar from './components/navbar.jsx';

function App() {

  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Navigate to="/signup" />} />
        <Route path='login' element={<LoginPage/>}/>
        <Route path='signup' element={<SignUpPage/>}/>
      </Routes>
    </>
  )
}

export default App;
