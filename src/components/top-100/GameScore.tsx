"use client";
import StarIcon from "@mui/icons-material/Star";
export default function GameScore({ score }: { score: number }) {
  return (
    <div>
      <StarIcon sx={{ color: "yellow" }} /> {score}
    </div>
  );
}
