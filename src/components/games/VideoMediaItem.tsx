/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";

export default function VideoMediaItem({
  video,
  handleClick,
  activeMedia,
}: {
  video: any;
  activeMedia: any;
  handleClick: any;
}) {
  return (
    <img
      className={`w-25 shrink-0 h-15 rounded-md object-cover border-3 ${
        activeMedia == video.id ? "border-white" : "border-black"
      } cursor-pointer`}
      onClick={() =>
        handleClick(
          `https://www.youtube.com/embed/${video.video_id}`,
          video.id,
          false
        )
      }
      src={`https://img.youtube.com/vi/${video.video_id}/0.jpg`}
      alt="Trailer of the game"
    />
  );
}
