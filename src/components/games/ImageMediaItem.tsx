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
    <Image
      width={300}
      height={250}
      className={`w-32 h-15 rounded-md border-3 ${
        activeMedia == img.id ? "border-white" : "border-black"
      } cursor-pointer`}
      onClick={() =>
        handleClick(
          img.url
            ? `https:${img.url.replace("t_thumb", "t_4k")}`
            : "/images/placeholder.png",
          img.id,
          true
        )
      }
      src={`https:${img.url.replace("t_thumb", "t_4k")}`}
      alt="Image"
    />
  );
}
