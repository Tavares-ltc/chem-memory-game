import { Children, useState } from "react";
import { JsxChild, JsxElement } from "typescript";
import { GameContext } from "../common/GameContext";

export function GameContextProvider({ children }: {children: JSX.Element}) {
    const [moves, setMoves] = useState(0);
    const [time, setTime] = useState('00:00')
    const [isGameFinished, setIsGameFinished] = useState(false)
  return (
    <GameContext.Provider value={{ moves, setMoves, time, setTime, isGameFinished, setIsGameFinished }}>
        {children}
    </GameContext.Provider>
  );
}
