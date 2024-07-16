"use client"
import Image from "next/image";
import Timer from "./components/Timer";
import { useState } from "react";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Navbar from "./components/Navbar";
import { TimerProvider } from "./context/TimerContext";
export default function Home() {
  
  
  
  return (
    <TimerProvider>
    <MantineProvider >
      <div className=" py-5 bg-background bg-cover bg-contain  max-h-fit h-screen">
       <Navbar/>
        <Timer />
      </div>
      </MantineProvider>
      </TimerProvider>
  );
}
