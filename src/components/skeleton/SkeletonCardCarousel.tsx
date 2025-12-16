import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import SkeletonCard from "./SkeletonCard";

export default function SkeletonCardCarousel() {
  return (
    <Carousel className="mx-auto mt-3 p-3">
      <CarouselContent className="p-5">
        {Array.from({ length: 7 }).map((_, idx) => (
          <CarouselItem
            key={idx}
            className="group transition-all relative basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
          >
            <SkeletonCard />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
