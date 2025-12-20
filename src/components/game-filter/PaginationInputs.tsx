export default function PaginationInputs() {
  return (
    <div
      className="flex flex-wrap
            text-black items-center gap-1 mt-3"
    >
      <p className="text-center">Pagination:</p>

      <p>From</p>
      <input type="number" className="w-25 bg-white rounded p-1" />
      <p>To</p>
      <input type="number" className="w-25 bg-white rounded p-1" />
    </div>
  );
}
