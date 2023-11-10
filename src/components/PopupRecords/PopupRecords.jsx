import React from "react";
import { useSession } from "next-auth/react";
import FormRecords from "../FormRecords/FormRecords";

const PopupRecords = ({ onClose }) => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
        <div className="bg-black p-4 rounded min-w-[320px] border-[3px]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Add Music</span>
            <button type="button" className="ml-2" onClick={onClose}>
              <img src="/cancel.png" alt="" className="w-[20px]" />
            </button>
          </div>
          <FormRecords/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
        <div className="bg-black p-4 rounded w-[400px] border-[3px]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Authorization</span>
            <button type="button" className="ml-2" onClick={onClose}>
              <img src="/cancel.png" alt="" className="w-[20px]" />
            </button>
          </div>
          <div className="block mt-16 text-white text-center text-xl">
            Please, log in to add tracks
          </div>
        </div>
      </div>
    );
  }
};

export default PopupRecords;
