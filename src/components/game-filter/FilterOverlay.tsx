"use client";
import FilterCheckList from "./FilterChecklist";
import MeasurementInputs from "./MeasurementInputs";
import PaginationInputs from "./PaginationInputs";

export default function FilterOverlay() {
  return (
    <div className={`top-0 w-full h-full fixed z-50 bg-black/60 justify-end`}>
      <div className="bg-white shadow-md rounded-md transition-all duration-300 p-3 w-xl h-full overflow-y-scroll">
        {/* Ascending/Descending & Pagination */}

        <button className="p-1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="fill-black w-8 h-8"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </button>

        <PaginationInputs />

        <MeasurementInputs />
        {/* Types */}
        <FilterCheckList
          header="Genre"
          inputPlaceholder="Search Pokemon Type..."
        />
        {/* Weaknesses */}
        <FilterCheckList
          header="Narrow down by Pokemon types"
          inputPlaceholder="Search Pokemon Weakness..."
        />

        {/* Abilities */}
        <FilterCheckList
          header="Narrow down by Pokemon abilities"
          inputPlaceholder="Search Pokemon Ability..."
        />
      </div>
    </div>
  );
}
