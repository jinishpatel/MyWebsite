import "./Heroimg2.css";
import IntoImg from "../assets/wp3203371-hd-banner-backgrounds.jpg";


export const Heroimg2 = ({ heading, text }) => {
  return (
    <div className="hero2">
      <div className="maskback">
        <img className="in-img2" src={IntoImg} alt="Intro Image"></img>
      </div>
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
      
    </div>
  );
};
