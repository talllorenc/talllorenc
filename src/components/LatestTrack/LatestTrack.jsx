"use client";
import React, { useState, useEffect, useContext } from "react";
import { AudioContext } from "@/context/AudioProvider/AudioProvider";
import Image from "next/image";

const LatestTrack = () => {
  const { isPlaying, setIsPlaying, currentAudio, setCurrentAudio } =
    useContext(AudioContext);
  const [track, setTrack] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/get_latest_beat")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTrack(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const handleAudioToggle = () => {
    if (isPlaying && currentAudio === track.audio) {
      setIsPlaying(false);
    } else {
      setCurrentAudio(track.audio);
      setIsPlaying(true);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="flex p-4 justify-between mt-[70px]">
          <div className="flex">
            <div className="relative">
              <img
                src={track.photoUrl}
                alt="beat cover"
                width={250}
                height={250}
                className="rounded-lg"
              />
              <button
                onClick={handleAudioToggle}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {isPlaying && currentAudio === track.audio ? (
                  <Image
                    src="/header/pause-button(1).png"
                    width={60}
                    height={60}
                  />
                ) : (
                  <Image
                    src="/header/free-icon-play-6364350.png"
                    width={60}
                    height={60}
                  />
                )}
              </button>
            </div>
            <div className="flex px-2 justify-between">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <span className="text-[40px] font-bold">{track.title}</span>
                  <span className="text-[#8c8b8b] text-[25px] font-bold">
                    {track.bpm}
                  </span>
                  <span className="text-[25px] text-[#8c8b8b] font-medium">
                    talllorenc
                  </span>
                </div>
                <div className="text-[15px] p-2 flex gap-[5px]">
                  {track.tags.map((tag) => (
                    <span className="bg-[#2c2b2b] p-1 border border-[#4c4b4b]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="text-[40px] flex flex-col items-center justify-center">
            <span className="p-2 text-[#F75380] font-bold">Latest track</span>
            <a
              download
              href={track.audio}
              className="text-[20px] border-[3px] border-[#F75370] rounded-lg bg-black px-1 py-[2px] flex items-center gap-1 transition-[300ms] hover:border-white "
            >
              download
              <Image
                src="/header/download.png"
                width={30}
                height={30}
                alt="download icon"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestTrack;
