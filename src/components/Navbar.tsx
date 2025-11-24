"use client";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex w-full justify-between bg-gray-400/60 sticky top-0 p-3 z-50">
      <div className="flex items-center gap-3">
        <Image
          src={"/images/gamevault-logo.png"}
          width={60}
          height={60}
          alt="GameVault Logo"
        />
      </div>
      <ul className="flex flex-1 justify-end items-center gap-3 rounded-full px-3 py-1">
        <input
          type="text"
          className="bg-white rounded-md w-full max-w-200 p-3"
          placeholder="Search for a game..."
        />
        <li className="bg-gray-400/60 px-3 py-2 rounded-full">
          <a className="text-white font-bold cursor-pointer">Games</a>
        </li>
      </ul>
    </div>
  );
}
