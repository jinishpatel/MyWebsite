import "./Main.css";
import htmlpng from "../assets/html.png";
import csspng from "../assets/css.png";
import javascriptpng from "../assets/javascript.png";
import Reactpng from "../assets/react.png";
import TypeScriptPng from "../assets/typescript.png";

export const Main = () => {
  return (
    <div className="main">
      <div className="tagline">
        <h1>Skills</h1>
      </div>
      <div className="skills-container">
        <div className="Left">
          <h1>FrontEnd Technologies</h1>
          <div className="technology-container">
            <div className="tech-name">
              <span>
                <p className="htmlpng"></p>
                <h4>HTML</h4>
              </span>

              <h4>CSS</h4>
              <h4>JavaScript</h4>
              <h4>React</h4>
              <h4>TypeScript</h4>
            </div>
            <div className="tech-value">
              <h4>asf</h4>
            </div>
            <div className="tech-png">
              <img src={htmlpng} alt="htmlpng" />
              <img src={csspng} alt="csspng" />
              <img src={javascriptpng} alt="javascriptpng" />
              <img src={Reactpng} alt="Reactpng" />
              <img src={TypeScriptPng} alt="typescriptpng" />
            </div>
          </div>
        </div>
        <div className="Right">
          <h1>BackEnd Technologies</h1>
          <div className="technology-container">
            <div className="tech-name">
              <h4>Python</h4>
              <h4>NodeJs</h4>
              <h4>Java</h4>
              <h4>C#</h4>
            </div>
            <div className="tech-value">
              <h4>asf</h4>
            </div>
            <div className="tech-png">
              <img src={htmlpng} alt="htmlpng" />
              <img src={csspng} alt="csspng" />
              <img src={javascriptpng} alt="javascriptpng" />
              <img src={Reactpng} alt="Reactpng" />
              <img src={TypeScriptPng} alt="typescriptpng" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
