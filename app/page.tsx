"use client"
import Image from "next/image";
import Timer from "./components/Timer";
import { useState } from "react";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Navbar from "./components/Navbar";


export default function Home() {
  
  
  
  return (
    <MantineProvider >
      <div className="bg-cuteblue max-h-fit h-screen">
       <Navbar/>
        <Timer />
      </div>
      </MantineProvider>
  );
}
