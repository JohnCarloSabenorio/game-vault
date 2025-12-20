"use client";
import GameList from "./GameList";
import FiltersContainer from "./FiltersContainer";

import SearchAndSelectionContainer from "./SearchAndSelectionContainer";
import LoadMoreButton from "./LoadMoreButton";

export default function ContentContainer() {
  return (
    <div className="flex gap-5 w-full">
      {/* 1st div (Pokemon List) */}
      <div className="w-full">
        <SearchAndSelectionContainer />
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search Games..."
          className="bg-white rounded-md p-3 w-full shadow-md"
        />

        {/* Pokemon list */}
        <GameList games={[]} />

        <LoadMoreButton />
      </div>
      {/* 2nd div (Filters) */}

      <FiltersContainer />
    </div>
  );
}
