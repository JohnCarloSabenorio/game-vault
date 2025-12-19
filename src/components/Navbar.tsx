/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { searchGame } from "@/lib/api/igdb";
import GameCard from "./main/GameCard";
import HorizontalGameCard from "./main/HorizontalGameCard";
import Link from "next/link";
export default function Navbar() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchQuery = useDebounce(searchText, 1000);

  function handleInput(e: any) {
    setLoading(true);
    setSearchText(e.target.value);
  }

  function handleBlur() {
    setSearchText("");
    setIsSearching(false);
  }

  function handleFocus() {
    setIsSearching(true);
  }

  useEffect(() => {
    async function searchHandler() {
      const games = await searchGame(searchQuery);
      setSearchedGames(games);
      setLoading(false);
    }

    searchHandler();
  }, [searchQuery]);

  return (
    <div
      className={`flex flex-col w-full justify-between bg-gray-600 fixed top-0 p-1 z-50`}
    >
      {/* Navbar Content */}
      <div className="flex w-full justify-between gap-5">
        <div className="flex items-center gap-3">
          <a href={"/"}>
            <Image
              src={"/gamevault-logo.png"}
              className="hover:shadow-[0px_0px_20px_5px_rgba(66,_220,_219,_0.5)] rounded-full bg-transparent transition-all"
              width={60}
              height={60}
              alt="GameVault Logo"
            />
          </a>

          <a
            href={"/"}
            className="text-white text-md cursor-pointer hover:font-bold"
          >
            Home
          </a>
        </div>
        <ul className="flex flex-1 justify-end items-center gap-3 rounded-full px-3 py-1">
          <input
            type="text"
            className="bg-white rounded-md w-full max-w-200 p-3"
            placeholder="Search for a game..."
            value={searchText}
            onInput={(e) => handleInput(e)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <button className="bg-gray-500 rounded-md h-full aspect-square hover:bg-gray-800 transition-all">
            <Link href="/games">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="fill-white w-8 aspect-square mx-auto cursor-pointer"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </Link>
          </button>
        </ul>
      </div>

      {/* Search Results */}
      <div
        className={`w-full transition-all duration-300 bg-gray-800 rounded-md text-white ${
          isSearching ? "max-h-100 p-3" : "max-h-0 p-0"
        } overflow-hidden`}
      >
        <p className="text-center my-3 text-xl font-semibold">Search Results</p>

        {searchedGames.length != 0 ? (
          loading ? (
            <p className="text-center text-gray-200 italic">Loading...</p>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {searchedGames.map((data, idx) => (
                <HorizontalGameCard key={idx} game={data} displayDate={false} />
              ))}
            </div>
          )
        ) : (
          <p className="text-center text-gray-200 italic">
            No items matched your query.
          </p>
        )}
      </div>
    </div>
  );
}
