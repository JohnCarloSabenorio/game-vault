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
  const newGames = await getNewlyReleasedGames(20);
  const anticipatedGames = await getMostAnticipatedGames();
  const topActivePlayers = await getPopularGames(3, 20);
  const igdbMostPlayed = await getPopularGames(4, 20);
  const steamPeakPlayers = await getPopularGames(5, 20);
  const steamMostReviewed = await getPopularGames(8, 20);
  return (
    <main className="mt-5 px-10">
      <div className="flex flex-col gap-3 lg:flex-row w-full mt-25 items-center text-white p-5 flex-1">
        <div className="flex-1">
          <h1 className="text-6xl font-bold text-cyan-300 galindo">
            GameVault
          </h1>
          <h1 className="text-4xl font-bold mt-3 galindo">
            Find, Explore, and Store Your Favorite Games!
          </h1>
          <p className="mt-3">
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

      <AnticipatedGameContainer gamesData={anticipatedGames} />

      {/* Most Popular Video Games */}

      <div className="mt-5">
        <GameCarouselHeader header="New Games" link="" />
        <GameCardCarousel lg_basis="lg:basis-1/6" gamesData={newGames} />
        <GameCarouselHeader
          header="IGDB Top Active Players"
          link="/top-100/most-active"
        />
        <GameCardCarousel
          lg_basis="lg:basis-1/6"
          gamesData={topActivePlayers}
        />

        <GameCarouselHeader
          header="IGDB Most Played"
          link="/top-100/most-played"
        />
        <GameCardCarousel lg_basis="lg:basis-1/6" gamesData={igdbMostPlayed} />

        <GameCarouselHeader
          header="Steam 24hrs Peak Players"
          link="/top-100/peak-players"
        />
        <GameCardCarousel
          lg_basis="lg:basis-1/6"
          gamesData={steamPeakPlayers}
        />

        <GameCarouselHeader
          header="Steam Most Reviewed"
          link="/top-100/most-reviewed"
        />
        <GameCardCarousel
          lg_basis="lg:basis-1/6"
          gamesData={steamMostReviewed}
        />
      </div>
    </main>
  );
}
