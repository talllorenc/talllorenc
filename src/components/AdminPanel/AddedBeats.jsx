"use client";
import { useEffect, useState } from "react";
import React from "react";

const AddedBeats = () => {
  const [beats, setBeats] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
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

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleRemoveFromAdded = async (beatId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/remove_beat?beatId=${beatId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          `Ошибка при удалении из избранного. Код: ${response.status}`
        );
      }

      setBeats((prevBeats) => prevBeats.filter((beat) => beat._id !== beatId));
    } catch (error) {
      console.error("Ошибка при удалении из избранного:", error);
    }
  };

  return (
    <div>
      <div>
        {beats.map((beat) => (
          <div
            key={beat._id}
            className="flex justify-between w-[450px] mb-3 p-[4px] bg-gradient-to-r from-black to-[#F75380] border border-[#4c4b4b] rounded-lg "
          >
            <div className="flex flex-col">
              <span className="text-[16px] font-medium">{beat.title}</span>
              <span className="text-[14px] font-medium text-[#8c8b8b]">
                {beat.bpm} BPM
              </span>
              <span className="flex gap-2">
                {beat.tags.map((tag) => (
                  <span key={tag} className="text-[14px] bg-[#3c3b3b] p-[2px] rounded">
                    {tag}
                  </span>
                ))}
              </span>
              {/* <button onClick={toggleAudio}>
              {isPlaying ? "Pause" : "Play"}
            </button>
            <audio ref={audioRef}>
              <source src={beat.audio} type="audio/mpeg" />
            </audio> */}
            </div>

            <button
              onClick={() => handleRemoveFromAdded(beat._id)}
              className="p-[16px]"
            >
              <span className="border-[3px] border-[#F75370] rounded-lg bg-black px-1 py-[2px] hover:border-white">
                delete
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddedBeats;
