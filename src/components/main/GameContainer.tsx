import GameCard from "./GameCard";

export default function GameContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-gols-3 lg:grid-cols-4 gap-3 mt-3 p-3">
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  );
}
