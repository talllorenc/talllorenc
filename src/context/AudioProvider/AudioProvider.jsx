"use client"
import React, { useState, useRef, useEffect } from "react";

export const AudioContext = React.createContext();

export const AudioProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudio, setCurrentAudio] = useState("");
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
        audio.onended = () => setIsPlaying(false);
    }, [isPlaying, currentAudio]);

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

    const changeVolume = (value) => {
        const audio = audioRef.current;
        audio.volume = value;
        setVolume(value);
    };

    return (
        <AudioContext.Provider value={{ 
            isPlaying, 
            setIsPlaying, 
            currentAudio, 
            setCurrentAudio, 
            toggleMute, 
            changeVolume, 
            volume 
        }}>
            {children}
            <audio ref={audioRef} src={currentAudio}></audio>
        </AudioContext.Provider>
    );
};
