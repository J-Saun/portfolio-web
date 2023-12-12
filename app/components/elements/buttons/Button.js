import { useTheme } from "@/app/context/ThemeContext";

export const ThemeToggleBtn = () => {
  const isDarkMode = useTheme();

  return (
    <button aria-label="Toggle Dark Mode" onClick={toggleTheme}>
      {isDarkMode ? "dark mode" : "light mode"}
    </button>
  );
};
