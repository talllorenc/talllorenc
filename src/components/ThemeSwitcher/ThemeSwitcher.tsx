"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const isActive = (currentTheme: string) => currentTheme === theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-center items-center border rounded-full border-gray-300 dark:border-white/20 gap-2 p-1 w-[96px] h-[34px]">
        <svg
          className="animate-spin h-5 w-5 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
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
}

export default ThemeSwitcher;