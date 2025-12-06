"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ExternalLinksCard({ websites }: { websites: any }) {
  return (
    <div className="flex flex-col mt-3 w-full border-2 rounded-md gap-3 p-3  bg-gray-500">
      <h1 className="mt-3">External Websites</h1>
      <ul>
        {websites?.map((website: any, idx: number) => (
          <li className="wrap-break-word" key={idx}>
            <a>{website.url}</a>
          </li>
        ))}
        <li>
          <a></a>
        </li>
      </ul>
    </div>
  );
}
