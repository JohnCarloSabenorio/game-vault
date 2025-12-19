/* eslint-disable @typescript-eslint/no-explicit-any */
export default function DateCard({
  date,
  label,
}: {
  date: any;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center mt-3 rounded-md gap-3 justify-center flex-wrap w-full p-3 bg-gray-500">
      <div className="mt-3">
        <p className="flex flex-col justify-center font-semibold">{label}</p>
      </div>
      <div>{date}</div>
    </div>
  );
}
