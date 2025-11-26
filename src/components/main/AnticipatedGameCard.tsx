/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Rating } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
export default function AnticipatedGameCard({ game }: { game: any }) {
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
    <div className="bg-gray-600/60 rounded-md p-3 flex items-center gap-5">
      <img
        className="w-20 object-cover object-center rounded-md"
        src={game.cover.url.replace("t_thumb", "t_4k")}
        alt="Video game image"
      />
      <div className="flex flex-col">
        <p>{game.name}</p>
        <p className="italic">{fullDate}</p>
      </div>
    </div>
  );
}
