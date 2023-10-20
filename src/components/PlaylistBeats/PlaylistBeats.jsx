"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const PlaylistBeats = () => {
const [beats, setBeats] = useState([])

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
  return (
    <div>
      {beats.map((beat) => 
      <span>{beat.title}</span>
      )}
    </div>
  )
}

export default PlaylistBeats