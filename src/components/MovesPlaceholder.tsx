import { useContext } from "react";
import { GameContext } from "../common/GameContext";
import styled from "styled-components";
export function MovesPlaceholder() {
    const {moves, setMoves} = useContext(GameContext)

  return (
    <PlaceholderWrappler>
        <h1>Jogadas: {moves}</h1>
    </PlaceholderWrappler>
  );
}
const PlaceholderWrappler = styled.div`
margin-left: 40px;
width: 70px;
      h1 {
    font-size: 20px;
    color: white;
    text-align: center;
  }

`