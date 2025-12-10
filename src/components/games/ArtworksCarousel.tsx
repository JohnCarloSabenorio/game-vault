/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import DotNavigationButton from "@/components/main/DotNavigationButton";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ArtworksCarousel({ artworks }: { artworks: any[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const update = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", update);

    return () => {
      api.off("select", update);
    };
  }, [api]);

  function handleNavClick(target: number) {
    if (api) {
      api.scrollTo(target);
    }
  }
  return (
    <Carousel
      className="mx-auto"
      setApi={setApi}
      // opts={{
      //   align: "start",
      //   loop: true,
      // }}
    >
      <CarouselContent>
        {artworks.length != 0 ? (
          artworks.map((data, idx) => {
            return (
              <CarouselItem key={idx} className="group transition-all relative">
                <img
                  className="w-full aspect-video rounded-md object-center"
                  src={data
                    .find(
                      (art: { width: number; height: number }) =>
                        art.width > art.height
                    )
                    .url.replace("t_thumb", "t_1080p")}
                  alt="Gamevault banner"
                />
              </CarouselItem>
            );
          })
        ) : (
          <CarouselItem>
            <img
              className="w-full aspect-video rounded-md object-center"
              src="/images/placeholder.png"
              alt="Gamevault banner"
            />
          </CarouselItem>
        )}
      </CarouselContent>
      <div className="absolute bottom-5 text-white -translate-x-1/2 left-1/2">
        <div className="flex gap-3">
          {artworks.map((_, idx) => {
            return (
              <DotNavigationButton
                key={idx}
                handleClick={handleNavClick}
                current={current}
                target={idx}
              />
            );
          })}
        </div>
      </div>
    </Carousel>
  );
}
