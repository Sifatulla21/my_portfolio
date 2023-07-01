// import React, { createContext, useState, useEffect } from 'react';

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const currentTheme = localStorage.getItem('theme');
//     setIsDarkMode(currentTheme === 'dark');
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = isDarkMode ? 'light' : 'dark';
//     setIsDarkMode(!isDarkMode);
//     localStorage.setItem('theme', newTheme);
//     document.documentElement.classList.toggle('dark');
//   };
//   const themeInfo = {
//     isDarkMode,
//     toggleTheme
// }
//   return (
//     <ThemeContext.Provider value={themeInfo}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
