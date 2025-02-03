import {Link } from "react-router-dom";

function HomePage() {

    return (
      <>
        <h1 className='text-[#14b380]'>Welcome To Home</h1>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>SignUp</button></Link>
      </>
    )
  }
  
  export default HomePage;
  