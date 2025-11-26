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

      <a href={link}>
        <p className="text-white">View All</p>
      </a>
    </div>
  );
}
