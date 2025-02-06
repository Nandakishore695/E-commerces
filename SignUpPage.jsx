import { UserPlus } from "lucide-react";
import React, { useState } from "react";

const SignUpPage = () => {
  const loading = true;
  const [formData, Setformdata] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const Submithandler = (e) => {
    e.preventDefault();
    console.log(formdata);
  };
  return (
    <div>
      <form onSubmit={Submithandler}>
        <h2> Create a Account</h2>
        <label htmlFor="text">Full Name </label>
        <input
          type="text"
          name="full-name"
          onChange={(e) => Setformdata({ ...formData, name: e.target.value })}
        ></input>
        <label htmlFor="text">Email</label>
        <input
          type="text"
          name="email"
          onChange={(e) => Setformdata({ ...formData, name: e.target.value })}
        ></input>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password "
          onChange={(e) => Setformdata({ ...formdDta, name: e.target.value })}
        ></input>
        <label htmlFor="passsword">Confirm Password </label>
        <input
          type="password"
          name="confirm-password"
          onChange={(e) => Setformdata({ ...formData, name: e.target.value })}
        ></input>
        <button>
          Submit
          {isLoading ? (
            <>
              <Loader />
              Loading ...
            </>
          ) : (
            <>
              <UserPlus />
              signup
            </>
          )}
        </button>
      </form>
      <p>
        {" "}
        Already have an Account? <Link to={"/login"}>Login here</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
