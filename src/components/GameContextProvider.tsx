import { Children, useEffect, useState } from "react";
import { GameContext } from "../common/GameContext";

export function GameContextProvider({ children }: { children: JSX.Element }) {
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState("00:00");
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [difficulty, setDifficulty] = useState("normal");
  const [numberOfCards, setNumberOfCards] = useState(12);
  const [language, setLanguage] = useState("portuguese");

  useEffect(() => {
    if (localStorage.getItem("gameData")) {
      const gameData = localStorage.getItem("gameData");
      const gameStorage = gameData && JSON.parse(gameData);
      gameStorage.difficulty && setDifficulty(gameStorage.difficulty);
      gameStorage.numberOfCards && setNumberOfCards(gameStorage.numberOfCards);
      gameStorage.language && setLanguage(gameStorage.language);
    }
  }, [difficulty, numberOfCards, language]);

  
  return (
    <GameContext.Provider
      value={{
        moves,
        setMoves,
        time,
        setTime,
        isGameFinished,
        setIsGameFinished,
        difficulty,
        setDifficulty,
        numberOfCards,
        setNumberOfCards,
        language,
        setLanguage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
