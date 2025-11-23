"use client";
import { Rating } from "@mui/material";
export default function UpcomingGameCard({
  name,
  rating,
}: {
  name: string;
  rating: number;
}) {
  return (
    <div className="bg-red-200 rounded-md p-3 flex items-center gap-5">
      <img
        className="w-20 rounded-md"
        src={"/images/placeholder.jpg"}
        alt="Video game image"
      />
      <div className="">
        <p>{name}</p>
        <Rating name="half-rating-read" defaultValue={rating} readOnly />
      </div>
    </div>
  );
}
