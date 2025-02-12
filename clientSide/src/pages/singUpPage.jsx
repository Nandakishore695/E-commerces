import { Link } from "react-router-dom";

function SignUpPage() {
 const [signUpFormData, setSignUpFormdata] = useState({signUpFullName: "", signUpEmail: "", signUpPassword: "", signUpConfirmPassword: "",});
const [signUpError, setSignUpLoginError] = useState("");

 const handleChange = (event) =>{
  const {id, value} = event.target;
  setSignUpFormdata({...signUpFormData, [id]: value});
  setSignUpLoginError("");
 }
  const Submithandler = (event) => {
    event.preventDefault();
    if(signUpFormData.signUpFullName === "user" && 
      signUpFormData.signUpEmail === "user@gamil.com" && 
      signUpFormData.signUpPassword === "12345" &&
      signUpFormData.signUpConfirmPassword === "12345"
    ){
      console.log(signUpFormData);
    }
    else{
      setLoginError("sorry worng credentials");
    }
  }

  return (
    <>
      <div className="text-center mt-40">
        <h1 className='text-[#14b380] text-4xl font-bold'>Create Your Account</h1>
        <div className="bg-[#1F2936] m-auto py-8 px-4 rounded">
          <form action="" onSubmit={Submithandler}>
            <div>
              <label className="text-white" htmlFor="signUpFullName">Full Name
                <input className="border-gray-600 bg-gray-500 rounded p-2 placeholder-gray-400 " type="text" id="signUpFullName" placeholder="John Doe" />
              </label>
            </div>

            <div>
              <label className="text-white" htmlFor="">Email Address
                <input className="border-gray-600 bg-gray-500 rounded p-2 placeholder-gray-400 " type="text" placeholder="you@example.com" /></label>
            </div>

            <div>
              <label className="text-white" htmlFor="">Password
                <input className="border-gray-600 bg-gray-500 rounded p-2 placeholder-gray-400 " type="text" placeholder="********" /></label>
            </div>

            <div>
              <label className="text-white" htmlFor="">Confirm Password
                <input className="border-gray-600 bg-gray-500 rounded p-2 placeholder-gray-400 " type="text" placeholder="********" /></label>
            </div>

            <div >

              <button className="bg-[#14b380] text-white px-8 py-2 rounded" type="submit"> Sign Up</button>
            </div>
            <div>
              <span className="text-zinc-300">Already have an accoutn? <Link to="/login" className="text-[#14b380] font-bold"> Let Loging</Link></span>
            </div>
          </form>
        </div >
      </div >
    </>
  )
}

export default SignUpPage
