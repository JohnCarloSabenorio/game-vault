/* eslint-disable @next/next/no-img-element */
import AnticipatedGameContainer from "@/components/main/AnticipatedGameContainer";
import FeaturedGamesCarousel from "@/components/main/FeaturedGamesCarousel";
import GameCardCarousel from "@/components/main/GameCardCarousel";
import GameCarouselHeader from "@/components/main/GameCarouselHeader";
import {
  getMostAnticipatedGames,
  getNewlyReleasedGames,
  getPopularGames,
} from "@/lib/api/igdb";
import { Suspense } from "react";
export default async function Home() {
  const newGames = await getNewlyReleasedGames();
  const anticipatedGames = await getMostAnticipatedGames();
  const topActivePlayers = await getPopularGames(3, 20);
  const igdbMostPlayed = await getPopularGames(4, 20);
  const steamPeakPlayers = await getPopularGames(5, 20);
  const steamMostReviewed = await getPopularGames(8, 20);
  return (
    <main className="mt-5">
      <div className="flex justify-between flex-col lg:flex-row px-5">
        {/* Recent Releases */}
        <div className="flex flex-col justify-start flex-1">
          <Suspense
            fallback={
              <div className="h-full flex items-center justify-center">
                <p className="text-center text-white text-3xl">Loading...</p>
              </div>
            }
          >
            <FeaturedGamesCarousel newGames={newGames} />
          </Suspense>
        </div>
        {/* Top 6 most popular */}
        {/* Card Container */}
      </div>

      <Suspense
        fallback={
          <div className="h-full flex items-center justify-center">
            <p className="text-center text-white text-3xl">Loading...</p>
          </div>
        }
      >
        <AnticipatedGameContainer gamesData={anticipatedGames} />
      </Suspense>

      {/* Most Popular Video Games */}

      <div className="mt-5">
        <GameCarouselHeader
          header="IGDB Top Active Players"
          link="/top-100/most-active"
        />
        <GameCardCarousel lg_basis="basis:1/6" gamesData={topActivePlayers} />

        <GameCarouselHeader
          header="IGDB Most Played"
          link="/top-100/most-played"
        />
        <GameCardCarousel lg_basis="basis:1/6" gamesData={igdbMostPlayed} />

        <GameCarouselHeader
          header="Steam 24hrs Peak Players"
          link="/top-100/peak-players"
        />
        <GameCardCarousel lg_basis="basis:1/6" gamesData={steamPeakPlayers} />

        <GameCarouselHeader
          header="Steam Most Reviewed"
          link="/top-100/most-reviewed"
        />
        <GameCardCarousel lg_basis="basis:1/6" gamesData={steamMostReviewed} />
      </div>
    </main>
  );
}
