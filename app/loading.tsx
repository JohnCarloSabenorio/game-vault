import GameCarouselHeader from "@/components/main/GameCarouselHeader";
import SkeletonCardCarousel from "@/components/skeleton/SkeletonCardCarousel";
import SkeletonCardContainer from "@/components/skeleton/SkeletonCardContainer";

export default function loading() {
  return (
    <main className="mt-5 px-10">
      <div className="flex flex-col gap-3 lg:flex-row w-full mt-25 items-center text-white p-5 flex-1">
        <div className="flex-1">
          <h1 className="text-6xl font-bold text-cyan-300 galindo">
            GameVault
          </h1>
          <h1 className="text-4xl font-bold mt-3 galindo">
            Find and Explore Your Favorite Games!
          </h1>
          <p className="mt-8">
            GameVault brings together the top games from IGDB and Steam,
            offering a clean and intuitive way to browse popular titles and
            search for specific games. It also serves as a hands-on project for
            enhancing my Next.js development skills while building a real-world
            application.
          </p>
        </div>
        <div className="w-full flex-1 rounded-md">
          <img
            className="rounded-md"
            src="/images/gamevault-display.jpeg"
            alt="gamevault-display"
          />
        </div>
      </div>

      <SkeletonCardContainer />
      {/* Most Popular Video Games */}

      <div className="mt-5">
        <GameCarouselHeader header="New Games" link="" />

        <SkeletonCardCarousel />
        <GameCarouselHeader
          header="IGDB Top Active Players"
          link="/top-100/most-active"
        />
        <SkeletonCardCarousel />

        <GameCarouselHeader
          header="IGDB Most Played"
          link="/top-100/most-played"
        />
        <SkeletonCardCarousel />

        <GameCarouselHeader
          header="Steam 24hrs Peak Players"
          link="/top-100/peak-players"
        />
        <SkeletonCardCarousel />

        <GameCarouselHeader
          header="Steam Most Reviewed"
          link="/top-100/most-reviewed"
        />
        <SkeletonCardCarousel />
      </div>
    </main>
  );
}
