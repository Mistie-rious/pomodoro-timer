"use client";

import { useState, useEffect } from 'react';
import { Button } from '@mantine/core';


export default function Timer()  {

  const [time, setTime] = useState(60); 
  const [isRunning, setIsRunning] = useState(false); 
  const [selectedTimer, setSelectedTimer] = useState<'pomodoro' | 'shortBreak' | 'longBreak' | null>('pomodoro');

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

  const pomodoros = () => {
    setTime(300)
    setIsRunning(false)
    setSelectedTimer('pomodoro')

  }

  const shortBreak = () => {
    setTime(300)
    setIsRunning(false)
    setSelectedTimer('shortBreak')
  }

  const longBreak = () => {
    setTime(600)
    setIsRunning(false)
    setSelectedTimer('longBreak')
  }



  return (
    <div className="text-white flex space-y-3 py-5 flex-col justify-center items-center">
      <div className="flex space-x-3">
      <Button
        variant={selectedTimer === 'pomodoro' ? 'light' : 'outline'}
        color="white"
        radius="lg"
        onClick={pomodoros}
      >
        pomodoro
      </Button>
      <Button
        variant={selectedTimer === 'shortBreak' ? 'light' : 'outline'}
        color="white"
        radius="lg"
        onClick={shortBreak}
      >
        short break
      </Button>
      <Button
        variant={selectedTimer === 'longBreak' ? 'light' : 'outline'}
        color="white"
        radius="lg"
        onClick={longBreak}
      >
        long break
      </Button>
      </div>
      <h1 className="text-[65px] ">
      {formatTime(time)}
      </h1>
      {isRunning ? (
        <div className="flex gap-6">
           <Button variant="white" color="rgba(105, 116, 152, 1)" size="md" radius="xl"
        onClick={pauseCountdown} >
          PAUSE</Button>

          <Button variant="white" color="rgba(105, 116, 152, 1)" size="md" radius="xl"
         onClick={stopCountdown} >
          STOP</Button>
        </div>
      ) : (
        <Button variant="white" color="rgba(105, 116, 152, 1)" size="md" radius="xl"
        onClick={startCountdown} >
          START</Button>
      )}
    </div>
  );
}
