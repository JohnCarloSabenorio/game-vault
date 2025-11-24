import AnticipatedGameCard from "./AnticipatedGameCard";

export default function AnticipatedGameContainer() {
  return (
    <div className="flex flex-col gap-3 p-3 text-white">
      <h1 className="text-xl font-bold">Most Anticipated</h1>
      <AnticipatedGameCard name="Red Dead Redemption 2" rating={5.0} />
      <AnticipatedGameCard name="Red Dead Redemption 2" rating={5.0} />
      <AnticipatedGameCard name="Red Dead Redemption 2" rating={5.0} />
      <AnticipatedGameCard name="Red Dead Redemption 2" rating={5.0} />
      <AnticipatedGameCard name="Red Dead Redemption 2" rating={5.0} />
    </div>
  );
}
