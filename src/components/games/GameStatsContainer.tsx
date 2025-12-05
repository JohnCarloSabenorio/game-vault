"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import StarIcon from "@mui/icons-material/Star";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GameStatsItem from "./GameStatsItem";
export default function GameStatsContainer({
  total_rating,
  total_rating_count,
  igdb_rating,
  igdb_rating_count,
  critic_rating,
  critic_rating_count,
}: {
  total_rating: string;
  total_rating_count: number;
  igdb_rating: string;
  igdb_rating_count: number;
  critic_rating: string;
  critic_rating_count: number;
}) {
  return (
    <div className="flex justify-evenly flex-wrap border-2 rounded-md overflow-hidden mt-3 w-full bg-gray-500">
      {/* Total Rating */}
      <div className="flex flex-col justify-center gap-1 items-center p-2">
        <p className="font-bold flex items-center bg-red-600 rounded-md p-1">
          {" "}
          <StarIcon
            sx={{
              width: 25,
              height: 25,
            }}
          />{" "}
          Total&nbsp;Rating
        </p>
        <div className="flex items-center">
          <div className="">
            <p className="text-3xl">{total_rating}</p>
          </div>
        </div>
        <p className="font-bold text-center">{total_rating_count} Users</p>
      </div>

      {/* IGDB Rating */}
      <div className="flex flex-col justify-center gap-1 items-center p-2">
        <p className="font-bold flex items-center bg-purple-600 rounded-md p-1">
          {" "}
          IGDB&nbsp;Rating
        </p>
        <div className="flex items-center">
          <div className="">
            <p className="text-3xl">{igdb_rating}</p>
          </div>
        </div>
        <p className="font-bold text-center">{igdb_rating_count} Users</p>
      </div>

      <div className="flex flex-col justify-center gap-1 items-center p-2">
        <p className="font-bold flex items-center bg-green-600 rounded-md p-1">
          {" "}
          External&nbsp;Critic&nbsp;Score
        </p>
        <div className="flex items-center">
          <div className="">
            <p className="text-3xl">{critic_rating}</p>
          </div>
        </div>
        <p className="font-bold text-center">{critic_rating_count} Users</p>
      </div>
    </div>
  );
}
