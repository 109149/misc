import React from "react";
import "./App.css";
import { Navigation } from "../";
import ParentTheme from "../../themes/ParentTheme";
import { useMediaQuery } from "@material-ui/core";
import { ThemeContext, ThemeContextType, ThemeType } from "../../context";

function App() {
  const prefersDarkMode = useMediaQuery("prefers-color-scheme: dark");
  const [theme, setTheme] = React.useState<ThemeType>(
    localStorage.getItem("theme") === "dark" || prefersDarkMode
      ? "dark"
      : "light"
  );

  const onThemeChange = () => {
    let newTheme: ThemeType = "dark";
    if (theme === "dark") {
      newTheme = "light";
    }

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const themeContext: ThemeContextType = {
    theme: theme,
    toggleTheme: onThemeChange,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <ParentTheme>
        <Navigation />
      </ParentTheme>
    </ThemeContext.Provider>
  );
}

export default App;
