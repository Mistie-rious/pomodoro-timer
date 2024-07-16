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

const useLocalStorageState = (key: string, defaultValue: number) => {
    const [value, setValue] = useState<number>(() => {
      const savedValue = localStorage.getItem(key);
      return savedValue !== null ? Number(savedValue) : defaultValue;
    });
  
    useEffect(() => {
      localStorage.setItem(key, value.toString());
    }, [key, value]);
  
    return [value, setValue] as const;
  };
  
export const TimerProvider = ({ children }: { children: ReactNode }) => {
    const [customTime, setCustomTime] = useLocalStorageState('customTime', 25);
    const [shortBreak, setShortBreak] = useLocalStorageState('shortBreak', 5);
    const [longBreak, setLongBreak] = useLocalStorageState('longBreak', 10);
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