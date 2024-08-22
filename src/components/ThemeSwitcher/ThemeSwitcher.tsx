"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";
import MountedSpinner from "../ui/MountedSpinner";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const isActive = (currentTheme: string) => currentTheme === theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <MountedSpinner />;
  }

  return (
    <div className="flex justify-center border rounded-full border-gray-300 dark:border-white/20 gap-2 p-1 w-fit">
      <button
        className={`p-1 rounded-full ${
          isActive("light") ? "bg-gray-200 dark:bg-white/20 text-white" : ""
        }`}
        onClick={() => setTheme("light")}
      >
        <FaSun className="w-4 h-4 dark:text-white text-gray-600" />
      </button>
      <button
        className={`p-1 rounded-full ${
          isActive("system") ? "bg-gray-200 dark:bg-white/20 text-white" : ""
        }`}
        onClick={() => setTheme("system")}
      >
        <FaDesktop className="w-4 h-4 dark:text-white text-gray-600" />
      </button>
      <button
        className={`p-1 rounded-full ${
          isActive("dark") ? "bg-gray-200 dark:bg-white/20 text-white" : ""
        }`}
        onClick={() => setTheme("dark")}
      >
        <FaMoon className="w-4 h-4 dark:text-white text-gray-600" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
