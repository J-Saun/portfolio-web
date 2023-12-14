import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <section id="about">
        <div className="container">
          <div>
            Hey there! I'm a coding enthusiast who's really into JavaScript and
            React. I haven't worked in tech yet, but I'm super excited to dive
            in. Apart from coding, you'll often find me outdoors, soaking up the
            sun and enjoying nature. It's my way of balancing the screen time
            and keeping things real. Even though I haven't had a tech job yet,
            don't let that fool you. I'm all geared up to bring my A-game to the
            tech world. Can't wait to see where this journey takes me!
          </div>
          <div>
            <h2>A few technologies I've been working with lately:</h2>
            <ul className="badge-list badge-list-purple">
              <li>Javascript</li>
              <li>SCSS</li>
              <li>React</li>
              <li>Node.js</li>
              <li>PHP</li>
              <li>Netlify</li>
              <li>Vercel</li>
              <li>GIT</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
