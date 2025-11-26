/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState, use } from "react";
import GameCard from "./GameCard";

export default function GameContainer({ data }: { data: Promise<any[]> }) {
  const [allGames, setAllGames] = useState<any[]>([]);

  const gamesData = use(data);

  useEffect(() => {
    setAllGames(gamesData);
    console.log("games data:", gamesData);
  }, [gamesData]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-gols-4 lg:grid-cols-6 gap-3 mt-3 p-3">
      {allGames.map((data, idx) => {
        return <GameCard key={idx} gameData={data} />;
      })}
    </div>
  );
}
