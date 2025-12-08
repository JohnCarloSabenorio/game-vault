"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { useEffect, useState } from "react";
import ImageMediaItem from "./ImageMediaItem";
import VideoMediaItem from "./VideoMediaItem";
export default function MediaCarousel({
  screenshots,
  trailers,
}: {
  trailers: any;
  screenshots: any;
}) {
  const [displayUrl, setDisplayUrl] = useState(
    `https://www.youtube.com/embed/${trailers[0].video_id}`
  );
  const [activeMediaItem, setActiveMediaItem] = useState(trailers[0].id);
  const [isImage, setIsImage] = useState(false);

  function handleMediaChange(url: string, id: any, isAnImage: boolean) {
    setActiveMediaItem(id);
    setDisplayUrl(url);
    setIsImage(isAnImage);
  }

  return (
    <div>
      <div>
        {isImage ? (
          <Image
            width={200}
            height={200}
            src={displayUrl}
            alt="Image"
            className="w-full min-h-100 rounded-md"
          />
        ) : (
          <iframe
            src={displayUrl}
            title={`Trailer`}
            className="w-full min-h-100"
          ></iframe>
        )}
      </div>
      <div className="mt-3 bg-gray-800 w-full p-1 rounded-md overflow-x-scroll flex gap-1">
        {(trailers || []).map((video: any, idx: number) => {
          return (
            <VideoMediaItem
              key={idx}
              video={video}
              activeMedia={activeMediaItem}
              handleClick={handleMediaChange}
            />
          );
        })}
        {(screenshots || []).map((img: any, idx: number) => {
          return (
            <ImageMediaItem
              key={idx}
              img={img}
              activeMedia={activeMediaItem}
              handleClick={handleMediaChange}
            />
          );
        })}
      </div>
    </div>
  );
}
