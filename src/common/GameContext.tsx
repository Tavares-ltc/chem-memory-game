import { createContext } from "react";
import React from "react";
export interface GlobalContent {
  moves: number,
  setMoves: React.Dispatch<React.SetStateAction<number>>,
  time: string,
  setTime: React.Dispatch<React.SetStateAction<string>>,
  isGameFinished: boolean,
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>,
  difficulty: string,
  setDifficulty: React.Dispatch<React.SetStateAction<string>>,
  numberOfCards: number,
  setNumberOfCards: React.Dispatch<React.SetStateAction<number>>,
  language: string,
  setLanguage: React.Dispatch<React.SetStateAction<string>>,
}
export const GameContext = createContext<GlobalContent>({
  moves: 0,
  setMoves: ()=>{},
  time: '00:00',
  setTime: ()=>{},
  isGameFinished: false,
  setIsGameFinished: ()=>{},
  difficulty: 'normal',
  setDifficulty: ()=>{},
  numberOfCards: 12,
  setNumberOfCards: ()=>{},
  language: 'portuguese',
  setLanguage: ()=>{},
});
