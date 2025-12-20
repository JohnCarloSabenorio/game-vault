export default function DropdownSelector({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div className="flex items-center gap-1 mt-3">
      <p>{label}:</p>
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
