import React, { useContext } from 'react';
import { ThemeContext } from '../Provider/ThemeProvider';
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="text-3xl ms-8">
        {theme === 'light' ? <FaMoon></FaMoon> : <FaSun></FaSun>}
    </button>
  );
};

export default ToggleButton;
