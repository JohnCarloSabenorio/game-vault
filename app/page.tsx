/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import UpcomingGameContainer from "@/components/main/UpcomingGameContainer";
import GameCarousel from "@/components/main/GameCarousel";
export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/images/bg.jpeg')] bg-no-repeat bg-cover bg-center">
      <Navbar />
      <main className="">
        <div className="flex min-h-200 bg-green-200 justify-between flex-col md:flex-row">
          {/* Carousel (New Releases) */}
          <div className="flex justify-center items-center flex-1 bg-red-100">
            <GameCarousel />
          </div>
          {/* Top 6 most popular */}
          {/* Card Container */}
          <UpcomingGameContainer />
        </div>

        {/* Most Popular Video Games */}
      </main>
    </div>
  );
}
