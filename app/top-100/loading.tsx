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
          </tbody>
        </table>
      </div>
    </div>
  );
}
