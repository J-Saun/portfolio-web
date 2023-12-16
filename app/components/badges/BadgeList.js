import styles from "./BadgeList.module.scss";
// const badges = ["SCSS", "React", "Node.js", "PHP", "Netlify", "Vercel", "GIT"];

const BadgeList = ({ title, badges, style }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul className={`${styles.badgeList}`}>
        {/* <li className={`${styles.themed}`}>Javascript</li> */}
        {badges.map((badge) => (
          // <li className={`${styles.themed}`}>{badge}</li>
          <li
            className={
              style === "themed" ? `${styles.themed}` : `${styles.transparent}`
            }
          >
            {badge}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BadgeList;
