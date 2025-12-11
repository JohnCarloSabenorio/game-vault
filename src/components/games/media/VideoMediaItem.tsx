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
    <div
      className={`w-25 shrink-0 h-15 relative cursor-pointer`}
      onClick={() =>
        handleClick(
          `https://www.youtube.com/embed/${video.video_id}`,
          video.id,
          false
        )
      }
    >
      <Image
        width={30}
        height={30}
        src={"/images/icons/youtube.png"}
        className="absolute text-red-500 text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        alt="Youtube Icon"
      />
      <img
        className={`w-full h-full rounded-md object-cover border-3 ${
          activeMedia == video.id ? "border-white" : "border-black"
        } cursor-pointer`}
        src={`https://img.youtube.com/vi/${video.video_id}/0.jpg`}
        alt="Trailer of the game"
      />
    </div>
  );
}
