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
margin-left: 10px;
width: 110px;
      h1 {
    font-size: 15px;
    color: white;
  }

`