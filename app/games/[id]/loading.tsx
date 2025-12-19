import SkeletonCard from "@/components/skeleton/SkeletonCard";
import SkeletonCardCarousel from "@/components/skeleton/SkeletonCardCarousel";
import SkeletonGameDetailCard from "@/components/skeleton/SkeletonGameDetailCard";
import SkeletonGameStatsContainer from "@/components/skeleton/SkeletonGameStatsContainer";
import SkeletonMediaCarousel from "@/components/skeleton/SkeletonMediaCarousel";
import SkeletonSupportedLanguages from "@/components/skeleton/SkeletonSupportedLanguages";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <main className="text-white min-h-screen bg-gray-800">
      {/* Main Content */}
      <div className="relative text-white max-w-6xl mx-auto p-3 z-10">
        <Skeleton className="w-full max-w-120 h-10 rounded-md mx-auto md:mx-0" />
        <div className="flex flex-col gap-3 md:flex-row mt-5">
          <Skeleton className="w-80 h-100 rounded-md mx-auto" />

          {/* ScreenshotsCarousel */}

          <SkeletonMediaCarousel />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <div className="flex-1">
            <SkeletonGameStatsContainer />

            <div className="grid grid-cols-2 gap-3 mt-3">
              <SkeletonGameDetailCard />
              <SkeletonGameDetailCard />
              <SkeletonGameDetailCard />
              <SkeletonGameDetailCard />
              <SkeletonGameDetailCard />
              <SkeletonGameDetailCard />
            </div>

            <div className="flex mt-3 rounded-md gap-3 flex-wrap w-full p-3 bg-gray-500">
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-full h-5" />
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center mt-3 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
              <Skeleton className="w-full h-10" />
            </div>
            <div className="flex flex-col items-center mt-3 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
              <Skeleton className="w-full h-10" />
            </div>
            {/* Supported Languages */}
            <SkeletonSupportedLanguages />
            <div className="flex items-center mt-3 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
              <Skeleton className="w-50 h-5" />
            </div>
          </div>
        </div>
        {/* DLCs */}
        <h2 className="mt-3 text-xl font-semibold">DLCs</h2>
        <Carousel className="mx-auto mt-3 p-3 w-full">
          <CarouselContent className="p-5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <CarouselItem
                key={idx}
                className="group transition-all relative basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/4"
              >
                <SkeletonCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>{" "}
        {/* Similar Games */}
        <h2 className="mt-3 text-xl font-semibold">Similar Games</h2>
        <Carousel className="mx-auto mt-3 p-3 w-full">
          <CarouselContent className="p-5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <CarouselItem
                key={idx}
                className="group transition-all relative basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/4"
              >
                <SkeletonCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>{" "}
      </div>
    </main>
  );
}
