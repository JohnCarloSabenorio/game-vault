/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import { useEffect, useState } from "react";
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

export default function GameCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
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
        {Array.from({ length: 5 }).map((_, idx) => {
          return (
            <CarouselItem key={idx}>
              <img
                className="w-full rounded-md"
                src={"/images/gamevault-banner.jpeg"}
                alt="Gamevault banner"
              />
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
