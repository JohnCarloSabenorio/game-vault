/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState, use } from "react";
import DotNavigationButton from "@/components/main/DotNavigationButton";
import GameCard from "./GameCard";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function GameCardCarousel({
  gamesData,
}: {
  gamesData: Promise<any[]>;
}) {
  const games = use(gamesData);

  return (
    <Carousel
      className="mx-auto mt-3 p-3"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {games.map((data, idx) => {
          return (
            <CarouselItem
              key={idx}
              className="group transition-all relative basis-1/1 sm:basis-1/2 md:basis-1/5 lg:basis-1/6"
            >
              <GameCard gameData={data} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
