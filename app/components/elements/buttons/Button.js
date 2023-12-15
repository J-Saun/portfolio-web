// import { useTheme } from "@/app/context/ThemeContext";

// export const ThemeToggleBtn = () => {
//   const isDarkMode = useTheme();

//   return (
//     <button aria-label="Toggle Dark Mode" onClick={toggleTheme}>
//       {isDarkMode ? "dark mode" : "light mode"}
//     </button>
//   );
// };
import styles from "./Button.module.scss";

export const MenuToggleBtn = () => {
  return (
    <button
      type="button"
      aria-controls="primary-nav"
      className={`btn btn--small ${styles.menuToggleBtn}`}
    >
      <object
        data="bars-solid.svg"
        type="image/svg+xml"
        aria-hidden="true"
      ></object>
      <span className="sr-only">Toggle Navigation Menu</span>
    </button>
  );
};
