export default function FilterCheckList({
  header,
  inputPlaceholder,
}: {
  header: string;
  inputPlaceholder: string;
}) {
  return (
    <div className="mt-3 rounded-md shadow-md p-3">
      <p className="">{header}</p>

      {/* Types Container */}
      <div className="flex flex-col gap-2">
        {/* Types */}
        <div className="flex justify-between p-1">
          <div className="flex gap-1">
            <input type="checkbox"></input>
            <p>Type 1</p>
          </div>
          <p className="">Remove</p>
        </div>
        <div className="flex justify-between p-1">
          <div className="flex gap-1">
            <input type="checkbox"></input>
            <p>Type 1</p>
          </div>
          <p className="">Remove</p>
        </div>
        <div className="flex justify-between p-1">
          <div className="flex gap-1">
            <input type="checkbox"></input>
            <p>Type 1</p>
          </div>
          <p className="">Remove</p>
        </div>
        <div className="flex justify-between p-1">
          <div className="flex gap-1">
            <input type="checkbox"></input>
            <p>Type 1</p>
          </div>
          <p className="">Remove</p>
        </div>
      </div>

      <input
        type="text"
        placeholder={inputPlaceholder}
        className="w-full bg-white text-black rounded-md mt-1"
      />
    </div>
  );
}
