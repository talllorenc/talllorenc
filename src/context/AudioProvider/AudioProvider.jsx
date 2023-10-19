"use client"
import React, { useState } from "react";

export const AudioContext = React.createContext();

export const AudioProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudio, setCurrentAudio] = useState("");

    return (
        <AudioContext.Provider value={{ isPlaying, setIsPlaying, currentAudio, setCurrentAudio }}>
            {children}
        </AudioContext.Provider>
    );
};
