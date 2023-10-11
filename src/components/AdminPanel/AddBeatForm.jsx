"use client";
import { useState } from "react";

const AddBeatForm = () => {
  const [beatInfo, setBeatInfo] = useState({
    title: "",
    bpm: "",
    photoUrl: "",
    audio: "",
    tags: [],
  });
  const [tagInput, setTagInput] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setBeatInfo({ ...beatInfo, [name]: value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "http://localhost:8080/api/upload_beat_img",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const imageData = await response.json();
        const imagePath = imageData.file.url;

        setBeatInfo({ ...beatInfo, photoUrl: imagePath });
      } else {
        console.error("Ошибка при загрузке изображения");
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса на сервер", error);
    }
  };

  const handleAudioUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("audio", file);

    try {
      const response = await fetch("http://localhost:8080/api/upload_audio", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const audioData = await response.json();
        const audioUrl = audioData.file.url;

        setBeatInfo({ ...beatInfo, audio: audioUrl });
      } else {
        console.error("Ошибка при загрузке аудиофайла");
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса на сервер", error);
    }
  };

  const onTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const addTag = () => {
    if (tagInput) {
      setBeatInfo({ ...beatInfo, tags: [...beatInfo.tags, tagInput] });
      setTagInput("");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/add_beat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(beatInfo),
      });

      if (res.ok) {
        setBeatInfo({
          title: "",
          bpm: "",
          tags: [],
        });
      }

      console.log("Пост успешно создан!");
    } catch (error) {
      console.error("Ошибка отправки данных на сервер", error);
    }
  };

  return (
    <div className="w-[400px]">
      <div className="max-w-[400px] mx-auto p-[16px] border border-[#4c4b4b] rounded">
        <span className="text-[20px]">Add Beat</span>
        <form
          method="POST"
          onSubmit={onSubmit}
          className="flex flex-col gap-2 "
        >
          <input
            id="title"
            name="title"
            placeholder="Beat title"
            type="text"
            onChange={onChange}
            value={beatInfo.title}
            className=" block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] sm:text-sm"
          />
          <input
            id="bpm"
            name="bpm"
            placeholder="Beat BPM"
            type="text"
            onChange={onChange}
            value={beatInfo.bpm}
            className=" block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] sm:text-sm"
          />
          <div>
            <input
              type="file"
              id="photoUrl"
              name="photoUrl"
              onChange={handleImageUpload}
              className="hidden"
            />
            <label
              htmlFor="photoUrl"
              className="mb-[20px] bg-white relative block w-full appearance-none border border-gray-300 rounded-md px-3 py-2 text-gray-500 placeholder-gray-100 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              Beat cover
            </label>
            <span>{beatInfo.photoUrl}</span>
          </div>

          <div>
            <input
              type="file"
              id="audio"
              name="audio"
              onChange={handleAudioUpload}
              accept="audio/*"
              className="hidden"
            />
            <label
              htmlFor="audio"
              className="mb-[20px] bg-white relative block w-full appearance-none border border-gray-300 rounded-md px-3 py-2 text-gray-500 placeholder-gray-100 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              Beat audio
            </label>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <input
                type="text"
                placeholder="Add a tag"
                value={tagInput}
                onChange={onTagInputChange}
                className=" block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#F75380] focus:outline-none focus:ring-[#F75380] sm:text-sm"
              />
              <button
                className=" ml-[5px] border-[2px] border-[#F75350] p-1 rounded-lg hover:bg-[#F75350]"
                type="button"
                onClick={addTag}
              >
                Add
              </button>
            </div>
            <div className="flex gap-2 mt-[5px]">
              {" "}
              {beatInfo.tags.map((tag, index) => (
                <span className="bg-[#8c8b8b] border rounded" key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button className="mt-[30px]" type="submit">
            <span className=" border-[2px] border-[#F75370] p-1 rounded-lg hover:bg-[#F75380]">
              Create beat
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBeatForm;
