"use client";
import { MdLightMode } from "react-icons/md";
import { TbMoonFilled } from "react-icons/tb";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-x1 cursor-pointer hover:text-green-400"
            onClick={() => setTheme("light")}
          />
        ) : (
          <TbMoonFilled
            className="text-x1 cursor-pointer hover:text-green-400"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
