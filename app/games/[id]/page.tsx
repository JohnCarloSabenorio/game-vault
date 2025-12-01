import ArtworksCarousel from "@/components/games/ArtworksCarousel";
import Image from "next/image";
export default function Page() {
  return (
    <main className="text-white min-h-screen bg-gray-800">
      <div className="w-full absolute min-h-[700px] bg-[url('/images/placeholder.png')] bg-cover bg-center z-0">
        <div className="w-full h-full bg-black/60 absolute"></div>
      </div>

      {/* Main Content */}
      <div className="relative text-white max-w-7xl mx-auto p-3 z-10">
        <div className="flex flex-col gap-3 md:flex-row mt-5">
          <Image
            src={"/images/cover-placeholder.jpg"}
            width={300}
            height={200}
            className="rounded-md"
            alt="Game Cover"
          />
          <div>
            <h1 className="text-3xl">Game Title</h1>

            {/* Total Rating */}
            {/* Total Rating Count */}
            {/* Age Rating */}
            <div className="flex">
              <div></div>
            </div>

            <h2 className="mt-3 text-xl">Summary</h2>
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

            <button className="text-xl rounded-md p-3 bg-blue-500">
              Watch Trailer
            </button>
          </div>
        </div>

        <h2 className="mt-3 text-xl">Storyline</h2>
        <p className="mt-3 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry{"'"}s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </main>
  );
}
