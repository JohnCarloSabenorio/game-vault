/* eslint-disable @typescript-eslint/no-explicit-any */
import GameTag from "../top-100/GameTag";
import GameDetailCard from "./GameDetailCard";

export default function GameDetailsContainer({
  developers,
  publishers,
  genres,
  themes,
  game_modes,
  player_perspectives,
  game_engines,
  platforms,
}: {
  developers: any;
  publishers: any;
  genres: any;
  themes: any;
  game_modes: any;
  player_perspectives: any;
  game_engines: any;
  platforms: any;
}) {
  const developersData = developers.map((dev: any) => dev.company);
  const publishersData = publishers.map((dev: any) => dev.company);
  return (
    <div className="grid grid-cols-2 gap-3 mt-3">
      <div className="flex flex-col gap-3">
        <GameDetailCard header="Developers:" data={developersData} />
        <GameDetailCard header="Publishers:" data={publishersData} />
        <GameDetailCard header="Genres:" data={genres} />
        <GameDetailCard header="Themes:" data={themes} />
      </div>

      <div className="flex flex-col gap-3">
        <GameDetailCard header="Game Modes:" data={game_modes} />
        <GameDetailCard
          header="Player Perspectives:"
          data={player_perspectives}
        />
        <GameDetailCard header="Game Engines:" data={game_engines} />

        <div className="bg-gray-500 flex-1 rounded-md p-3">
          <h1 className="">Platforms:</h1>
          <div className="flex flex-wrap gap-1">
            {platforms ? (
              platforms.map((data: any, idx: number) => {
                return <GameTag key={idx} label={data.abbreviation} />;
              })
            ) : (
              <p className="font-bold">N/A</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
