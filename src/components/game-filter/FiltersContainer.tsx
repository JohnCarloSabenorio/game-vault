"use client";

import FilterCheckList from "./FilterChecklist";
export default function FiltersContainer() {
  return (
    <div className="bg-gray-100 shadow-md rounded-md transition-all duration-300 right-0 p-3 w-100 hidden lg:block overflow-y-scroll md:overflow-y-auto h-fit">
      <button className="p-1 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="fill-black w-8 h-8"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>

      <FilterCheckList
        header="Narrow down by Genre"
        inputPlaceholder="Find a genre"
      />
      <FilterCheckList
        header="Narrow down by Game Mode"
        inputPlaceholder="Search Game Mode"
      />
      <FilterCheckList
        header="Narrow down by Game Mode"
        inputPlaceholder="Search Game Mode"
      />
      <FilterCheckList
        header="Narrow down by Player Perspective"
        inputPlaceholder="Search Player Perspective"
      />
      <FilterCheckList
        header="Narrow down by Themes"
        inputPlaceholder="Search Theme"
      />
      <FilterCheckList
        header="Narrow down by Platforms"
        inputPlaceholder="Search Platform"
      />
    </div>
  );
}
