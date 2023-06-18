import "./HeroImgStyle.css";
import  IntoImg  from "../assets/4102879_971.jpg";
import React from "react";
import { Link } from "react-router-dom";

export const Heroimg2 = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="in-img" src={IntoImg} alt="Intro Image"></img>
      </div>
      <div className="content">
        <p>
          Hello ! I am a <b>Mern</b> Stake Developer
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
