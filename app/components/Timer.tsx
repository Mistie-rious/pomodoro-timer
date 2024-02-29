'use client'
import { time } from 'console';
import {useState,  useEffect,} from 'react'


export default function Timer() {
  

const [timer, setTimer] = useState(false);
const [minutes, setMinutes] = useState(5);
const [seconds, setSeconds] = useState(0);

const startTimer = () => {
  setTimer(true);
  setMinutes(4);
  setSeconds(59)
};



useEffect(() => {
  if (timer && minutes > 0) {


     const secCount = setInterval(() => {
      
      setSeconds(prevSeconds => prevSeconds - 1);

    return () => clearInterval(secCount);
    
    },1000)

    const minCount = setInterval(() => {
      setSeconds(59)
      setMinutes(prevMinutes => prevMinutes - 1);
       
    }, 60000);
    


    return () => clearInterval(minCount);
  } else if (timer) {
    setTimer(false);
    setMinutes(0);
  }
}, [timer, minutes]);




  return (
    <div className='text-white flex space-y-3 flex-col justify-center items-center'>
      <div className='flex space-x-7'>
      <div>pomodoro</div>
      <div>short break</div>
      <div>long break</div>
      </div>
      <h1 className='text-[65px] '>
        {
`${minutes}:${seconds < 10? `0${seconds}` : seconds}`
        }
      </h1>
      <div className='w-[190px] h-[36px] bg-white flex justify-center  hover:outline-1 hover:outline-black items-center rounded-[80px] text-cuteblue'>
      <button className='text-cuteblue font-semibold  text-[20px] ' onClick={startTimer}>START</button>
      </div>
      
    </div>
  )
}

