import { Skeleton } from "../ui/skeleton";

export default function SkeletonMediaCarousel() {
  return (
    <div className="flex-1">
      <div>
        <Skeleton className="w-full h-full min-h-90" />
      </div>
      <div className="mt-3 bg-gray-800 w-full p-1 rounded-md overflow-x-scroll flex gap-1 scrollbar">
        <Skeleton className="w-25 h-15" />
        <Skeleton className="w-25 h-15" />
        <Skeleton className="w-25 h-15" />
        <Skeleton className="w-25 h-15" />
        <Skeleton className="w-25 h-15" />
      </div>
    </div>
  );
}
