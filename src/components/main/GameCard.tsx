/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import GameCardDescription from "./GameCardDescription";

export default function GameCard({ gameData }: { gameData: any }) {
  return (
    <div className="bg-gray-600/60 p-3 rounded-md cursor-pointer h-full">
      {/* Image */}
      <Image
        width={300}
        height={300}
        src={"https:" + gameData.cover.url.replace("t_thumb", "t_4k")}
        alt="Video game image"
        className="mb-3 rounded-md"
      />
      {/* Description */}
      <GameCardDescription
        name={gameData.name}
        ratingCount={gameData.total_rating_count}
        ratingAverage={gameData.total_rating / 10}
      />
    </div>
  );
}
