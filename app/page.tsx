"use client"
import Image from "next/image";
import Timer from "./components/Timer";
import { useState } from "react";
export default function Home() {
  function showDialog(){
  (document.getElementById('my_modal_1') as HTMLDialogElement).showModal()
  }
  
  
  return (
      <div className="bg-cuteblue max-h-fit h-screen">
        <nav className="text-white  px-20  py-6 flex justify-between">
        <p>mistie's pomo</p>
       
<button onClick={showDialog}>settings</button>
<dialog id="my_modal_1" className=" modal">
  <div className="bg-cuteblue px-9 py-4 rounded-lg">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">How long do you want to focus?</p>
    <div className="modal-action">
      <form method="dialog">
      
        <button className="bg-white px-3 py-2 text-cuteblue rounded-md">Close</button>
      </form>
    </div>
  </div>
</dialog>

        </nav>
        <Timer/>
      </div>
  );
}
