import FiltersContainer from "@/components/game-filter/FiltersContainer";
import GameList from "@/components/game-filter/GameList";
import SearchAndSelectionContainer from "@/components/game-filter/SearchAndSelectionContainer";

export default function Page() {
  return (
    <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-32 mx-auto">
      {/* Container */}
      <div className="flex gap-5 w-full">
        <div className="w-full shrink-0 max-w-220">
          <SearchAndSelectionContainer />
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search games"
            className="bg-white rounded-md p-3 w-full shadow-md"
          />
          {/* Pokemon list */}

          <GameList games={[]} />
        </div>
        {/* Filters */}

        <FiltersContainer />
      </div>
    </main>
  );
}
