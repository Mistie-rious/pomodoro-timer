"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@mantine/core';
import { useTimerContext } from '../context/TimerContext';



export default function Timer()  {

  const { customTime, shortBreak, longBreak } = useTimerContext();
  const [time, setTime] = useState(customTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTimer, setSelectedTimer] = useState<'pomodoro' | 'shortBreak' | 'longBreak' | null>('pomodoro');

  const chimeSound = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio('/assets/sounds/chime.mp3') : undefined
  );
 
  useEffect(() => {
    if (!isRunning) return;
  
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          chimeSound.current?.play(); 
          setSelectedTimer(prevTimer => {
            if (prevTimer === 'pomodoro') {
              setTime(shortBreak * 60);
              return 'shortBreak';
            } else if (prevTimer === 'shortBreak') {
              setTime(longBreak * 60);
              return 'longBreak';
            } else if (prevTimer === 'longBreak') {
              setTime(customTime * 60);
              return 'pomodoro';
            }
            return prevTimer;
          });
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  
    return () => clearInterval(timer);
  }, [isRunning, customTime, shortBreak, longBreak, selectedTimer]);
  useEffect(() => {
    if (selectedTimer === 'pomodoro') {
      setTime(customTime * 60);
    } else if (selectedTimer === 'shortBreak') {
      setTime(shortBreak * 60);
    } else if (selectedTimer === 'longBreak') {
      setTime(longBreak * 60);
    }
  }, [selectedTimer, customTime, shortBreak, longBreak]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const setTimer = (time: number, timerType: 'pomodoro' | 'shortBreak' | 'longBreak') => {
    setTime(time * 60);
    setIsRunning(false);
    setSelectedTimer(timerType);
  };

  const startCountdown = () => {
    setIsRunning(true);
  };

  const pauseCountdown = () => {
    setIsRunning(false);
  };

  const stopCountdown = () => {
    setIsRunning(false);
    setSelectedTimer((prevTimer) => {
      if (prevTimer === 'pomodoro') {
        setTimer(shortBreak, 'shortBreak');
        return 'shortBreak';
      } else if (prevTimer === 'shortBreak' || prevTimer === 'longBreak') {
        setTimer(customTime, 'pomodoro');
        return 'pomodoro';
      }
      return prevTimer;
    });
  };

  const pomodoros = () => {
    setTimer(customTime, 'pomodoro');
  };

  const shortBreakHandler = () => {
    setTimer(shortBreak, 'shortBreak');
  };

  const longBreakHandler = () => {
    setTimer(longBreak, 'longBreak');
  };


  return (
    <div className="text-white flex space-y-3 py-5 flex-col justify-center items-center">
      <div className="flex space-x-3">
      <Button
        variant={selectedTimer === 'pomodoro' ? 'default' : 'outline'}
        color="white"
        radius="lg"
        onClick={pomodoros}
      >
        pomodoro
      </Button>
      <Button
        variant={selectedTimer === 'shortBreak' ? 'default' : 'outline'}
        color="white"
        radius="lg"
        onClick={shortBreakHandler}
      >
        short break
      </Button>
      <Button
        variant={selectedTimer === 'longBreak' ? 'default' : 'outline'}
        color="white"
        radius="lg"
        onClick={longBreakHandler}
      >
        long break
      </Button>
      </div>
      <h1 className="text-[65px] ">
      {formatTime(time)}
      </h1>
      {isRunning ? (
        <div className="flex gap-6">
           <Button variant="default" color="rgba(105, 116, 152, 1)" size="md" radius="xl"
        onClick={pauseCountdown} >
          PAUSE</Button>

          <Button variant="default" color="rgba(105, 116, 152, 1)" size="md" radius="xl"
         onClick={stopCountdown} >
          STOP</Button>
        </div>
      ) : (
        <Button variant="default" color="rgba(105, 116, 152, 1)" size="md" radius="xl"
        onClick={startCountdown} >
          START</Button>
      )}
    </div>
  );
}
