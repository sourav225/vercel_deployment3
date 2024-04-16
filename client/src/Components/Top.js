import React, { useState, useEffect } from "react";
import logo from "../Images/Screenshotimp1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Top() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showbutton, setShowbutton] = useState(false);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const isLoggedIn = document.cookie?.split(";").find((cookie) => cookie.trim().startsWith("loggedIn="));
      const loginname = document.cookie?.split(";").find((cookie) => cookie.trim().startsWith("username="));
      if (isLoggedIn && isLoggedIn.split("=")[1] === "true") {
        setShowbutton(true);
        setName(loginname.split("=")[1]);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add validation logic if needed

    try {
      // Send login request to the server using Axios
      const response = await axios.post("https://vercel-deployment3-server3.vercel.app/login", { email, password });

      const data = response.data;
      console.log(data.message);

      const cook = document.cookie;

      if (response.status === 200) {
        console.log(cook);
        setShowbutton(true); // You can define this function to handle successful login
        document.cookie = "loggedIn=true; path=/;SameSite=None; Secure";
        document.cookie = `username=${data.username}; path=/;SameSite=None; Secure`;
        document.cookie = `useremail=${data.useremail}; path=/;SameSite=None; Secure`;
        console.log(data.username);
        setName(data.username);
        navigate("/");
        window.location.reload();

        // Set a cookie on successful login (you might want to set other options like secure and httpOnly)
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      // Send logout request to the server using Axios
      const response = await axios.get("https://vercel-deployment3-server3.vercel.app/logout");
      const data = response.data;
      console.log(data.message);

      if (response.status === 200) {
        setShowbutton(false); // You can define this function to handle successful logout
        document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "useremail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="row cont">
        <div className="col-sm-3">
          <img src={logo} className="img-fluid" alt="Logo" />
        </div>
        <div className="col-sm-3"></div>
        {showbutton ? (
          <>
            <div className="col-sm-3"></div>
            <div className="col-sm-3 rounded mt-3 mb-2 pt-3 pb-3" style={{ backgroundColor: "#0284ba", color: "white" }}>
              Welcome {name}
              <button className="lgbtn bg-light rounded" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="col-sm-6 col-lg-6 col-md-6 col-xl-6 px-0 loginform rounded pt-3 pb-3 pl-1 mt-3 mb-2">
            <form className="login rounded">
              <div>
                <label for="email">
                  <b>Email</b>:
                </label>
                <input type="text" className="d-inline" id="email" placeholder="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <label for="password" className="logintop">
                  <b>Password</b>:
                </label>
                <input type="password" className="d-inline" id="password" placeholder="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="d-inline lgbtn" onClick={handleSubmit}>
                  Login
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Top;
