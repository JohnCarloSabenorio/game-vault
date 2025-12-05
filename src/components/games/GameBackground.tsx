export default function GameBackground({ bgUrl }: { bgUrl: string }) {
  return (
    <div
      className={`w-full absolute min-h-[800px] bg-cover z-0`}
      style={{
        backgroundImage: `url('${bgUrl}')`,
      }}
    >
      <div className="w-full h-full bg-black/60 absolute"></div>
    </div>
  );
}
