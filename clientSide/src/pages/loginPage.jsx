import { useState } from "react";
import { Link } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';

function LoginPage() {
  const [loginFormData, setLoginFormData] = useState({ loginemail: "", loginpassword: "" });
  const [loginError, setLoginError] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;
    setLoginFormData({ ...loginFormData, [id]: value });
    setLoginError("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginFormData.loginemail === "user" && loginFormData.loginpassword === "12345") {
      console.log(loginFormData);
      toast.success('Logged Successfull.');
    }
    else {
      setLoginError("sorry worng credentials");
    }
  };

  return (
    <>
      <div className="text-center mt-40">
        {toast && <Toaster
          position="top-center"
          reverseOrder={false}
        />}
        <div>
          <h1 className='text-[#14b380] text-4xl font-bold'>Login To Your Account</h1>
        </div>
        <div className="bg-[#1F2936]">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label className="text-white" htmlFor="loginemail" aria-placeholder="you@example.com">Email Address</label>
              <input className="border-gray-600 bg-gray-700  placeholder-gray-400  rounded p-2" type="text" id="loginemail" placeholder="you@example.com"
                autoComplete="off" onChange={handleChange} />
            </div>
            <div>
              <label className="text-white" htmlFor="loginpassword" aria-placeholder="**********">Password</label>
              <input className="border-gray-600 bg-gray-700  placeholder-gray-400 rounded p-2" type="text" id="loginpassword" placeholder="********"
                autoComplete="off" onChange={handleChange} />
            </div>
            <div>
              <span className="text-[#14b380]">Forgot your password<Link to="/login"></Link></span>
              <button className="bg-[#14b380] text-white mx-4 px-8 rounded" type="submit" >Login</button>
            </div>
            {<p className="text-white">{loginError}</p>}
          </form>
        </div>
        <div>
          <p>Not a member? <span>
            <Link to={"/signup"} className="text-[#14b380] font-bold">Sign up now</Link>
          </span></p>
        </div>
      </div>
    </>
  )
}

export default LoginPage;
