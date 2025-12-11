/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";

export default function ImageMediaItem({
  img,
  handleClick,
  activeMedia,
}: {
  img: any;
  activeMedia: any;
  handleClick: any;
}) {
  return (
    <img
      className={`w-25 h-15 rounded-md border-3 object-cover ${
        activeMedia == img.id ? "border-white" : "border-black"
      } cursor-pointer`}
      onClick={() =>
        handleClick(
          img.url
            ? `https:${img.url.replace("t_thumb", "t_1080p")}`
            : "/images/placeholder.png",
          img.id,
          true
        )
      }
      src={`https:${img.url.replace("t_thumb", "t_1080p")}`}
      alt="Image"
    />
  );
}
