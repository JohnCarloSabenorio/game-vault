/* eslint-disable @typescript-eslint/no-explicit-any */
import GameTag from "../top-100/GameTag";

export default function GameDetailsContainer({
  genres,
  themes,
  game_modes,
  player_perspectives,
}: {
  genres: any;
  themes: any;
  game_modes: any;
  player_perspectives: any;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-3">
      <div className="bg-gray-500 flex-1 rounded-md p-3">
        <h1 className="">Developers:</h1>
      </div>
      <div className="bg-gray-500 flex-1 rounded-md p-3">
        <h1 className="">Publishers:</h1>
      </div>
      <div className="bg-gray-500 flex-1 rounded-md p-3">
        <h1 className="">Genres:</h1>
        <div className="flex gap-2 w-full flex-wrap mx-auto mt-3">
          {(genres || []).map((genre: any, idx: number) => (
            <GameTag key={idx} label={genre.name} />
          ))}
        </div>
      </div>
      <div className="bg-gray-500 flex-1 rounded-md p-3">
        <h1 className="">Themes:</h1>
        <div className="flex gap-2 w-full flex-wrap mx-auto mt-3">
          {(themes || []).map((theme: any, idx: number) => (
            <GameTag key={idx} label={theme.name} />
          ))}
        </div>
      </div>
      <div className="bg-gray-500 flex-1 rounded-md p-3">
        <h1 className="">Game Modes:</h1>
        {game_modes ? (
          game_modes.map((data: any, idx: number) => {
            return <GameTag key={idx} label={data.name} />;
          })
        ) : (
          <p className="font-bold">N/A</p>
        )}
      </div>
      <div className="bg-gray-500 flex-1 rounded-md p-3">
        <h1 className="">Player Perspectives:</h1>
        {player_perspectives ? (
          player_perspectives.map((data: any, idx: number) => {
            return <GameTag key={idx} label={data.name} />;
          })
        ) : (
          <p className="font-bold">N/A</p>
        )}
      </div>
    </div>
  );
}
