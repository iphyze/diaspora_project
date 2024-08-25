import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const storedDefaultEnabled = localStorage.getItem('defaultEnabled');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [defaultEnabled, setDefaultEnabled] = useState(storedDefaultEnabled ? JSON.parse(storedDefaultEnabled) : false);

  useEffect(() => {
    if (defaultEnabled) {
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      //const systemTheme = mq.matches ? 'dark' : 'light';
      const systemTheme = 'light';
      setTheme('light');
      document.body.className = systemTheme;
    } else {
      document.body.className = theme;
    }
    localStorage.setItem('theme', theme);
    localStorage.setItem('defaultEnabled', defaultEnabled);
  }, [theme, defaultEnabled]);

  const handleToggleDefault = () => setDefaultEnabled(!defaultEnabled);
  const handleToggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, defaultEnabled, handleToggleDefault, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;