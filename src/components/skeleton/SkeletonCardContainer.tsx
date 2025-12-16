import HorizontalSkeletonCard from "./HorizontalSkeletonCard";

export default function SkeletonCardContainer() {
  return (
    <div className="flex flex-col gap-3 px-3 text-white">
      <h1 className="main-header">Most Anticipated</h1>

      <div className="gap-3 grid  grid-cols-1 md:grid-cols-2">
        {Array.from({ length: 6 }).map((data, idx) => {
          return <HorizontalSkeletonCard key={idx} />;
        })}
      </div>
    </div>
  );
}
