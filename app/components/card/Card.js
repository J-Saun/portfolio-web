import { PortableText } from "@portabletext/react";

import styles from "./Card.module.scss";
import BadgeList from "../badges/BadgeList";

const Card = (props) => {
  const { image, title, author, author_img, createdAt, content, badges } =
    props;
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__preview}>
        <img src={image} alt="" />
      </div>
      <div className={styles.projectCard__desc}>
        <h3>{title}</h3>
        <PortableText value={content} />
        <BadgeList badges={badges} style="transparent" />
        <img src={author_img} />
        <p>{author}</p>
        <p>{createdAt}</p>
      </div>
    </div>
    // <div className={`project-card ${isDarkMode ? "dark" : "light"}`}>
    //   <div className="project-card-preview">
    //     <img src=""></img>
    //   </div>
    //   <div className="project-card__desc">
    //     <h3>Project name</h3>
    //     <p>Project description</p>
    //     <h4 className="sr-only">Tech Stack</h4>
    //     <ul className="badge-list badge-list-transparent">
    //       <li>Javascript</li>
    //       <li>React</li>
    //       <li>Express</li>
    //       <li>Vercel</li>
    //       <li>Font Awesome</li>
    //       <li>GSAP</li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Card;
