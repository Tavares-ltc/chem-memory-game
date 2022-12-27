import { createContext } from "react";
import React from "react";
export interface GlobalContent {
  moves: number;
  setMoves: React.Dispatch<React.SetStateAction<number>>,
}

export const GameContext = createContext<GlobalContent>({
  moves: 0,
  setMoves: ()=>{},
});
