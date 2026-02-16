import { useGame } from "../context/GameContext";

export default function WelcomeScreen() {
  const { startGame } = useGame();

  return (
    <div className="screen">
      <h1>Whack a Mole</h1>
      <p>Click the mole to score points. Each click moves it to a new hole.</p>
      <button onClick={startGame}>Play</button>
    </div>
  );
}