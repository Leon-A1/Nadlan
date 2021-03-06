import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SideBar from "../Components/AdminSideBar/AdminSidebar";
import "./login.css";

const LoginView = (props) => {
  const history = useHistory();
  const [message, setMessage] = useState("");

  const AuthenticateUser = () => {
    if (localStorage.getItem("nadlan-auth") === "authenticated") {
      console.log("already logged in");
      history.push("/admin");
    } else {
      if (document.querySelector("#pass-id").value === "a123") {
        localStorage.setItem("nadlan-auth", "authenticated");
        history.push("/admin");
      } else {
        setMessage("סיסמא לא נכונה");
      }
    }
  };

  return (
    <div className="admin-view-container">
      <SideBar />
      <div className="login-form">
        <h3>מורשים בלבד</h3>
        <input type="password" placeholder="סיסמת משתמש" id="pass-id"></input>
        <button onClick={(e) => AuthenticateUser(e)}>קבל גישה</button>
        <p className="login-response-message">{message}</p>
      </div>
    </div>
  );
};

export default LoginView;
