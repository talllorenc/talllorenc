"use client";
import { useEffect, useState } from "react";
import React from "react";
import MainPlayer from "../MainPlayer/MainPlayer";
import Image from "next/image";

const HeaderBeats = () => {
  const [beats, setBeats] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState("");
  const audioRef = React.createRef();

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
    const audio = audioRef.current;

    if (isPlaying && currentAudio === audioUrl) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setCurrentAudio(audioUrl);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    audio.onended = () => setIsPlaying(false);
  }, [isPlaying, currentAudio]);

  return (
    <div className="grid grid-cols-5 gap-3">
      {beats.map((beat) => (
        <div
          key={beat._id}
          className="border border-[#4c4b4b] rounded-lg relative"
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
                    {tag}
                  </span>
                ))}
              </span>
              <button onClick={() => toggleAudio(beat.audio)}>
                {isPlaying && currentAudio === beat.audio ? (
                  <Image
                  src="/header/pause-button(1).png"
                  width={70}
                  height={70}
                  className="absolute top-[92px] left-[92px] "
                  />
                ) : (
                  <Image
                    src="/header/free-icon-play-6364350.png"
                    width={70}
                    height={70}
                    className="absolute top-[92px] left-[92px] "
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}

      <audio ref={audioRef} src={currentAudio}></audio>
      {currentAudio && (
        <MainPlayer
          currentBeat={beats.find((beat) => beat.audio === currentAudio)}
          isPlaying={isPlaying}
          toggleAudio={toggleAudio}
        />
      )}
    </div>
  );
};

export default HeaderBeats;
