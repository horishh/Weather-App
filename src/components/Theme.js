import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Theme.css';

/**
 * Theme Component
 * 
 * This component allows users to toggle between light and dark themes for the application.
 * The current theme is stored in local storage so that it persists across page reloads.
 * 
 * @returns {JSX.Element} A button that toggles the theme and displays the appropriate icon.
 */
const Theme = () => {
  // Retrieve the stored theme from local storage or default to 'light'
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme); 

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme); 
  }, [theme]); 

  /**
   * Function to toggle the theme between light and dark.
   * 
   * This function updates the theme state based on the previous value. 
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <button 
        onClick={toggleTheme}
        className='themeBtn'>
        {theme === 'light' ? <FontAwesomeIcon icon={faMoon} size='xl'/> : <FontAwesomeIcon icon={faSun} size="xl" />}
      </button>
    </div>
  );
};

export default Theme;
