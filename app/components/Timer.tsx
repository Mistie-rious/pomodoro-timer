"use client";

import { useState, useEffect } from 'react';


export default function Timer()  {

  const [time, setTime] = useState(60); 
  const [isRunning, setIsRunning] = useState(false); 

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning])

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };



  const startCountdown = () => {

    setIsRunning(true);
  }

  const pauseCountdown = () => {
    setIsRunning(false);
  };

  const stopCountdown = () => {
    setTime(60); 
    setIsRunning(false);
  };



  return (
    <div className="text-white flex space-y-3 flex-col justify-center items-center">
      <div className="flex space-x-7">
        <div>pomodoro</div>
        <div>short break</div>
        <div>long break</div>
      </div>
      <h1 className="text-[65px] ">
      {formatTime(time)}
      </h1>
      {isRunning ? (
        <div className="flex gap-6">
          <button
            className="w-[190px] h-[36px] bg-white flex justify-center  hover:outline-1 hover:outline-black items-center rounded-[80px] text-cuteblue"
            onClick={pauseCountdown}
          >
            <span className="text-cuteblue font-semibold  text-[20px] ">
              {" "}
              PAUSE
            </span>
          </button>

          <button
            className="w-[190px] h-[36px] bg-white flex justify-center  hover:outline-1 hover:outline-black items-center rounded-[80px] text-cuteblue"
            onClick={stopCountdown}
          >
            <span className="text-cuteblue font-semibold  text-[20px] ">
              STOP
            </span>
          </button>
        </div>
      ) : (
        <button
          className="w-[190px] h-[36px] bg-white flex justify-center  hover:outline-1 hover:outline-black items-center rounded-[80px] text-cuteblue"
          onClick={startCountdown}
        >
          <span className="text-cuteblue font-semibold  text-[20px] ">
            START
          </span>
        </button>
      )}
    </div>
  );
}
