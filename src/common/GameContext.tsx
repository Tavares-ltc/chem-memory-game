import { createContext } from "react";
import React from "react";
export interface GlobalContent {
  moves: number,
  setMoves: React.Dispatch<React.SetStateAction<number>>,
  time: string,
  setTime: React.Dispatch<React.SetStateAction<string>>,
  isGameFinished: boolean,
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>,
}

export const GameContext = createContext<GlobalContent>({
  moves: 0,
  setMoves: ()=>{},
  time: '00:00',
  setTime: ()=>{},
  isGameFinished: false,
  setIsGameFinished: ()=>{},
});
