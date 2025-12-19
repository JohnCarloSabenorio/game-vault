import { Skeleton } from "../ui/skeleton";

export default function SkeletonSupportedLanguages() {
  return (
    <div className="flex mt-3 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
      <table className="border-separate border-spacing-x-3 border-spacing-y-2">
        <thead className="text-center">
          <tr>
            <td>
              {" "}
              <Skeleton className="w-15 h-5" />
            </td>
            <td>
              {" "}
              <Skeleton className="w-15 h-5" />
            </td>
            <td>
              {" "}
              <Skeleton className="w-15 h-5" />
            </td>
            <td>
              {" "}
              <Skeleton className="w-15 h-5" />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
          </tr>
          <tr className="text-center">
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
          </tr>
          <tr className="text-center">
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
          </tr>
          <tr className="text-center">
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
          </tr>
          <tr className="text-center">
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
            <td className="">
              <Skeleton className="w-15 h-5" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
