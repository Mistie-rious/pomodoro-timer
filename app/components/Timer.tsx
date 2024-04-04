"use client";
import { time } from "console";
import { useState, useEffect } from "react";

type Props = { 
  finaltime: number|undefined

}

export default function Timer({finaltime}: Props)  {
  const [timer, setTimer] = useState(false);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    setTimer(true);
  };

    console.log(finaltime)
  const stopTimer = () => {
    setTimer(false);
    setMinutes(0);
    setSeconds(0);
  };

  const pauseTimer = () => {
    setTimer(false);
    setMinutes(minutes);
    setSeconds(seconds);
  };

   
  useEffect(() => {
    if (timer) {
      const totalSeconds = minutes * 60 + seconds;

      const newInterval = setInterval(() => {
        const newTotalSeconds = Math.max(0,(totalSeconds - 1))
        const newMinutes = Math.floor(newTotalSeconds / 60);
        const newSeconds = newTotalSeconds % 60;

        setMinutes(newMinutes);
        setSeconds(newSeconds);

        if (newTotalSeconds === 0) {
          setTimer(false);
        }
      }, 1000);

      return () => clearInterval(newInterval);
    } else {
      setMinutes(minutes)
      setSeconds(seconds)
    }
  }, [timer, seconds]);

  return (
    <div className="text-white flex space-y-3 flex-col justify-center items-center">
      <div className="flex space-x-7">
        <div>pomodoro</div>
        <div>short break</div>
        <div>long break</div>
      </div>
      <h1 className="text-[65px] ">
        {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
      </h1>
      {timer ? (
        <div className="flex gap-6">
          <button
            className="w-[190px] h-[36px] bg-white flex justify-center  hover:outline-1 hover:outline-black items-center rounded-[80px] text-cuteblue"
            onClick={pauseTimer}
          >
            <span className="text-cuteblue font-semibold  text-[20px] ">
              {" "}
              PAUSE
            </span>
          </button>

          <button
            className="w-[190px] h-[36px] bg-white flex justify-center  hover:outline-1 hover:outline-black items-center rounded-[80px] text-cuteblue"
            onClick={stopTimer}
          >
            <span className="text-cuteblue font-semibold  text-[20px] ">
              STOP
            </span>
          </button>
        </div>
      ) : (
        <button
          className="w-[190px] h-[36px] bg-white flex justify-center  hover:outline-1 hover:outline-black items-center rounded-[80px] text-cuteblue"
          onClick={startTimer}
        >
          <span className="text-cuteblue font-semibold  text-[20px] ">
            START
          </span>
        </button>
      )}
    </div>
  );
}
