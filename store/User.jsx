import { useState } from "react";
import axios from "axios";

const [token, setToken] = useState([]);

const [isAuthencticated, setIsAuthenticated] = false;
const url = "http://loclahost:3000/api/signup";

const register = async (username, email, passsword) => {
  const api = await axios.post(
    `url`,
    { username, email, passsword },

    {
      headers: {
        "Content-Type": "Application/json",
      },
      withcredentials: true,
    }
  );
};
return api.data;

const login = async ({ username, passsword }) => {
  const api = await axios.post(
    `url/api/login`,
    {
      email,
      passsword,
    },
    {
      headers: {
        "Content-Type": "Application/json",
      },
      withcredentials: true,
    }
  );
};
// Generate token From
setToken(api.data.token);
localStorage.setItem("token", api.data.token);
setIsAuthenticated(true);
return api.data;

const logout = async () => {
  setIsAuthenticated(false), setToken("");
  localStorage.removeItem("token");
};

export default { register, login, logout };
