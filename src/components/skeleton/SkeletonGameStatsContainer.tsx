import { Skeleton } from "../ui/skeleton";

export default function SkeletonGameStatsContainer() {
  return (
    <div className="flex items-center justify-evenly flex-wrap rounded-md overflow-hidden mt-3 w-full bg-gray-500">
      <div className="flex flex-col justify-center gap-1 items-center p-2">
        <Skeleton className="w-full h-5 min-w-40" />

        <div>
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-full h-5" />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-1 items-center p-2">
        <Skeleton className="w-full h-5 min-w-40" />

        <div>
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-full h-5" />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-1 items-center p-2">
        <Skeleton className="w-full h-5 min-w-40" />

        <div>
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-full h-5" />
        </div>
      </div>
    </div>
  );
}
