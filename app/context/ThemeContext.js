"use client";

import { createContext, useState, useEffect } from "react";
import { fetchThemeFromServer } from "../../utils/utils";

export const ThemeContext = createContext();

function setRootLayout(theme) {
  const root = document.documentElement;

  root.style.setProperty("--clr-text", theme.clrTxt);
  root.style.setProperty("--clr-bg", theme.clrBg);
  root.style.setProperty("--clr-primary", theme.clrPrimary);
  root.style.setProperty("--clr-primary-lt", theme.clrPrimaryLt);
  root.style.setProperty("--clr-primary-text", theme.clrPrimaryText);
  root.style.setProperty("--clr-gray-lt", theme.clrGrayLt);
  root.style.setProperty("--clr-gray-md", theme.clrGrayMd);
  root.style.setProperty("--clr-gray-dk", theme.clrGrayDk);
}
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const fetchTheme = async () => {
      const data = await fetchThemeFromServer();
      setTheme(data);
    };

    fetchTheme();
  }, []);

  useEffect(() => {
    if (theme) {
      setRootLayout(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
