import React, { useState } from "react";

const LoginPage = () => {
  const [email, Setemail] = useState("");
  const [passsword, Setpassword] = useState("");
  const [login, loading] = usestore("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          type="text"
          value={email}
          placeholder="Enter Youer Email Address"
          onChange={(e) => Setemail(e.target.value)}
        />
        <label htmlFor="email"></label>
        <input
          value={passsword}
          type="text"
          placeholder="Enter Youer Password"
          onChange={(e) => Setpassword(e.target.value)}
        />
        <button>
          Submit
          {loading ? (
            <>
              <Loader
                className="mr-2 h-5 w-5 animate-spin"
                aria-hidden="true"
              />
              Loading...
            </>
          ) : (
            <>
              <LogIn className="mr-2 h-5 w-5" aria-hidden="true" />
              Login
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
