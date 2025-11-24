export default function DotNavigationButton({
  current,
  target,
  handleClick,
}: {
  current: number;
  target: number;
  handleClick: (target: number) => void;
}) {
  return (
    <button
      onClick={() => handleClick(target)}
      className={`${
        current == target && "bg-green-500"
      } w-3 aspect-square bg-gray-100 rounded-full cursor-pointer`}
    ></button>
  );
}
