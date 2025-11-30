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
      <h1 className="main-header">{header}</h1>

      <Link href={link} prefetch={true}>
        <p className="text-white">View All</p>
      </Link>
    </div>
  );
}
