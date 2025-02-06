import { Link } from "react-router-dom"
function SignUpPage() {

  return (
    <>
      <div>
        <div>
          <h1 className='text-[#14b380]'>Create Your Account</h1>
        </div>
        <div>
          <form action="">
            <label htmlFor="">Full Name</label>
            <input type="text" />

            <label htmlFor="">Email Address</label>
            <input type="text" />

            <label htmlFor="">Password</label>
            <input type="text" />

            <label htmlFor="">Confirm Password</label>
            <input type="text" />

            <button type="submit">Sign Up</button>
            <span>Already have an accoutn? <Link to="/login"> Let Loging</Link></span>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUpPage
