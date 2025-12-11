/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Rating } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
export default function HorizontalGameCard({
  game,
  displayDate = true,
}: {
  game: any;
  displayDate: boolean;
}) {
  const fullDate = useMemo(() => {
    if (!game.first_release_date) return "TBA";
    return new Date(game.first_release_date * 1000).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  }, [game.first_release_date]);

  return (
    <a href={`/games/${game.id}`}>
      <div className="flex-1 bg-gray-600/60 rounded-md p-3 flex items-center gap-5 hover:bg-gray-700/60 hover:shadow-[0px_0px_20px_5px_rgba(66,_220,_219,_0.5)] transition-all">
        <Image
          width={300}
          height={300}
          className="w-20 object-cover object-center rounded-md"
          src={`https:${game.cover.url}`.replace("t_thumb", "t_1080p")}
          alt="Video game image"
        />
        <div className="flex flex-col">
          <p>{game.name}</p>
          <p className="italic">{displayDate ? fullDate : ""}</p>
        </div>
      </div>
    </a>
  );
}
