
interface SkeletonProps {
    shape?: "square" | "circle" | "rounded" | "none";
  }
const SkeletonProfile: React.FC<SkeletonProps> = ({ shape = "rounded" }) => {
    const shapeClass =
      shape === "circle"
        ? "rounded-full"
        : shape === "square"
        ? ""
        : shape === "rounded"
        ? "rounded-md"
        : "";
  
  return (
<div
        className={`w-14 h-14 ${shapeClass} bg-gray-300 animate-pulse`}
      ></div>
  )
}

export default SkeletonProfile
