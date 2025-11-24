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

export default function GameCarousel({
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
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full"
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {newGamesData.map((data, idx) => {
          return (
            <CarouselItem key={idx} className="group transition-all relative">
              <img
                className="w-full aspect-video rounded-md"
                src={data.artworks[0].url.replace("t_thumb", "t_4k")}
                alt="Gamevault banner"
              />
              <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 bg-gray-800/60 transition-all opacity-0 group-hover:opacity-100">
                <h1 className="text-center text-white text-5xl">{data.name}</h1>
                <button className="p-3 rounded-md text-3xl bg-white mt-3 cursor-pointer">
                  Learn More
                </button>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="absolute bottom-5 text-white -translate-x-1/2 left-1/2">
        <div className="flex gap-3 justify-center items-center">
          <DotNavigationButton
            handleClick={handleNavClick}
            current={current}
            target={0}
          />
          <DotNavigationButton
            handleClick={handleNavClick}
            current={current}
            target={1}
          />
          <DotNavigationButton
            handleClick={handleNavClick}
            current={current}
            target={2}
          />
          <DotNavigationButton
            handleClick={handleNavClick}
            current={current}
            target={3}
          />
          <DotNavigationButton
            handleClick={handleNavClick}
            current={current}
            target={4}
          />
        </div>
      </div>
    </Carousel>
  );
}
