/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import GameTag from "./GameTag";
import GameScore from "./GameScore";
import TableRow from "./TableRow";
import { use } from "react";
export default function TableBody({ topGames }: { topGames: Promise<any> }) {
  const topGamesData = use(topGames);

  return (
    <tbody className="bg-gray-800">
      {topGamesData.map((data: any, idx: number) => {
        if (data == null) {
          return;
        }
        return <TableRow topNumber={idx + 1} gameData={data} key={idx} />;
      })}
    </tbody>
  );
}
