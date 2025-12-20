"use client";

import FilterCheckList from "./FilterChecklist";
import PaginationInputs from "./PaginationInputs";
export default function FiltersContainer() {
  return (
    <div
      className={`hidden justify-end  bg-black/60 w-full h-full md:flex md:w-fit md:bg-transparent`}
    >
      <div className="bg-white shadow-md rounded-md transition-all duration-300 right-0 p-3 w-100 md:static md:block overflow-y-scroll md:overflow-y-auto">
        {/* Ascending/Descending & Pagination */}

        <button className="p-1 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="fill-black w-8 h-8"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>

        <PaginationInputs />

        <FilterCheckList
          header="Narrow down by Pokemon types"
          inputPlaceholder="Search Pokemon Type..."
        />
        <FilterCheckList
          header="Narrow down by Pokemon types"
          inputPlaceholder="Search Pokemon Weakness..."
        />
      </div>
    </div>
  );
}
