import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function GameCardDescription({
  name,
  ratingCount,
  ratingAverage,
}: {
  name: string;
  ratingCount: number;
  ratingAverage: number;
}) {
  return (
    <div className="text-white">
      {/* Name */}
      <div className="flex justify-between flex-wrap">
        <p className="font-semibold truncate md:max-w-30 lg:max-w-40">{name}</p>

        <p className="flex items-center justify-center gap-1">
          <StarIcon sx={{ color: "yellow" }} /> {ratingAverage.toFixed(1)}
        </p>
      </div>
    </div>
  );
}
