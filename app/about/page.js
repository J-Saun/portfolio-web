import styles from "./about.module.scss";
import BadgeList from "../components/badges/BadgeList";

export default function About() {
  const aboutMe = `Hey there! I'm a coding enthusiast who's really into JavaScript and
  React. I haven't worked in tech yet, but I'm super excited to dive
  in. Apart from coding, you'll often find me outdoors, soaking up the
  sun and enjoying nature. It's my way of balancing the screen time
  and keeping things real. Even though I haven't had a tech job yet,
  don't let that fool you. I'm all geared up to bring my A-game to the
  tech world. Can't wait to see where this journey takes me!`;

  const badges = [
    "SCSS",
    "React",
    "Node.js",
    "PHP",
    "Netlify",
    "Vercel",
    "GIT",
  ];
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.container}`}>
        <div>
          <h2>About me</h2>
          <p>{aboutMe}</p>
        </div>
        <BadgeList
          title="A few technologies I've been working with lately:"
          badges={badges}
          style={"themed"}
        />
      </div>
    </section>
  );
}
