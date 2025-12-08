/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import GameCardDescription from "./GameCardDescription";

export default function GameCard({ gameData }: { gameData: any }) {
  return (
    <div className="bg-gray-600/60 p-3 rounded-md cursor-pointer h-full w-fit">
      {/* Image */}
      <Image
        width={300}
        height={300}
        src={
          gameData?.cover?.url
            ? `https:${gameData.cover.url.replace("t_thumb", "t_4k")}`
            : "/images/placeholder.jpg"
        }
        alt="Video game image"
        className="mb-3 rounded-md"
      />
      {/* Description */}
      <GameCardDescription
        name={gameData.name}
        ratingCount={gameData.total_rating_count}
        ratingAverage={gameData.total_rating / 10}
      />
      <button className="bg-gray-400 w-full rounded-md p-2 mt-1 font-semibold">
        Visit
      </button>
    </div>
  );
}
