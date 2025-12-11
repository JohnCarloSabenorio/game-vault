import { redirect } from "next/navigation";

export default function Page() {
  return redirect("/games/1");

  return (
    <div className="text-white mt-20">
      <h1 className="text-3xl text-center font-bold">
        Search and Filtering Page
      </h1>
    </div>
  );
}
