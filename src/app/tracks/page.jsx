"use client"

import React, { useState } from 'react';
import HeaderBeats from "@/components/HeaderBeats/HeaderBeats";
import Link from "next/link";

const TracksPage = () => {
  const [tooltip, setTooltip] = useState({ display: 'none', top: 0, left: 0 });

  const handleMouseMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setTooltip({
      display: 'block', 
      top: e.clientY + 15, 
      left: e.clientX + 15, 
    });
  };

  const handleMouseLeave = () => {
    setTooltip({
      display: 'none', 
      top: 0,
      left: 0,
    });
  };


  return (
    <div className="bg-beats" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
    <div className="container flex flex-col items-center">
        <span className="text-[40px] font-bold">Beats</span>
        <HeaderBeats />
        <Link href="/playlist" className="mt-[10px] mb-[10px] text-[20px] border-[3px] border-[#F75370] rounded-lg bg-black px-1 py-[2px] flex items-center gap-1 transition-[300ms] hover:border-white ">
          <span className="py-2">All Beats</span>
        </Link>
        <div
          style={{
            display: tooltip.display,
            position: 'fixed',
            top: tooltip.top,
            left: tooltip.left,
            pointerEvents: 'none', 
          }}
          className="p-2 bg-[#F75370] rounded shadow-lg text-white text-sm font-bold"
        >
          Click to play
        </div>
      </div>
    </div>
  );
};

export default TracksPage;
