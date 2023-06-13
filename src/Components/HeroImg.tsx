// import React from "react";
import "./heroimgstyle.css";
import IntoImg from "../assets/4102879_971.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="in-img" src={IntoImg} alt="Intro Image"></img>
      </div>
      <div className="content">
        <p>
          Hello ! I am a <h4>Mern</h4> Stake Developer
        </p>
        <h1>MongoDB Express React Node.js</h1>
        <div className="button-group">
          <Link to="/Project" className="btn primary">
            Project
          </Link>
          <Link to="/Project" className="btn">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
