import "./Heroimg2.css";
import IntoImg from "../assets/4102879_971.jpg";

export const Heroimg2 = () => {
  return (
    <div className="hero2">
      <div className="maskback">
        <img className="in-img2" src={IntoImg} alt="Intro Image"></img>
      </div>
      <div className="heading">
        <h1>this is heading</h1>
        <p>this is content</p>
      </div>
    </div>
  );
};
