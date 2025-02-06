<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="man-h-screen bg-blue-400 relative overflow-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </div>
=======
import './App.css'
import {Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage.jsx';
import SignUpPage from './pages/singUpPage.jsx';
import LoginPage from  "./pages/LoginPage.jsx";
import NavBar from './components/navbar.jsx';

function App() {

  return (
    <>
<<<<<<< HEAD
      <h1>Hello client</h1>
>>>>>>> 6021cfd04aa7483eb1d584ff2e7d9f3d5c65df03
=======
      <NavBar />
      <Routes>
        {/* <Route path='/' element={<HomePage/>}/> */}
        <Route path='login' element={<LoginPage/>}/>
        <Route path='signup' element={<SignUpPage/>}/>
      </Routes>
>>>>>>> 30281bceac48a4a1a2bf05d99e6e6df199203b80
    </>
  );
}

export default App;
