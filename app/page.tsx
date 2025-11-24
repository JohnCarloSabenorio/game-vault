/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import AnticipatedGameContainer from "@/components/main/AnticipatedGameContainer";
import GameCarousel from "@/components/main/GameCarousel";
import GameContainer from "@/components/main/GameContainer";
import { getNewlyReleasedGames } from "@/lib/api/igdb";
import { Suspense } from "react";
export default async function Home() {
  const newGames = getNewlyReleasedGames();

  return (
    <div className="min-h-screen">
      <main className="">
        <div className="flex justify-between flex-col md:flex-row mt-3 p-5">
          {/* Carousel (New Releases) */}
          <div className="flex flex-col justify-start flex-1 min-h-100">
            <h1 className="text-xl font-bold text-white mb-3">
              Newly Released Games
            </h1>
            <Suspense
              fallback={
                <div className="h-full flex items-center justify-center">
                  <p className="text-center text-white text-3xl">Loading...</p>
                </div>
              }
            >
              <GameCarousel newGames={newGames} />
            </Suspense>
          </div>
          {/* Top 6 most popular */}
          {/* Card Container */}
          <AnticipatedGameContainer />
        </div>

        {/* Most Popular Video Games */}
        <h1 className="main-header">Most Popular</h1>
        <GameContainer />
        <h1 className="main-header">Top Rated</h1>
        <GameContainer />
        <h1 className="main-header">Coming Soon</h1>
        <GameContainer />
      </main>
    </div>
  );
}
