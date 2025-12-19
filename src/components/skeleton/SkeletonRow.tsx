import { Skeleton } from "../ui/skeleton";

export default function SkeletonRow() {
  return (
    <tr className="">
      {/* Number */}
      {/* Game Image and Title */}
      <td className="p-3 text-center text-xl">
        <Skeleton className="w-full h-5" />
      </td>
      <td className="flex gap-3 items-center w-96 p-3">
        <Skeleton className="w-[300px] h-[300px]" />

        <Skeleton className="w-30 h-5" />
      </td>

      {/* Platform */}
      <td className="">
        <div className="flex justify-center gap-2 w-60 flex-wrap mx-auto">
          <Skeleton className="w-full h-5" />
        </div>
      </td>

      {/* Genre */}
      <td className="">
        <div className="flex justify-center gap-2 w-60 flex-wrap mx-auto">
          <Skeleton className="w-full h-5" />
        </div>
      </td>
      {/* Score */}
      <td className="p-3">
        <Skeleton className="w-full h-5" />
      </td>
      {/* Release Date */}
      <td className="text-center p-3">
        <Skeleton className="w-full h-5" />
      </td>
    </tr>
  );
}
