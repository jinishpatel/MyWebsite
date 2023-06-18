import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg " : "header"}>
      <Link to="/">
        <h1>PortFolio</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Me</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <a href="https://github.com/jinishpatel"> GitHub Profile</a>
        </li>
        <li>
          <Link to="/Resume">Get Resume</Link>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
