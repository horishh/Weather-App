import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./Theme.css";

const Theme = () => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <button onClick={toggleTheme} className="themeBtn">
        {theme === "light" ? (
          <FontAwesomeIcon icon={faMoon} size="xl" />
        ) : (
          <FontAwesomeIcon icon={faSun} size="xl" />
        )}
      </button>
    </div>
  );
};

export default Theme;
