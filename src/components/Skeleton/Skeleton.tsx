import React from "react";

interface SkeletonProps {
  shape?: "square" | "circle" | "rounded" | "none";
}

const Skeleton: React.FC<SkeletonProps> = ({ shape = "rounded" }) => {
  const shapeClass =
    shape === "circle"
      ? "rounded-full"
      : shape === "square"
      ? ""
      : shape === "rounded"
      ? "rounded-md"
      : "";

  return (
    <div className="w-full sm:max-w-sm  rounded-md 2xl:max-w-2xl h-auto px-4 py-4 flex gap-2 bg-zinc-100">
      <div
        className={`w-14 h-14 ${shapeClass} bg-gray-300 animate-pulse`}
      ></div>
      <div className="flex flex-col gap-2 mt-2">
        <div
          className={`w-32 md:w-40 lg:w-48 xl:w-56 2xl:w-64 h-4 ${shapeClass} bg-gray-300 animate-pulse`}
        ></div>

        <div
          className={`w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-72 h-4 ${shapeClass} bg-gray-300 animate-pulse`}
        ></div>
      </div>
    </div>
  );
};

export default Skeleton;
