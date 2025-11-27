/* eslint-disable @next/next/no-img-element */
import AnticipatedGameContainer from "@/components/main/AnticipatedGameContainer";
import FeaturedGameCarousel from "@/components/main/FeaturedGameCarousel";
import GameCardCarousel from "@/components/main/GameCardCarousel";
import GameCarouselHeader from "@/components/main/GameCarouselHeader";
import {
  getMostAnticipatedGames,
  getNewlyReleasedGames,
  getPopularGames,
} from "@/lib/api/igdb";
import { Suspense } from "react";
export default async function Home() {
  const newGames = getNewlyReleasedGames();
  const anticipatedGames = getMostAnticipatedGames();
  const igdbMostVisited = getPopularGames(1);
  const igdbMostPlayed = getPopularGames(4);
  const steamPeakPlayers = getPopularGames(5);
  const steamMostReviewed = getPopularGames(8);
  return (
    <div className="min-h-screen mt-30">
      <main className="">
        <div className="flex justify-between flex-col lg:flex-row mt-3 p-5">
          {/* Carousel (New Releases) */}
          <div className="flex flex-col justify-start flex-1">
            <Suspense
              fallback={
                <div className="h-full flex items-center justify-center">
                  <p className="text-center text-white text-3xl">Loading...</p>
                </div>
              }
            >
              <FeaturedGameCarousel newGames={newGames} />
            </Suspense>
          </div>
          {/* Top 6 most popular */}
          {/* Card Container */}

          <Suspense
            fallback={
              <div className="h-full flex items-center justify-center">
                <p className="text-center text-white text-3xl">Loading...</p>
              </div>
            }
          >
            <AnticipatedGameContainer gamesData={anticipatedGames} />
          </Suspense>
        </div>

        {/* Most Popular Video Games */}
        <GameCarouselHeader header="IGDB Most Visited" link="#" />
        <GameCardCarousel gamesData={igdbMostVisited} />

        <GameCarouselHeader header="IGDB Most Played" link="#" />
        <GameCardCarousel gamesData={igdbMostPlayed} />

        <GameCarouselHeader header="Steam 24hrs Peak Players" link="#" />
        <GameCardCarousel gamesData={steamPeakPlayers} />

        <GameCarouselHeader header="Steam Most Reviewed" link="#" />
        <GameCardCarousel gamesData={steamMostReviewed} />
      </main>
    </div>
  );
}
