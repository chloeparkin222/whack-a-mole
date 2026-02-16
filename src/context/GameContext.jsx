import { createContext, useContext, useState } from "react";

const GameContext = createContext(null);

function getRandomHole(numHoles) {
  return Math.floor(Math.random() * numHoles);
}

export function GameProvider({ children }) {
  const NUM_HOLES = 9;

  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(getRandomHole(NUM_HOLES));

  function startGame() {
    setScore(0);
    setMoleIndex(getRandomHole(NUM_HOLES));
    setIsPlaying(true);
  }

  function restartGame() {
    setIsPlaying(false);
  }

  function whack() {
   
    setScore((prev) => prev + 1);
    setMoleIndex(getRandomHole(NUM_HOLES));
  }

  const value = {
    NUM_HOLES,
    isPlaying,
    score,
    moleIndex,
    startGame,
    restartGame,
    whack,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used insideof a GameProvider");
  }
  return context;
}