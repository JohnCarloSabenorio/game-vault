import StarIcon from "@mui/icons-material/Star";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
export default function RatingContainer() {
  return (
    <div className="flex flex-wrap justify-evenly border-2 gap-3 rounded-md overflow-hidden mt-3 w-full">
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

      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center items-center p-3">
          {/* Status */}
          <div className="flex gap-1 items-center p-2">
            <p className="flex items-center"> Status:</p>
            <div className="flex items-center">
              <div className="">
                <p className="text-3xl font-bold">Released</p>
              </div>
            </div>
          </div>
          {/* Hypes */}
          <div className="flex gap-1 items-center p-2">
            <p className="flex items-center"> Hypes:</p>
            <div className="flex items-center">
              <div className="">
                <p className="text-3xl font-bold">10.0</p>
              </div>
            </div>
          </div>
          {/* Release Date */}
          <div className="flex gap-1 items-center p-2">
            <p className="flex items-center"> Release Date:</p>
            <div className="flex items-center">
              <div className="">
                <p className="text-3xl font-bold">January 30, 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly">
          <div className="flex-1">
            <p className="mt-3">
              <span className="font-bold">Genres: </span>
              Horror,
            </p>
          </div>
          <div className="flex-1">
            <p className="mt-3">
              <span className="font-bold">Platforms: </span>
              PC, XBox
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
