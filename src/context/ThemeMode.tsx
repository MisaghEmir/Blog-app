"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

type themeMode = {
  theme: Boolean;
  ThemeMode: { toggleThemeMode: () => void };
};
type toggleThemeModeType = {
  toggleThemeMode: () => void;
};

const ThemeM: themeMode = {
  theme: false,
  ThemeMode: { toggleThemeMode: () => {} },
};

const ThemeModeContext = createContext<themeMode>(ThemeM);

const useThemeModeFunction = () => {
  const [theme, setTheme] = useState<Boolean>(false);

  const ThemeMode: toggleThemeModeType = {
    toggleThemeMode: () => {
      setTheme(!theme);
    },
  };

  return { theme, ThemeMode };
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, ThemeMode } = useThemeModeFunction();
  return (
    <ThemeModeContext value={{ theme, ThemeMode }}>
      <body style={{backgroundColor: theme ? " #0a0a0a" : "#ffffff"}} className={`${theme ? "dark" : "light"} ${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </ThemeModeContext>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);
