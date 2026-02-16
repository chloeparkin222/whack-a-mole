import { useGame } from "./context/GameContext";
import WelcomeScreen from "./components/WelcomeScreen";
import GameScreen from "./components/GameScreen";

export default function App() {
  const { isPlaying } = useGame();

  return <div>{isPlaying ? <GameScreen /> : <WelcomeScreen />}</div>;
}
