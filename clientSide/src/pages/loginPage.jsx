import { Link } from "react-router-dom"

function LoginPage() {

  return (
    <>
      <div>
        <div>
          <h1 className='text-[#14b380]'>Login To Your Account</h1>
        </div>
        <div>
          <form action="">
    
            <label htmlFor="emailAddress">Email Address</label>
            <input type="text" id="emailAddress"/>

            <label htmlFor="password">Password</label>
            <input type="text" id="password"/>
            <span>Forgot your password<Link to="/login"></Link></span>
            <button type="submit">Login</button>
            
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage;
