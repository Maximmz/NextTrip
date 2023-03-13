import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/MenuAsset2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> NextTrip </h1>
        <p> Travel across Pakistan</p>
        <Link to="/destinations">
          <button> Destinations </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
