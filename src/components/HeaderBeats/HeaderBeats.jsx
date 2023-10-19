"use client";
import { useEffect, useState, useContext } from "react";
import React from "react";
import MainPlayer from "../MainPlayer/MainPlayer";
import Image from "next/image";
import { AudioContext } from "@/context/AudioProvider/AudioProvider";

const HeaderBeats = () => {
  const { isPlaying, setIsPlaying, currentAudio, setCurrentAudio } = useContext(AudioContext);
  const [beats, setBeats] = useState([]);
  const [volume, setVolume] = useState(1);
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

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio.volume === 0) {
        audio.volume = volume || 0.5;  
        setVolume(audio.volume);
    } else {
        audio.volume = 0;
        setVolume(0);
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

  const changeVolume = (value) => {
    const audio = audioRef.current;
    audio.volume = value;
    setVolume(value);
  };

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
                    #{tag}
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
