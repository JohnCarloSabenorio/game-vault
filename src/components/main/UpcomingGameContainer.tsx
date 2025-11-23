import UpcomingGameCard from "./UpcomingGameCard";

export default function UpcomingGameContainer() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <h1 className="text-xl font-bold">Upcoming Games</h1>
      <UpcomingGameCard name="Red Dead Redemption 2" rating={5.0} />
      <UpcomingGameCard name="Red Dead Redemption 2" rating={5.0} />
      <UpcomingGameCard name="Red Dead Redemption 2" rating={5.0} />
      <UpcomingGameCard name="Red Dead Redemption 2" rating={5.0} />
      <UpcomingGameCard name="Red Dead Redemption 2" rating={5.0} />
    </div>
  );
}
