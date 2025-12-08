import { use } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */
import HorizontalGameCard from "./HorizontalGameCard";

export default function AnticipatedGameContainer({
  gamesData,
}: {
  gamesData: any[];
}) {
  return (
    <div className="flex flex-col gap-3 px-3 text-white">
      <h1 className="main-header">Most Anticipated</h1>

      <div className="gap-3 grid  grid-cols-1 md:grid-cols-2">
        {gamesData.map((data, idx) => {
          return <HorizontalGameCard key={idx} game={data} />;
        })}
      </div>
    </div>
  );
}
