import GameTag from "../top-100/GameTag";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function GameDetailCard({
  data,
  header,
}: {
  data: any;
  header: string;
}) {
  return (
    <div className="bg-gray-500 flex-1 rounded-md p-3">
      <h1 className="">{header}</h1>
      <div className="flex gap-1 flex-wrap">
        {data ? (
          data.map((data: any, idx: number) => {
            return <GameTag key={idx} label={data.name} />;
          })
        ) : (
          <p className="font-bold">N/A</p>
        )}
      </div>
    </div>
  );
}
