import React, { useContext } from 'react';
import { ThemeContext } from '../Provider/ThemeProvider';
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="text-3xl text-xl lg:text-3xl md:text-xl sm:text-lg font-bold">
        {theme === 'light' ? <FaMoon></FaMoon> : <FaSun></FaSun>}
    </button>
  );
};

export default ToggleButton;
