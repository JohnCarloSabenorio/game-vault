import SkeletonRow from "@/components/skeleton/SkeletonRow";
import TableHeaders from "@/components/top-100/TableHeaders";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="flex flex-col my-10 min-h-screen text-white">
      <h1 className="mt-10 mb-3 text-3xl font-bold text-center">Top 100</h1>
      {/* Table */}
      <div className="w-full lg:max-w-[1500px] rounded-md mx-auto overflow-x-scroll hide-scrollbar">
        <table className="w-full border-collapse">
          <TableHeaders />
          <tbody className="bg-gray-800">
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
          </tbody>
        </table>
      </div>
    </div>
  );
}
