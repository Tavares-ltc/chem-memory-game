import styled from "styled-components";
import GameHeader from "../components/GameHeader";
import Cards from "../components/Cards";
export default function Game() {
  return (
    <Background>
      <GameHeader />
      <GameBoard>
        <Cards/>
      </GameBoard>
    </Background>
  );
}

const Background = styled.div`

  background-repeat: repeat-y;
  background-color: #13b8ff;

  background-position: 50% 0;
  background-size: cover;
  width: 100%;
  height: 100%;
  top:0;
  left: 0%;
  background-image: url("/paper(1).png");
  @media screen and (min-width: 1200px ){
	position: absolute;
}

  
`;

const GameBoard = styled.div`
  margin: 0 auto 0 auto;
  max-width: 680px;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  box-sizing: border-box;
  @media screen and (min-width: 1080px ){
	max-width: 1000px;
  gap: 20px;
}
`;
