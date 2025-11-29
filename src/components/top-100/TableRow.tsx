/* eslint-disable @typescript-eslint/no-explicit-any */
import GameScore from "./GameScore";
import GameTag from "./GameTag";
import Image from "next/image";
export default function TableRow({
  gameData,
  topNumber,
}: {
  gameData: any;
  topNumber: number;
}) {
  return (
    <tr>
      {/* Number */}
      {/* Game Image and Title */}
      <td className="p-3 text-center text-xl">{topNumber}</td>
      <td className="flex gap-3 items-center w-96 p-3">
        <Image
          width={300}
          height={300}
          className="w-35 rounded-md"
          src={
            gameData?.cover?.url
              ? `https:${gameData.cover.url.replace("t_thumb", "t_4k")}`
              : "/images/placeholder.jpg"
          }
          alt={gameData?.name || "Game cover"}
        />
        <h1 className="text-xl flex-1 wrap-break-word min-w-0">
          {gameData.name}
        </h1>
      </td>
      {/* Platform */}
      <td className="">
        <div className="flex justify-center gap-2 w-60 flex-wrap mx-auto">
          <GameTag label={"PC"} />
          <GameTag label={"PS4"} />
          <GameTag label={"PS5"} />
        </div>
      </td>

      {/* Genre */}
      <td className="">
        <div className="flex justify-center gap-2 w-60 flex-wrap mx-auto">
          <GameTag label={"Action"} />
          <GameTag label={"Platformer"} />
          <GameTag label={"Horror"} />
        </div>
      </td>
      {/* Score */}
      <td className="p-3">
        <GameScore score={10.0} />
      </td>
      {/* Release Date */}
      <td className="text-center p-3">January 22, 2025</td>
    </tr>
  );
}
