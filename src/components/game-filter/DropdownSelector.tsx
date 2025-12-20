export default function DropdownSelector({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div className="flex items-center gap-2 mt-3 w-full flex-1">
      <p className="text-white shrink-0">{label}:</p>
      <select className="w-full text-center p-3 rounded-md bg-white">
        {options.map((opt, idx) => {
          return (
            <option key={idx} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
}
