import { useTheme } from "../../context/ThemeContext";

const Card = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="project-card">
      <div className={`card ${isDarkMode ? "dark" : "light"}`}>
        This card is on {isDarkMode ? "dark mode" : "light mode"}`
        <div className="project-card-preview">
          <img src=""></img>
          <div className="project-card__desc">
            <h3>Project name</h3>
            <p>Project description</p>
            <h4 className="sr-only">Tech Stack</h4>
            <ul className="badge-list badge-list-transparent">
              <li>Javascript</li>
              <li>React</li>
              <li>Express</li>
              <li>Vercel</li>
              <li>Font Awesome</li>
              <li>GSAP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
