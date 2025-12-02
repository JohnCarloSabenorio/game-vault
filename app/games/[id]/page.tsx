import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GameStatsContainer from "@/components/games/GameStatsContainer";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
export default function Page() {
  return (
    <main className="text-white min-h-screen bg-gray-800">
      <div className="w-full absolute min-h-[700px] bg-[url('/images/placeholder.png')] bg-cover bg-center z-0">
        <div className="w-full h-full bg-black/60 absolute"></div>
      </div>

      {/* Main Content */}
      <div className="relative text-white max-w-6xl mx-auto p-3 z-10">
        <h1 className="text-3xl font-bold">
          Game Title (<span className="italic">Alternative Title</span>)
        </h1>
        <div className="flex flex-col gap-3 md:flex-row mt-5">
          <Image
            src={"/images/cover-placeholder.jpg"}
            width={300}
            height={200}
            className="rounded-md"
            alt="Game Cover"
          />
          <Carousel>
            <CarouselContent>
              <img src={"/images/placeholder.png"} alt="Image" />
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex md:flex-col lg:flex-row gap-3">
          <div>
            <GameStatsContainer />

            <h1 className="mt-3">Developers:</h1>
            <h1 className="mt-3">Publishers:</h1>

            <h2 className="mt-3 text-xl font-semibold">Summary</h2>
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

            {/* Events Featured In */}

            {/* Similar Games */}
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
            <div></div>
            {/* Game Engines */}
            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
}
