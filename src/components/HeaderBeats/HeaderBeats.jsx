"use client";
import React, { useEffect, useState, useContext } from "react";
import MainPlayer from "../MainPlayer/MainPlayer";
import Image from "next/image";
import { AudioContext } from "@/context/AudioProvider/AudioProvider";

const HeaderBeats = () => {
  const {
    isPlaying,
    setIsPlaying,
    currentAudio,
    setCurrentAudio,
    toggleMute,
    changeVolume,
    volume,
  } = useContext(AudioContext);
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    const fetchBeats = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/get_beats");
        if (response.ok) {
          const data = await response.json();
          setBeats(data);
        } else {
          console.error("Ошибка при получении данных");
        }
      } catch (error) {
        console.error("Ошибка при отправке запроса на сервер", error);
      }
    };

    fetchBeats();
  }, []);

  const toggleAudio = (audioUrl) => {
    if (isPlaying && currentAudio === audioUrl) {
      setIsPlaying(false);
    } else {
      setCurrentAudio(audioUrl);
      setIsPlaying(true);
    }
  };

  return (
    <div className="grid md:grid-cols-5 gap-3">
      {beats.map((beat) => (
        <div
          key={beat._id}
          className={`border-2 ${
            isPlaying && currentAudio === beat.audio
              ? "border-[#F75370] border-[3px] bottom-2"
              : "border-[#4c4b4b]"
          } rounded-lg bg-black hover:border-[3px] hover:border-[#F75370]`}
          onClick={() => toggleAudio(beat.audio)}
        >
          <div className="flex flex-col">
            <img src={beat.photoUrl} alt="" className="w-full rounded-lg" />
            <div className="flex flex-col p-[4px]">
              <span className="text-[20px] font-medium">{beat.title}</span>
              <span className="text-[18px] font-medium text-[#8c8b8b]">
                {beat.bpm} BPM
              </span>
              <span className="flex gap-2">
                {beat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[14px] bg-[#3c3b3b] p-[2px] rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </span>
              <button onClick={() => toggleAudio(beat.audio)}>
                {isPlaying && currentAudio === beat.audio ? <></> : <></>}
              </button>
            </div>
          </div>
        </div>
      ))}
      {currentAudio && (
        <MainPlayer
          isPlaying={isPlaying}
          currentBeat={beats.find((beat) => beat.audio === currentAudio)}
          toggleAudio={toggleAudio}
          volume={volume}
          changeVolume={changeVolume}
          toggleMute={toggleMute}
        />
      )}
    </div>
  );
};

export default HeaderBeats;
