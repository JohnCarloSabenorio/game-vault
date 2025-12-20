export default function MeasurementInputs() {
  return (
    <div className="flex gap-2 mt-3">
      {/* Height */}
      <label className="text-center">Height (m):</label>
      <input type="number" className="bg-white rounded-md w-full block" />
      {/* Weight */}
      <label className="text-center">Weight (kg):</label>
      <input type="number" className="bg-white rounded-md w-full block" />
    </div>
  );
}
