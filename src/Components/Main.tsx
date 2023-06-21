import "./Main.css";

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
              <h4>HTML</h4>
              <h4>CSS</h4>
              <h4>JavaScript</h4>
              <h4>React</h4>
              <h4>TypeScript</h4>
            </div>
            <div className="tech-value">
              <h4>asf</h4>
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
          </div>
        </div>
      </div>
    </div>
  );
};
