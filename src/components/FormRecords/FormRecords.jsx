"use client";

import React from "react";
import { useState, useEffect } from "react";

const FormRecords = () => {
  const [audioUploaded, setAudioUploaded] = useState(false);
  const [trackInfo, setTrackInfo] = useState({
    title: "",
    author: "",
    bpm: "",
    audio: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setTrackInfo({ ...trackInfo, [name]: value });
  };

  const handleAudioUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("audio", file);

    try {
      const response = await fetch(
        "http://localhost:8080/api/upload_track_audio",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const audioData = await response.json();
        const audioUrl = audioData.file.url;

        setTrackInfo({ ...trackInfo, audio: audioUrl });
        setAudioUploaded(true);
      } else {
        console.error("Ошибка при загрузке аудиофайла");
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса на сервер", error);
    }
  };

  const canUpload = () => {
    const lastUploadTime = localStorage.getItem("lastUploadTime");
    if (!lastUploadTime) return true;
    const currentTime = new Date().getTime();
    const differenceInHours = (currentTime - lastUploadTime) / (1000 * 60 * 60);
    return differenceInHours >= 6;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // if (!canUpload()) {
    //   alert("You can only upload once every 6 hours!");
    //   return;
    // }

    try {
      const res = await fetch("http://localhost:8080/api/add_track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trackInfo),
      });

      if (res.ok) {
        setTrackInfo({
          title: "",
          author: "",
          bpm: "",
          audio: "",
        });
        localStorage.setItem("lastUploadTime", new Date().getTime());
      } else {
        console.log("Failed to add track");
      }
    } catch (error) {
      console.error("Send data error", error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Track title"
            onChange={onChange}
            value={trackInfo.title}
            className="w-full p-[6px] bg-black text-white rounded-lg border-2 border-white focus:border-[#F75370] focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            id="author"
            name="author"
            type="text"
            placeholder="Your name"
            onChange={onChange}
            value={trackInfo.author}
            className="w-full p-[6px] bg-black text-white rounded-lg border-2 border-white focus:border-[#F75370] focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            id="bpm"
            name="bpm"
            type="text"
            placeholder="Track BPM"
            onChange={onChange}
            value={trackInfo.bpm}
            className="w-full p-[6px] bg-black text-white rounded-lg border-2 border-white focus:border-[#F75370] focus:outline-none"
          />
        </div>
        <div className="mb-4">
          {!audioUploaded ? (
            <>
              <input
                type="file"
                id="audio"
                name="audio"
                accept="audio/*"
                className="hidden"
                onChange={handleAudioUpload}
              />
              <label
                htmlFor="audio"
                className="mb-[20px] bg-white relative block w-full appearance-none border border-gray-300 rounded-md px-3 py-2 text-gray-500 placeholder-gray-100 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                Beat audio
              </label>
            </>
          ) : (
            <p className="text-green-500 font-medium border-2 border-green-500 p-1">
              Audio has been successfully uploaded
            </p>
          )}
        </div>
        <button
          type="submit"
          className="text-[20px] border-[3px]  border-[#F75370] rounded-lg bg-black p-2  transition-[300ms] hover:border-white"
        >
          Add track
        </button>
      </form>
    </div>
  );
};

export default FormRecords;
