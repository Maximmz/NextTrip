import React, { useState } from "react";
import Logo from "../assets/TravelLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
       <Link to="/"><img src={Logo} alt='xdxd'/></Link> 
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Destinations </Link>
          <Link to="/about"> About </Link>
          <Link to="/login"> Log in </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Destinations </Link>
        <Link to="/about"> About </Link>
        <Link to="/login"> Login </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
