import './App.css'
import {Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage.jsx';
import SignUpPage from './pages/singUpPage.jsx';
import LoginPage from  "./pages/LoginPage.jsx";
import NavBar from './components/navbar.jsx';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path='/' element={<HomePage/>}/> */}
        <Route path='login' element={<LoginPage/>}/>
        <Route path='signup' element={<SignUpPage/>}/>
      </Routes>
    </>
  )
}

export default App;
