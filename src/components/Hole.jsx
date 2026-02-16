import { useGame } from "../context/GameContext";

export default function Hole({ index }) {
  const { moleIndex, whack } = useGame();

  
  const hasMole = index === moleIndex;

  return (
    <div
      className={`hole ${hasMole ? "mole" : ""}`}
      onClick={hasMole ? whack : undefined}
    />
  );
}