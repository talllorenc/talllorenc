"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const MainPlayer = ({ currentBeat, isPlaying, toggleAudio, volume, changeVolume, toggleMute }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 

    return () => clearTimeout(timer); 
  }, []);
  
  return (
    <div className={`fixed bottom-0 container backdrop-blur bg-opacity-50 rounded-xl transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex p-[5px]">
        <div className="flex w-1/3 justify-center items-center ">
          <img
            src={currentBeat.photoUrl}
            alt="beat cover"
            className="rounded-lg"
            width={65}
            height={65}
          />
          <div className="flex flex-col px-[16px]">
            <span className="font-medium text-[20px]">{currentBeat.title}</span>
            <span className=" text-[18px] text-[#9e9b9b]">talllorenc</span>
          </div>
        </div>

        <div className="flex w-1/3 justify-center items-center gap-[25px]">
          <Image src="/header/like.png" width={20} height={20} alt="prev img" className="cursor-pointer"/>
          <button onClick={() => toggleAudio(currentBeat.audio)}>
            <Image
              src={
                isPlaying
                  ? "/header/pause-button.png"
                  : "/header/play-button.png"
              }
              width={30}
              height={30}
              alt={isPlaying ? "pause img" : "play img"}
            />
          </button>
          <div className="flex items-center gap-[5px]">
            <Image
            onClick={() => toggleMute(currentBeat.audio)}
            src={volume === 0 ? "/header/mute.png" : "/header/sound.png"}
              width={20}
              height={20}
              alt="volume img"
              className="cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => changeVolume(parseFloat(e.target.value))}
              className="w-[100px] bg-gray-400 rounded cursor-pointer"
            />
          </div>
        </div>

        <div className="flex w-1/3 justify-center items-center gap-[10px]">
          <a href={currentBeat.audio} download className="border-[2px]  p-2 rounded-lg hover:border-red-600">
            <Image
              src="/header/download.png"
              width={20}
              height={20}
              alt="next img"
            />
          </a>
          {/* <button className="border-[2px] p-2 rounded-lg hover:border-blue-600">
            <Image
              src="/header/share.png"
              width={20}
              height={20}
              alt="next img"
            />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MainPlayer;
