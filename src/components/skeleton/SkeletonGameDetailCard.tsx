import { Skeleton } from "../ui/skeleton";

export default function SkeletonGameDetailCard() {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-gray-500 flex-1 rounded-md p-3">
        <Skeleton className="w-full h-5" />
        <div className="flex gap-1 flex-wrap justify-center mt-3">
          <Skeleton className="w-20 h-6" />
          <Skeleton className="w-20 h-6" />
          <Skeleton className="w-20 h-6" />
        </div>
      </div>
    </div>
  );
}
