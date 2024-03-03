"use client"
import Image from "next/image";
import Timer from "./components/Timer";
import { useState } from "react";
import Navbar from "./components/Navbar";
export default function Home() {
  
  
  
  return (
      <div className="bg-cuteblue max-h-fit h-screen">
        <Navbar/>
        <Timer/>
      </div>
  );
}
