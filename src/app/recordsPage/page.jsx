"use client";

import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import PopupRecords from "@/components/PopupRecords/PopupRecords";
import RecordsTracks from "@/components/RecordsTracks/RecordsTracks";

const Records = () => {
  // const {data:session} = useSession();
  // console.log(session);
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    // session ? (
    //   <div className='block mt-16'>Привет, {session.user.name}! Вы авторизованы.</div>
    // ) : (
    //   <div className='block mt-16'>Вы не авторизованы</div>
    // )
    <div className="block mt-16">
      <div className="container">
        <div className="flex justify-between">
          <span className="text-[40px] font-bold">Your records</span>
          <button
            className="text-[20px] border-[3px]  border-[#F75370] rounded-lg bg-black p-1  transition-[300ms] hover:border-white"
            onClick={() => setPopupOpen(true)}
          >
            Add Track
          </button>

          {isPopupOpen && <PopupRecords onClose={() => setPopupOpen(false)} />}
        </div>
        <div className="text-xl border-b-[2px] border-t-[2px] text-center border-[#4c4b4b] text-[#8c8b8b] p-4 mt-8">
          <span className="">
            At the moment there is no way to listen to the tracks. Listening is
            possible only after downloading the media file. I apologize for the
            inconvenience
          </span>
        </div>
        <div className="flex border-b border-gray-300 py-2 mt-[40px] ">
          <span className="flex-1 text-gray-400 uppercase text-sm mb-2">
            Title
          </span>
          <span className="flex-1 text-gray-400 uppercase text-sm mb-2">
            BPM
          </span>
          <span className="flex-1 text-gray-400 uppercase text-sm mb-2">
            Options
          </span>
        </div>

        <RecordsTracks />
      </div>
    </div>
  );
};

export default Records;
