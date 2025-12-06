/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import GameStatsContainer from "@/components/games/GameStatsContainer";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { getGameById } from "@/lib/api/igdb";
import { notFound } from "next/navigation";
import GameBackground from "@/components/games/GameBackground";
import GameTag from "@/components/top-100/GameTag";
import GameDetailsContainer from "@/components/games/GameDetailsContainer";
import MediaCarousel from "@/components/games/MediaCarousel";
import SupportedLanguages from "@/components/games/SupportedLanguages";
import formatDate from "@/lib/utils/formatDate";
import DateUpdatedCard from "@/components/games/DateUpdatedCard";
import ExternalLinksCard from "@/components/games/ExternalLinksCard";
export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const game = await getGameById(id);

  console.log("the game:", game);
  if (!game) {
    notFound();
  }
  return (
    <main className="text-white min-h-screen bg-gray-800">
      <GameBackground
        bgUrl={
          game?.artworks
            ? game.artworks[0].url.replace("t_thumb", "t_4k")
            : game?.screenshots
            ? `https:${game.screenshots[0].url.replace("t_thumb", "t_4k")}`
            : "/images/placeholder.png"
        }
      />

      {/* Main Content */}
      <div className="relative text-white max-w-6xl mx-auto p-3 z-10">
        <h1 className="text-3xl font-bold">{game.name}</h1>

        <div className="flex flex-col gap-3 md:flex-row mt-5">
          <img
            src={
              game?.cover?.url
                ? `https:${game.cover.url.replace("t_thumb", "t_4k")}`
                : "/images/placeholder.jpg"
            }
            className="w-90 rounded-md mx-auto"
            alt="Game Cover"
          />

          {/* ScreenshotsCarousel */}

          <MediaCarousel screenshots={game.screenshots} trailer={""} />
        </div>

        <div className="flex flex-col lg:flex-row gap-3">
          <div>
            <GameStatsContainer
              total_rating={(game.total_rating / 10).toFixed(1)}
              total_rating_count={game?.total_rating_count ?? 0}
              igdb_rating={(game.rating / 10).toFixed(1)}
              igdb_rating_count={game?.rating_count ?? 0}
              critic_rating={(game.aggregated_rating / 10).toFixed(1)}
              critic_rating_count={game?.aggregated_rating_count ?? 0}
            />

            <GameDetailsContainer
              developers={
                game.involved_companies
                  ? game?.involved_companies.filter(
                      (company: any) => company.developer
                    )
                  : []
              }
              publishers={
                game.involved_companies
                  ? game?.involved_companies.filter(
                      (company: any) => company.publisher
                    )
                  : []
              }
              genres={game?.genres}
              themes={game?.themes}
              game_modes={game?.game_modes}
              player_perspectives={game?.player_perspectives}
              game_engines={game?.game_engines}
              platforms={game?.platforms}
            />

            <h2 className="mt-3 text-xl font-semibold">Summary</h2>
            <div className="flex mt-3 border-2 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
              <p className="text-justify">
                {game?.summary ?? "No summary is available for this game."}
              </p>
            </div>

            {/* Events Featured In */}

            {/* Similar Games */}
            <h2 className="mt-3 text-xl font-semibold">DLCs</h2>
            <h2 className="mt-3 text-xl font-semibold">Expansions</h2>
            <h2 className="mt-3 text-xl font-semibold">Events Featured In</h2>
            <h2 className="mt-3 text-xl font-semibold">Similar Games</h2>
          </div>

          <div>
            <DateUpdatedCard
              label="Date Released"
              date={formatDate(game.first_release_date)}
            />

            {/* Supported Languages */}
            <SupportedLanguages languageSupports={game.language_supports} />

            <DateUpdatedCard
              label="Date Updated"
              date={formatDate(game.updated_at)}
            />

            <ExternalLinksCard websites={game?.websites} />
            <h1 className="mt-3">Parent Game:</h1>
            <div className="flex mt-3 border-2 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
              <a>{game.parent_game ? game.parent_game.name : "N/A"}</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
