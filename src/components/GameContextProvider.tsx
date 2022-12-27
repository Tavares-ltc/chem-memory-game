import { Children, useState } from "react";
import { JsxChild, JsxElement } from "typescript";
import { GameContext } from "../common/GameContext";

export function GameContextProvider({ children }: {children: JSX.Element}) {
    const [moves, setMoves] = useState(0);
  return (
    <GameContext.Provider value={{ moves, setMoves }}>
        {children}
    </GameContext.Provider>
  );
}
