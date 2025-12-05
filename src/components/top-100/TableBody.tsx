/* eslint-disable @typescript-eslint/no-explicit-any */

import TableRow from "./TableRow";
import { use } from "react";
export default function TableBody({ topGames }: { topGames: Promise<any> }) {
  const topGamesData = use(topGames);

  console.log("top games:", topGamesData);
  return (
    <tbody className="bg-gray-800">
      {topGamesData.map((data: any, idx: number) => {
        return <TableRow topNumber={idx + 1} gameData={data} key={idx} />;
      })}
    </tbody>
  );
}
