"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import { AudioContext } from "@/context/AudioProvider/AudioProvider";
import MainPlayer from "../MainPlayer/MainPlayer";
import SearchBar from "../SearchBar/SearchBar";
import { useSession } from "next-auth/react";

const PlaylistBeats = () => {
  const { data: session } = useSession();
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

  const handleLikeToggle = async (beatId) => {
    if (!session) return;

    try {
      const response = await fetch("http://localhost:8080/api/toggle_like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          beatId,
          userEmail: session.user.email,
        }),
      });

      const data = await response.json();

      setBeats((prevBeats) =>
        prevBeats.map((beat) =>
          beat._id === beatId
            ? {
                ...beat,
                likesCount: data.likesCount,
                likes: data.hasLiked
                  ? [...beat.likes, session.user.email]
                  : beat.likes.filter((email) => email !== session.user.email),
              }
            : beat
        )
      );
    } catch (error) {
      console.error("Ошибка при отправке запроса на сервер", error);
    }
  };

  return (
    <div className="container ">
      <SearchBar className="w-full" />
      <div className="flex border-b border-gray-300 py-2 mt-[40px] ">
        <span className="flex-1 text-gray-400 uppercase text-sm mb-2">
          Title
        </span>
        {/* Hide BPM and Tags columns on screens smaller than md */}
        <span className="hidden md:flex md:flex-1 text-gray-400 uppercase text-sm mb-2">
          BPM
        </span>
        <span className="hidden md:flex md:flex-1 text-gray-400 uppercase text-sm mb-2">
          Tags
        </span>
        <span className="md:flex-1 text-gray-400 uppercase text-sm mb-2">
          Options
        </span>
      </div>
      <div className="mb-[40px]">
        {beats.map((beat) => (
          <div
            key={beat._id}
            onClick={() => toggleAudio(beat.audio)}
            className="flex border-b border-gray-300 py-2 hover:bg-[#F75380]"
          >
            <div className="flex items-center gap-4 flex-1">
              <img
                src={beat.photoUrl}
                alt="beat cover"
                className="rounded-lg h-[70px]"
              />
              <span className="font-bold truncate">{beat.title}</span>{" "}
              {/* Added truncate here */}
            </div>

            {/* Hide BPM and Tags values on screens smaller than md */}
            <div className="hidden md:flex md:items-center md:gap-4 md:flex-1">
              <span className="text-[18px] font-bold text-[#8c8b8b] truncate">
                {beat.bpm}
              </span>
            </div>

            <div className="hidden md:flex md:items-center md:gap-4 md:flex-1">
              <div className="flex gap-2">
                {beat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[14px] bg-[#3c3b3b] p-[2px] rounded truncate"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-row-reverse md:flex-row items-center gap-4 flex-1">
              <a
                href={beat?.audio}
                download
                className="border-[2px]  p-2 rounded-lg hover:border-red-600"
              >
                <Image
                  src="/header/download.png"
                  width={20}
                  height={20}
                  alt="download img"
                />
              </a>
              <button
                className="border-[2px]  p-2 rounded-lg hover:border-red-600"
                onClick={() => handleLikeToggle(beat._id)}
              >
                <Image
                  src={
                    beat.likes.includes(session?.user?.email)
                      ? "/header/heart_like.png"
                      : "/header/heart.png"
                  }
                  width={20}
                  height={20}
                  alt="like img"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

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

export default PlaylistBeats;
