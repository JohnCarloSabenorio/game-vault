/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function GameCarousel() {
  return (
    <Carousel className="w-full">
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
      <div className="absolute bottom-0 text-white -translate-x-1/2 left-1/2"><p>dot nav here...</p></div>
    </Carousel>
  );
}
