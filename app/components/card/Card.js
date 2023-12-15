const Card = () => {
  return (
    <div className={`project-card ${isDarkMode ? "dark" : "light"}`}>
      <div className="project-card-preview">
        <img src=""></img>
      </div>
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
  );
};

export default Card;
