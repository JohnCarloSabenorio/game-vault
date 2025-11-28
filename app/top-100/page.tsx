import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen text-white pt-30">
      <h1 className="mb-3 text-3xl font-bold">Top 100 IGDB Most Visited</h1>
      {/* Table */}
      <div className="w-full max-w-7xl rounded-md overflow-hidden">
        <table className="fill-white w-full border-white rounded-md p-3 border-collapse">
          <thead className="bg-gray-600">
            <tr className="p-3">
              <th className="p-3">#</th>
              <th>Game</th>
              <th>Platform</th>
              <th>Genre</th>
              <th>Score</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800">
            <tr>
              {/* Number */}
              <td className="p-3 text-center text-xl">1</td>
              {/* Game Image and Title */}
              <td className="flex gap-3 items-center w-100 p-3">
                <Image
                  width={300}
                  height={300}
                  className="w-35 h-43 rounded-md"
                  src="/images/gamevault-banner.jpeg"
                  alt="game image"
                />
                <h1 className="text-xl flex-1 wrap-break-word min-w-0">
                  Final Fantasy VII
                </h1>
              </td>
              {/* Platform */}
              <td className="">
                <div className="flex justify-center gap-2 w-60 flex-wrap mx-auto">
                  <div className="bg-gray-600/60 w-fit px-3 rounded-md font-semibold">
                    <p>PC</p>
                  </div>
                  <div className="bg-gray-600/60 w-fit px-3 rounded-md font-semibold">
                    <p>PS4</p>
                  </div>
                  <div className="bg-gray-600/60 w-fit px-3 rounded-md font-semibold">
                    <p>PS5</p>
                  </div>
                  <div className="bg-gray-600/60 w-fit px-3 rounded-md font-semibold">
                    <p>XBox</p>
                  </div>
                </div>
              </td>

              {/* Genre */}
              <td className="">
                <div className="flex justify-center w-60 gap-2 flex-wrap mx-auto">
                  <div className="bg-gray-600/60 w-fit px-3 rounded-md font-semibold">
                    <p>Power</p>
                  </div>
                  <div className="bg-gray-600/60 w-fit px-3 rounded-md font-semibold">
                    <p>Classify</p>
                  </div>
                  <div className="bg-gray-600/60 w-fit px-3 rounded-md font-semibold">
                    <p>Yes</p>
                  </div>
                </div>
              </td>
              {/* Score */}
              <td className="p-3">
                <StarIcon sx={{ color: "yellow" }} /> 10.0
              </td>
              {/* Release Date */}
              <td className="text-center p-3">January 22, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
