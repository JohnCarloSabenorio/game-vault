export default function GameDescriptionCard({
  description,
  header,
}: {
  description: string;
  header: string;
}) {
  return (
    <div className="flex mt-3 border rounded-md gap-3 flex-wrap min-w-100 p-3  bg-gray-500">
      <h2 className="mt-3 text-xl font-semibold">{header}</h2>
      <p className="text-justify">
        {description ?? "No summary is available for this game."}
      </p>
    </div>
  );
}
