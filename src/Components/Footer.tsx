// import React from "react";
import "./footer.css";
import { FaMobile, FaVoicemail } from "react-icons/fa";
import { RiHome3Line } from "react-icons/RI";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <RiHome3Line
              size={20}
              style={{ color: "#FFF", marginRight: "2rem" }}
            />
            <div>
              <a href="https://goo.gl/maps/pmWpXbzZbffUn4Lw5">
                <p> 1451 Pate Crt</p>
                <p>Mississauga, Canada</p>
              </a>
            </div>
          </div>
          <div className="mobile">
            <FaMobile
              size={20}
              style={{ color: "#FFF", marginRight: "2rem" }}
            />
            <div>
              <h4>
                <a href="tel:+1416-505-9345">+1 416-505-9345</a>
              </h4>
            </div>
          </div>
          <div className="email">
            <FaVoicemail
              size={20}
              style={{ color: "#FFF", marginRight: "2rem" }}
            />
            <div>
              <p>
                <a href="mailto:jinish5597@gmail.com">jinish5597@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About My self</h4>
          <p>
            Self Motivated and eager to learn new technologies and apply that in
            live field...
          </p>
          <p className="social">
            <a href="https://www.facebook.com/jinish5597/">
              <FiFacebook size={20} style={{ marginRight: "2rem" }} />
            </a>
            <a href="https://www.instagram.com/jinish_patel/">
              <SiInstagram size={20} style={{ marginRight: "2rem" }} />
            </a>
            <a href="https://github.com/jinishpatel">
              <FiGithub size={20} style={{ marginRight: "2rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/jinishpateljp/">
              <SlSocialLinkedin size={20} style={{ marginRight: "2rem" }} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
