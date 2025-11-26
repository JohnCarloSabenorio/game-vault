/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState, use } from "react";
import DotNavigationButton from "@/components/main/DotNavigationButton";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function FeaturedGameCarousel({
  newGames,
}: {
  newGames: Promise<any[]>;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const newGamesData = use(newGames);

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
    console.log("clicked");
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
        {newGamesData.map((data, idx) => {
          return (
            <CarouselItem key={idx} className="group transition-all relative">
              <img
                className="w-full aspect-video rounded-md object-center"
                src={data.artworks
                  .find(
                    (art: { width: number; height: number }) =>
                      art.width > art.height
                  )
                  .url.replace("t_thumb", "t_4k")}
                alt="Gamevault banner"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="absolute bottom-5 text-white -translate-x-1/2 left-1/2">
        <div className="flex gap-3">
          {newGamesData.map((data, idx) => {
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
