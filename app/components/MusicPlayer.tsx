// "use client";

// import { useRef, useState } from "react";
// import PlayIcon from '/public/assets/icons/play.svg';
// import PauseIcon from '../../public/assets/icons/pause.svg';
// import StopIcon from '../../public/assets/icons/stop.svg';
// import RestartIcon from '../../public/assets/icons/restart.svg'
// import Image from "next/image";
// function MusicPlayer() {
//   const chimeSound = useRef<HTMLAudioElement | undefined>(
//     typeof Audio !== "undefined" ? new Audio('/assets/sounds/lofi.mp3') : undefined
//   );
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [fileName] = useState('lofi.mp3'); // Assuming the file name is known

//   const handlePlay = () => {
//     chimeSound.current?.play();
//     setIsPlaying(true);
//   };

//   const handlePause = () => {
//     chimeSound.current?.pause();
//     setIsPlaying(false);
//   };



// const handleRestart = () => {
//   if (chimeSound.current) {
//     chimeSound.current.currentTime = 0;
//     chimeSound.current.play();
//     setIsPlaying(true);
//   }
// };
//   const handleStop = () => {
//     if (chimeSound.current) {
//       chimeSound.current.pause();
//       chimeSound.current.currentTime = 0;
//       setIsPlaying(false);
//     }
//   };

//   return (
// <div className="">
//   <div className="bg-gray-800 rounded-lg p-4 text-center text-white w-64 shadow-md">
//     <div className="text-lg mb-3">{fileName}</div>
//     <div className="flex justify-around mb-3">
//       <button className="bg-[#102438d0] hover:bg-gray-500 rounded p-2" onClick={handlePlay}>
//         <Image src={PlayIcon} alt="Play" className="w-6 h-6" />
//       </button>
//       <button className="bg-gray-600 hover:bg-gray-500 rounded p-2" onClick={handlePause}>
//         <Image src={PauseIcon} alt="Pause" className="w-6 h-6" />
//       </button>
//       <button className="bg-gray-600 hover:bg-gray-500 rounded p-2" onClick={handleStop}>
//         <Image src={StopIcon} alt="Stop" className="w-6 h-6" />
//       </button>
//       <button className="bg-gray-600 hover:bg-gray-500 rounded p-2" onClick={handleRestart}>
//         <Image src={RestartIcon} alt="Restart" className="w-6 h-6" />
//       </button>
//     </div>
//     <div className="text-base">
//       {isPlaying ? 'Playing...' : 'Paused'}
//     </div>
//   </div>
// </div>
//   );
// }

// export default MusicPlayer;