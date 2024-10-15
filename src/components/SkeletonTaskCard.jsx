import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-gray-200 shadow-lg rounded-lg p-6 w-full  max-w-md flex flex-col h-[220px] animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="flex space-x-2 mb-4">
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      </div>
      <div className="mt-auto flex items-center">
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
