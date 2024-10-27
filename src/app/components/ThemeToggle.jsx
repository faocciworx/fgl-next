"use client";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md"; // Importing icons from react-icons

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light"); // Default to light theme

  useEffect(() => {
    // Check local storage on the client side
    const storedTheme = localStorage.getItem("color-theme");

    // Set theme based on storage or default to light
    setTheme(storedTheme || "light");
  }, []);

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("color-theme", newTheme);
  };

  return (
    <button
      id="theme-toggle"
      type="button"
      className="dark:text-gray-800 text-primary 2xl:dark:hover:text-primary 2xl:hover:text-gray-800 rounded-lg text-sm p-2.5 mr-2"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <MdLightMode className="w-5 h-5" />
      ) : (
        <MdDarkMode className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
