import Image from "next/image";
import GameStatsContainer from "@/components/games/GameStatsContainer";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { getGameById } from "@/lib/api/igdb";
import { notFound } from "next/navigation";
export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const game = await getGameById(id);

  if (!game) {
    notFound();
  }
  const gameData = game[0];
  console.log("game data:", gameData);
  return (
    <main className="text-white min-h-screen bg-gray-800">
      <div
        className={`w-full absolute min-h-[800px] bg-cover z-0`}
        style={{
          backgroundImage: `url('${
            gameData?.artworks
              ? gameData.artworks[0].url.replace("t_thumb", "t_4k")
              : gameData?.screenshots
              ? `https:${gameData.screenshots[0].url.replace(
                  "t_thumb",
                  "t_4k"
                )}`
              : "/images/placeholder.png"
          }')`,
        }}
      >
        <div className="w-full h-full bg-black/60 absolute"></div>
      </div>

      {/* Main Content */}
      <div className="relative text-white max-w-6xl mx-auto p-3 z-10">
        <h1 className="text-3xl font-bold">{gameData.name}</h1>
        <div className="flex flex-col gap-3 md:flex-row mt-5">
          <img
            src={
              gameData?.cover?.url
                ? `https:${gameData.cover.url.replace("t_thumb", "t_4k")}`
                : "/images/placeholder.jpg"
            }
            className="max-w-90 rounded-md mx-auto"
            alt="Game Cover"
          />

          <Carousel>
            <CarouselContent>
              <img src={"/images/placeholder.png"} alt="Image" />
            </CarouselContent>

            <div className="mt-3 bg-gray-800 w-full p-1 rounded-md overflow-x-scroll">
              <img
                className="w-20 rounded-md border-3 border-black"
                src={"/images/placeholder.png"}
                alt="Image"
              />
            </div>
          </Carousel>
        </div>

        <div className="flex flex-col lg:flex-row gap-3">
          <div>
            <GameStatsContainer />

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="bg-gray-500 flex-1 rounded-md p-3">
                <h1 className="">Developers:</h1>
              </div>
              <div className="bg-gray-500 flex-1 rounded-md p-3">
                <h1 className="">Publishers:</h1>
              </div>
              <div className="bg-gray-500 flex-1 rounded-md p-3">
                <h1 className="">Genres:</h1>
              </div>
              <div className="bg-gray-500 flex-1 rounded-md p-3">
                <h1 className="">Themes:</h1>
              </div>
              <div className="bg-gray-500 flex-1 rounded-md p-3">
                <h1 className="">Multiplayer Modes:</h1>
              </div>
              <div className="bg-gray-500 flex-1 rounded-md p-3">
                <h1 className="">Player Perspectives:</h1>
              </div>
            </div>

            <h2 className="mt-3 text-xl font-semibold">Summary</h2>
            <div className="flex mt-3 border-2 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
              <p className="mt-3 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry{"'"}s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
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
            {/* Age Ratings */}
            <h1 className="mt-3">Age Ratings</h1>
            <div className="flex mt-3 border-2 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
              <Image
                src={"/images/cover-placeholder.jpg"}
                width={100}
                height={60}
                className="rounded-md"
                alt="Age Rating Image"
              />
              <Image
                src={"/images/cover-placeholder.jpg"}
                width={100}
                height={60}
                className="rounded-md"
                alt="Age Rating Image"
              />
              <Image
                src={"/images/cover-placeholder.jpg"}
                width={100}
                height={60}
                className="rounded-md"
                alt="Age Rating Image"
              />
            </div>
            {/* Links */}
            <h1 className="mt-3">Links</h1>
            <div className="flex mt-3 border-2 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
              <Image
                src={"/images/gamevault-logo.png"}
                width={50}
                height={50}
                className="rounded-md"
                alt="Age Rating Image"
              />
              <Image
                src={"/images/gamevault-logo.png"}
                width={50}
                height={50}
                className="rounded-md"
                alt="Age Rating Image"
              />
              <Image
                src={"/images/gamevault-logo.png"}
                width={50}
                height={50}
                className="rounded-md"
                alt="Age Rating Image"
              />
              <Image
                src={"/images/gamevault-logo.png"}
                width={50}
                height={50}
                className="rounded-md"
                alt="Age Rating Image"
              />
            </div>
            {/* Supported Languages */}
            <h1 className="mt-3">Supported Languages</h1>
            <div className="flex mt-3 border-2 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
              <table className="border-separate border-spacing-x-3 border-spacing-y-2">
                <thead className="text-center">
                  <tr>
                    <td>Language</td>
                    <td>Audio</td>
                    <td>Subtitles</td>
                    <td>Interfaces</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="">English</td>
                    <td className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        className="mx-auto"
                      >
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                      </svg>
                    </td>
                    <td className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        className="mx-auto"
                      >
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                      </svg>
                    </td>
                    <td className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        className="mx-auto"
                      >
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="">English</td>
                    <td className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        className="mx-auto"
                      >
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                      </svg>
                    </td>
                    <td className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        className="mx-auto"
                      >
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                      </svg>
                    </td>
                    <td className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        className="mx-auto"
                      >
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="">English</td>
                    <td className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        className="mx-auto"
                      >
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                      </svg>
                    </td>
                    <td className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        className="mx-auto"
                      >
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                      </svg>
                    </td>
                    <td className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        className="mx-auto"
                      >
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Releases */}
            <h1 className="mt-3">Releases</h1>
            <div className="flex mt-3 border-2 rounded-md gap-3 flex-wrap min-w-100 p-3  bg-gray-500">
              <div className="flex w-full justify-between">
                <h1>PC</h1>
                <p>20/10/2020</p>
              </div>
              <div className="flex w-full justify-between">
                <h1>XBox</h1>
                <p>20/10/2020</p>
              </div>
              <div className="flex w-full justify-between">
                <h1>PS5</h1>
                <p>20/10/2020</p>
              </div>
            </div>

            {/* Game Engines */}
            <h1 className="mt-3">Game Engines</h1>
            <div className="flex mt-3 border-2 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500"></div>

            <h1 className="mt-3">Updated On:</h1>
            <div className="flex mt-3 border-2 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500"></div>
            <h1 className="mt-3">Parent Game:</h1>
            <div className="flex mt-3 border-2 rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
              <p>N/A</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
