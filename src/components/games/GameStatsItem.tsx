export default function GameStatsItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 items-center p-2">
      <p className="flex items-center">{label}</p>
      <div className="flex items-center">
        <div className="">
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}
