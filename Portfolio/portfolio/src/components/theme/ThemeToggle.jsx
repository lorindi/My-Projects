import { useEffect, useState } from "react";
import "./ThemeToggle.scss";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.body.className = `${theme}-theme`;
    localStorage.setItem("theme", theme);
    console.log("Theme changed to:", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <motion.div
      className="theme-toggle"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </motion.div>
  );
};