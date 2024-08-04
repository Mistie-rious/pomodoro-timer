"use client"

import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface TimerContextProps {
  customTime: number;
  shortBreak: number;
  longBreak: number;
  setCustomTime: (time: number) => void;
  setShortBreak: (time: number) => void;
  setLongBreak: (time: number) => void;
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

const useSessionStorageState = (key: string, defaultValue: number) => {
  const [value, setValue] = useState<number>(defaultValue);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const savedValue = sessionStorage.getItem(key);
      if (savedValue !== null) {
        setValue(Number(savedValue));
      }
    }
  }, [key]);

  useEffect(() => {
    if (isClient) {
      sessionStorage.setItem(key, value.toString());
    }
  }, [key, value, isClient]);

  return [value, setValue] as const;
};

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [customTime, setCustomTime] = useSessionStorageState('customTime', 25);
  const [shortBreak, setShortBreak] = useSessionStorageState('shortBreak', 5);
  const [longBreak, setLongBreak] = useSessionStorageState('longBreak', 10);

  return (
    <TimerContext.Provider value={{ customTime, shortBreak, longBreak, setCustomTime, setShortBreak, setLongBreak }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  const context = React.useContext(TimerContext);
  if (!context) {
    throw new Error('useTimerContext must be used within a TimerProvider');
  }
  return context;
};