"use client"
import Timer from "./components/Timer";
import Spotify from "./components/spotify";
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

import Navbar from "./components/Navbar";
import { TimerProvider } from "./context/TimerContext";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  

  const { theme } = useTheme();

  const themeClass = {
    'spooky': 'bg-spooky',
    'chill': 'bg-chill',
    'charlotte': 'bg-charlotte',
    'mystic': 'bg-mystic',
    'sunset': 'bg-sunset',
    'car': 'bg-car',
    'books': 'bg-books',
    'anime': 'bg-anime',
  }[theme.toLowerCase()]; 
  
  console.log("Theme is:", theme);
  return (

   <>
    <MantineProvider >
      <div
        className={`py-5 px-20 justify-between max-md:px-10  flex flex-col h-screen  bg-cover max-w-screen overflow-hidden max-h-screen   ${themeClass}`}>
        <div>
       <Navbar/>
        <Timer />
        </div>
        <div  className="">
        {/* <MusicPlayer/> */}
        <Spotify />
        </div>
      </div>
      </MantineProvider>
      </>
   
  );
}
