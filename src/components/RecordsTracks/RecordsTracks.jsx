import React from "react";
import { useEffect, useState, useContext } from "react";
import MainPlayer from "../MainPlayer/MainPlayer";
import Image from "next/image";

const RecordsTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/get_tracks");
        if (res.ok) {
          const data = await res.json();
          setTracks(data);
        } else {
          console.error("Ошибка при получении данных");
        }
      } catch (error) {
        console.error("Error to fetch", error);
      }
    };
    fetchTracks();
  }, []);


  return (
    <div className="mb-[40px]">
      {tracks.map((track) => (
        <div
          key={track._id}
          className="flex border-b border-gray-300 py-2 hover:bg-[#F75380]"
        >
          <div className="flex flex-col flex-1">
            <span className="font-bold">{track.title}</span>
            <span className="text-[18px] font-bold text-[#8c8b8b]">
              {track.author}
            </span>
          </div>

          <div className="flex items-center gap-4 flex-1">
            <div className="flex gap-2">
              <span className="text-[14px] bg-[#3c3b3b] p-[2px] rounded">
                {track.bpm}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1">
            <a
              href={track.audio}
              download
              className="border-[2px]  p-2 rounded-lg hover:border-black"
            >
              <Image
                src="/header/download.png"
                width={20}
                height={20}
                alt="next img"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecordsTracks;
