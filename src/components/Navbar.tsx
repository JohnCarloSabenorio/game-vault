"use client";
export default function Navbar() {
  return (
    <div className="flex w-full justify-center fixed top-0 p-3 z-50">
      <ul className="bg-gray-400/60 rounded-full px-3 py-1">
        <li>
          <a className="text-white font-bold cursor-pointer">Games</a>
        </li>
      </ul>
    </div>
  );
}
