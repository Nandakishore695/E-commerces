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
    </>
  );
}

export default App;
