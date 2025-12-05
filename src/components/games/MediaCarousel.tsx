"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { useState } from "react";
export default function MediaCarousel({
  screenshots,
  trailer,
}: {
  trailer: any;
  screenshots: any;
}) {
  const [displayUrl, setDisplayUrl] = useState("/images/placeholder.png");
  return (
    <div>
      <div>
        <Image
          width={200}
          height={200}
          src={displayUrl}
          alt="Image"
          className="w-full h-120 rounded-md"
        />
      </div>

      <div className="mt-3 bg-gray-800 w-full p-1 rounded-md overflow-x-scroll flex gap-1">
        {(screenshots || []).map((img: any, idx: number) => {
          return (
            <Image
              key={idx}
              width={300}
              height={250}
              className="w-32 h-15 rounded-md border-3 border-black cursor-pointer"
              onClick={() =>
                setDisplayUrl(`https:${img.url.replace("t_thumb", "t_4k")}`)
              }
              src={`https:${img.url.replace("t_thumb", "t_4k")}`}
              alt="Image"
            />
          );
        })}
      </div>
    </div>
  );
}
