import { useState, useEffect } from "react";
    import styled from "styled-components";

    const ToggleButton = styled.button`
      /* Style the toggle button */
    `;

    const DarkModeToggle = () => {
      const [isDarkMode, setIsDarkMode] = useState(false);

      useEffect(() => {
        // Check localStorage for previous preference
        const storedDarkMode = localStorage.getItem("darkMode") === "true";
        setIsDarkMode(storedDarkMode);
      }, []);

      useEffect(() => {
        // Update localStorage whenever dark mode changes
        localStorage.setItem("darkMode", isDarkMode.toString());

        // Apply dark mode class to body
        if (isDarkMode) {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      }, [isDarkMode]);

      const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
      };

      return (
        <ToggleButton onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </ToggleButton>
      );
    };

    export default DarkModeToggle;
