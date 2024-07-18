import React from "react";

interface ParagraphSkeletonProps {
  width?: string;
  lines?: number;
}
const SkeletonLine: React.FC<ParagraphSkeletonProps> = ({
  width = "",
  lines = 3,
}) => {
  return (
    <div className={`flex flex-col gap-2 w-[${width}]`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={` w-[${width}] h-4 rounded-md bg-gray-300 animate-pulse`}
        ></div>
      ))}
    </div>
  );
};

export default SkeletonLine;
