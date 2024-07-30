"use client"
import Timer from "./components/Timer";
import Spotify from "./components/spotify";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Navbar from "./components/Navbar";
import { TimerProvider } from "./context/TimerContext";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  
  const { theme } = useTheme();
  
  console.log("Theme is:", theme);
  return (

   
    <MantineProvider >
      <div className={`py-5 space-y-28 px-20 max-md:px-10 flex flex-col bg-cover max-w-screen max-h-fit h-screen bg-${theme}`}>
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

   
  );
}
