import React from "react";

interface ISpinnerProps {
  height?: string;
  weight?: string;
}

const Spinner: React.FC<ISpinnerProps> = ({
  height = "24px",
  weight = "24px",
}) => {
  return (
    <div style={{ height: height, width: weight }} className="flex justify-center items-center">
      <div style={{ height: height, width: weight }} className="border-2 border-t-2 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
