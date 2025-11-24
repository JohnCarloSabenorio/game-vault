/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import AnticipatedGameContainer from "@/components/main/AnticipatedGameContainer";
import GameCarousel from "@/components/main/GameCarousel";
import GameContainer from "@/components/main/GameContainer";
export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/images/bg.jpeg')] bg-no-repeat bg-cover bg-center">
      <Navbar />
      <main className="">
        <div className="flex min-h-200 justify-between flex-col md:flex-row">
          {/* Carousel (New Releases) */}
          <div className="flex justify-center items-center flex-1">
            <GameCarousel />
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
        <h1 className="main-header">Top Most Anticipated</h1>
        <GameContainer />
      </main>
    </div>
  );
}
