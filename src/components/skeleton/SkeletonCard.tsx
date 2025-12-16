import { Skeleton } from "@/components/ui/skeleton";
import GameCardDescription from "../main/GameCardDescription";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col justify-end bg-gray-600/60 p-3 rounded-md cursor-pointer w-full">
      {/* Image */}
      <Skeleton className="mb-3 h-[300px] w-full rounded-md" />

      {/* Description */}
      <Skeleton className="w-full rounded-md h-4 mt-1" />
      <Skeleton className="w-full rounded-md h-6 mt-2" />
    </div>
  );
}
