import './App.css'
import {Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from './pages/singUpPage.jsx';
import LoginPage from  "./pages/LoginPage.jsx";
import NavBar from './components/navbar.jsx';
import CartPage from './pages/cartPage.jsx';
import HomePage from './pages/homePage.jsx';
import FooterPage from './pages/footerPage.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage/>}/>
        <Route path='signup' element={<SignUpPage/>}/>
        <Route path='cart' element={<CartPage/>}/>
      </Routes>
      <FooterPage />
    </>
  )
}
export default App;