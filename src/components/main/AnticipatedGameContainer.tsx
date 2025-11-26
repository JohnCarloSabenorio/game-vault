import { use } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */
import AnticipatedGameCard from "./AnticipatedGameCard";

export default function AnticipatedGameContainer({
  gamesData,
}: {
  gamesData: Promise<any[]>;
}) {
  const anticipatedGames = use(gamesData);

  return (
    <div className="flex flex-col justify-start gap-3 px-3 text-white">
      <h1 className="text-xl font-bold">Most Anticipated</h1>

      {anticipatedGames.map((data, idx) => {
        return <AnticipatedGameCard key={idx} game={data} />;
      })}
    </div>
  );
}
