/* eslint-disable @typescript-eslint/no-explicit-any */
export default function DateUpdatedCard({
  date,
  label,
}: {
  date: any;
  label: string;
}) {
  return (
    <div className="flex mt-3 border-2 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
      <p className="">
        {label}: {date}
      </p>
    </div>
  );
}
