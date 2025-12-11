import Link from "next/link";
export default function GameCarouselHeader({
  header,
  link,
}: {
  header: string;
  link: string;
}) {
  return (
    <div className="px-3 flex items-center justify-between">
      <h1 className="main-header ">{header}</h1>

      <a href={link} className="">
        <p className="text-white underline hover:font-semibold">View Top 100</p>
      </a>
    </div>
  );
}
