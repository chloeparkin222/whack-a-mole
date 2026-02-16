import { useGame } from "../context/GameContext";
import Hole from "./Hole";

export default function GameScreen() {
  const { score, restartGame, NUM_HOLES } = useGame();

  return (
    <div className="screen">
      <h1>Whack a Mole</h1>

      <div className="top-bar">
        <div className="score">Score: {score}</div>
        <button onClick={restartGame}>Restart</button>
      </div>

      <div className="grid">
        {Array.from({ length: NUM_HOLES }).map((value, i) => (
          <Hole key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
