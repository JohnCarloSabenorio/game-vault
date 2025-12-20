"use client";
import DropdownSelector from "./DropdownSelector";
import { useContext } from "react";

export default function SearchAndSelectionContainer() {
  return (
    <div className="flex gap-3 mb-3 items-center justify-between flex-wrap">
      {/* <button className="bg-white rounded-md p-3 flex items-center cursor-pointer md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="w-7 h-7"
        >
          <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
        </svg>{" "}
        Filter
      </button> */}
      <div className="flex mb-3">
        <DropdownSelector
          label="Sort By"
          options={["Name", "Release Date", "User Reviews"]}
        />
      </div>
    </div>
  );
}
