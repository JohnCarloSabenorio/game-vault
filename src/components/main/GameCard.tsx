import GameCardDescription from "./GameCardDescription";

export default function GameCard() {
  return (
    <div className="bg-gray-600/60 p-3 rounded-md cursor-pointer">
      {/* Image */}
      <img src="/images/card-placeholder.jpg" alt="game image" className="mb-3" />
      {/* Description */}
      <GameCardDescription
        name="Game name"
        ratingCount={12000}
        ratingAverage={5}
      />
    </div>
  );
}
