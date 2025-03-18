"use client";

import { useTheme } from "next-themes";
import { IoMoonOutline } from "react-icons/io5";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <IoMoonOutline className="w-6 h-6 block" />
    </button>
  );
}
