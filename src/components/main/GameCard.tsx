/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import GameCardDescription from "./GameCardDescription";
import { useRouter } from "next/navigation";
export default function GameCard({ gameData }: { gameData: any }) {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-end bg-gray-600/60 p-3 rounded-md cursor-pointer h-full w-fit">
      {/* Image */}
      <Image
        width={300}
        height={300}
        src={
          gameData?.cover?.url
            ? `https:${gameData.cover.url.replace("t_thumb", "t_1080p")}`
            : "/images/placeholder.jpg"
        }
        alt="Video game image"
        className="mb-3 w-full h-full rounded-md"
      />
      {/* Description */}
      <GameCardDescription
        name={gameData.name}
        ratingCount={gameData.total_rating_count}
        ratingAverage={gameData.total_rating / 10}
      />
      <a href={`/games/${gameData.id}`} className="cursor-pointer">
        <button
          // onClick={() => router.push(`/games/${gameData.id}`)}
          className="bg-gray-400 w-full rounded-md p-2 mt-1 font-semibold cursor-pointer"
        >
          Visit
        </button>
      </a>
    </div>
  );
}
