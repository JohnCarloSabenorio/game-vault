/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LoadMoreButton from "./LoadMoreButton";
import SkeletonCard from "../skeleton/SkeletonCard";
export default function GameList({ games }: { games: any }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 gap-y-20 md:grid-cols-2 lg:grid-cols-3 p-3 mt-10">
        {/* Collection of Pokemon Cards */}
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </>
  );
}
