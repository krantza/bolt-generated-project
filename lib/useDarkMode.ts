import { useState, useEffect } from 'react';

    export const useDarkMode = () => {
      // ... (rest of the code remains the same)
    };
  const setMode = (mode: any) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
      };

      const toggleTheme = () => {
        if (theme === 'light') {
          setMode('dark')
        } else {
          setMode('light')
        }
      };

      useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
      }, []);

      return [theme, toggleTheme]
    };
