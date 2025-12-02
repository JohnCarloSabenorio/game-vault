import StarIcon from "@mui/icons-material/Star";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GameStatsItem from "./GameStatsItem";
export default function GameStatsContainer() {
  return (
    <div className="flex flex-wrap border-2 rounded-md overflow-hidden mt-3 w-full bg-gray-500">
      {/* Rating */}
      <div className="flex flex-col gap-1 items-center p-2 border-r-2">
        <p className="font-bold flex items-center bg-blue-500 rounded-md p-1">
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
            <p className="text-3xl">10.0</p>
          </div>
        </div>
        <p className="font-bold text-center">4,000 Users</p>
      </div>

      <div className="flex flex-wrap flex-1 justify-evenly p-3">
        {/* Status */}
        <GameStatsItem label="Status" value="Released" />
        {/* Hypes */}
        <GameStatsItem label="Hypes" value="1000" />

        {/* Release Date */}
        <GameStatsItem label="Release Date" value="01/30/2025" />

        {/* Want */}
        <GameStatsItem label="Wants" value="300" />

        {/* Playing */}
        <GameStatsItem label="Playing" value="400000" />

        {/* Played */}
        <GameStatsItem label="Played" value="400000" />
      </div>
    </div>
  );
}
