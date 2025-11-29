export default function GameTag({ label }: { label: string }) {
  return (
    <div className="bg-gray-600/60 w-fit px-3 rounded-md font-semibold">
      <p>{label}</p>
    </div>
  );
}
