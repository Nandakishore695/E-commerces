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

function App() {

  return (
    <>
      <h1>Hello client</h1>
>>>>>>> 6021cfd04aa7483eb1d584ff2e7d9f3d5c65df03
    </>
  );
}

export default App;
