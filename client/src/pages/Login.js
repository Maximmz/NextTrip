import React from "react";
import ContactLeft from "../assets/Contact.jpg";
import "../styles/Contact.css";

function Login() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Login</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Username</label>
          <input name="name" placeholder="Enter your username" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <button type="submit"> Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
