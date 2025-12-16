import { Skeleton } from "@/components/ui/skeleton";

export default function HorizontalSkeletonCard() {
  return (
    <div className="flex-1 bg-gray-600/60 rounded-md p-3 flex items-center gap-5">
      <Skeleton className="w-26 h-30 rounded-md" />
      <div className="flex flex-col w-full gap-1">
        <Skeleton className="w-full rounded-md h-4 mt-1" />
        <Skeleton className="w-full rounded-md h-4 mt-1" />
      </div>
    </div>
  );
}
