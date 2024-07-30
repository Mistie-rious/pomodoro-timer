"use client"
import Image from "next/image";
import Timer from "./components/Timer";
import Spotify from "./components/spotify";
import { useState } from "react";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Navbar from "./components/Navbar";
import { TimerProvider } from "./context/TimerContext";
// import MusicPlayer from "./components/MusicPlayer";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  
  const { theme } = useTheme();
  
  return (
    <ThemeProvider>
    <TimerProvider>
    <MantineProvider >
      <div className={`py-5 space-y-28 px-20 max-md:px-10 flex flex-col bg-cover max-w-screen max-h-fit h-screen ${theme === 'theme1' ? 'bg-background' : theme === 'theme2' ? 'bg-background1' : theme === 'theme3' ? 'bg-background-theme3' : 'bg-background-theme4'}`}>
        <div>
       <Navbar/>
        <Timer />
        </div>
        <div  className="">
        {/* <MusicPlayer/> */}
        <Spotify/>
        </div>
      </div>
      </MantineProvider>
      </TimerProvider>
      </ThemeProvider>
  );
}
