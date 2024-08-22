import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="w-6 h-6 flex justify-center items-center">
      <div className="border-2 border-t-2 border-gray-200 border-t-blue-500 rounded-full animate-spin w-6 h-6"></div>
    </div>
  );
};

export default Spinner;
