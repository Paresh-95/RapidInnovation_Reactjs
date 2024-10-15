import React from "react";

const SkeletonCard = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] h-[470px] flex flex-col animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>

      <div className="p-4 flex-grow">
        <div className="h-6 bg-gray-300 rounded mb-4"></div>

        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between p-4">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>

        <div className="w-20 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
