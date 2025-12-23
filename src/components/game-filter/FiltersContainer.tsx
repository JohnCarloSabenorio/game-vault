/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import FilterCheckList from "./FilterChecklist";
export default function FiltersContainer({ filters }: { filters: any }) {
  console.log("the filters:", filters);
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

      {filters.map((data: any, idx: number) => {
        return (
          <FilterCheckList
            key={idx}
            header={`Narrow down by ${data.name}`}
            inputPlaceholder={`Search`}
            data={data.result ?? []}
          />
        );
      })}
    </div>
  );
}
