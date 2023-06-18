// import React from "react";
import "./Footer.css";
import { FaMobile, FaVoicemail } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <a href="https://goo.gl/maps/pmWpXbzZbffUn4Lw5">
              <RiHome3Line
                size={20}
                style={{ color: "#FFF", marginRight: "2rem" }}
              />
            </a>
            <div>
              <p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.393363406257!2d-79.71060012341788!3d43.59835065597607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b404ddf03843b%3A0x1e44a21bba0afc47!2s1451%20Pate%20Ct%2C%20Mississauga%2C%20ON%20L5V%202Y8!5e0!3m2!1sen!2sca!4v1687127547686!5m2!1sen!2sca"
                  width="300"
                  height="200"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </p>
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
              <FiFacebook size={20} style={{ margin: "1rem" }} />
            </a>
            <a href="https://www.instagram.com/jinish_patel/">
              <SiInstagram size={20} style={{ margin: "1rem" }} />
            </a>
            <a href="https://github.com/jinishpatel">
              <FiGithub size={20} style={{ margin: "1rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/jinishpateljp/">
              <SlSocialLinkedin size={20} style={{ margin: "1rem" }} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
