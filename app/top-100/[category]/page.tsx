/* eslint-disable @typescript-eslint/no-unused-vars */
import GameScore from "@/components/top-100/GameScore";
import GameTag from "@/components/top-100/GameTag";
import TableBody from "@/components/top-100/TableBody";
import TableHeaders from "@/components/top-100/TableHeaders";
import { getPopularGames } from "@/lib/api/igdb";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  console.log("category:", category);

  const catIdxAndTitle = getCategoryIndexAndTitle();

  const topGames = getPopularGames(catIdxAndTitle[0], 100);

  function getCategoryIndexAndTitle() {
    if (category == "most-active") {
      return [3, "IGDB Most Active Players"] as const;
    } else if (category == "most-played") {
      return [4, "IGDB Most Played"] as const;
    } else if (category == "peak-players") {
      return [5, "Steam 24Hrs Peak Players"] as const;
    } else if (category == "most-reviewed") {
      return [8, "Steam Most Reviewed"] as const;
    } else {
      notFound();
    }
  }

  return (
    <div className="flex flex-col min-h-screen text-white">
      <h1 className="mb-3 text-3xl font-bold text-center">
        Top 100 {catIdxAndTitle[1]}
      </h1>
      {/* Table */}
      <div className="w-full mx-auto overflow-hidden">
        <table className="w-full border-collapse">
          <TableHeaders />
          <TableBody topGames={topGames} />
        </table>
      </div>
    </div>
  );
}
