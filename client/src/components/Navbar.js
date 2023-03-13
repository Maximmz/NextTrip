import React, { useState, useContext } from "react";
import Logo from "../assets/TravelLogo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";

import "../styles/Navbar.css";

function Navbar(props) {
  const [openLinks, setOpenLinks] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  const handleClick = async () => {

    dispatch({ type: "LOGOUT" });
    
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
       <Link to="/"><img src={Logo} alt='xdxd'/></Link> 
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/destinations"> Destinations </Link>
          <Link to="/about"> About </Link>
          <Link to="/login"> Log in </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/destinations"> Destinations </Link>
        <Link to="/about"> About </Link>
         <Link to="/login">{user ? (
  <div className="visible">
    <div className="username">{user.username}</div>
    <div >
      <button onClick={handleClick} className="logout">Logout</button>
    </div>
  </div>
) : (
  <div>Login</div>
)}
        </Link>
        <button onClick={toggleNavbar}>
        
        </button>
      </div>
    </div>
  );
}

export default Navbar;
