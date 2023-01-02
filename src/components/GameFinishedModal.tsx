import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { GameContext } from "../common/GameContext";
import { writeLocalStorage } from "../untils/writeLocalStorage";

export function GameFineshedModal() {
  const { moves, time, isGameFinished } = useContext(GameContext);
  const [lastRecord, setLastRecord] = useState(() => {
    const movesRecord = localStorage.getItem("movesRecord");
    const timeRecord = localStorage.getItem("timeRecord");
    const record: { moves: number | null; time: string | null } = {
      moves: null,
      time: null,
    };
    if (movesRecord) {
      record.moves = JSON.parse(movesRecord);
    }
    if (timeRecord) {
      record.time = JSON.parse(timeRecord);
    }
    return record;
  });
  const clientViewport = document.documentElement.clientWidth;
  const buttonWidth = clientViewport > 500 ? "22vw" : "28vw";
  if (!isGameFinished) return <></>;

  function saveRecord() {
    if (!lastRecord.moves || lastRecord.moves > moves) {
      localStorage.setItem("movesRecord", JSON.stringify(moves));
      setLastRecord({...lastRecord, moves: moves})
    }
    if (!lastRecord.time || lastRecord.time > time) {
      localStorage.setItem("timeRecord", JSON.stringify(time));
      setLastRecord({...lastRecord, time: time})
    }
  }
  return (
    <>
    {saveRecord()}
      <GrayBackground />
      <FinishedModalWrappler>
        <Title>
          <h1>Você venceu!</h1>
        </Title>
        <ContentWrappler>
          <SidesWrappler>
            <LeftContent>
              <h1>Jogadas</h1>
              <h1>Tempo</h1>
            </LeftContent>
            <RightContent>
              <h1>{moves}</h1>
              <h1>{time}</h1>
            </RightContent>
          </SidesWrappler>
          {(!lastRecord.moves || !lastRecord.time || lastRecord.time < time || lastRecord.moves < moves) ? <h2>Novos recordes!</h2> : <h2>Seus recordes:</h2>}
          <SidesWrappler>
            <LeftContent>
              <h1>Jogadas</h1>
              <h1>Tempo</h1>
            </LeftContent>
            <RightContent>
              <h1>{lastRecord.moves}</h1>
              <h1>{lastRecord.time}</h1>
            </RightContent>
          </SidesWrappler>
        </ContentWrappler>
        <ButtonsWrappler>
          <Button text="Menu" navigatePath="/" width={buttonWidth} />
          <Button
            text="Game"
            navigatePath="/game"
            width={buttonWidth}
            onClick={() => {
              window.location.reload();
            }}
          />
        </ButtonsWrappler>
      </FinishedModalWrappler>
    </>
  );
}

const FinishedModalWrappler = styled.div`
  width: 50%;
  height: 70vh;
  border-radius: 5vh;
  background-color: #279dff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  box-shadow: 8px 5px 5px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  h1 {
    text-align: center;
    font-size: 3em;
  }
  @media screen and (max-height: 500px) {
    height: 80vh;
    width: 80%;
    h1 {
      font-size: 2em;
    }
  }
  @media screen and (max-width: 500px) {
    height: 80vh;
    width: 80%;
    h1 {
      font-size: 2em;
    }
  }
`;
const Title = styled.div`
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  color: #fc2fff;
  font-family: "Skranji", cursive;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const ContentWrappler = styled.div`
  width: 94%;
  height: 60%;
  background-color: white;
  border-radius: 1em;
  overflow-y: scroll;
  h1 {
    color: black;
    font-size: 25px;
  }
  h2 {
    color: #25ce0b;
    text-align: center;
    font-size: 30px;
  }
  box-sizing: border-box;
  padding: 10px;
`;
const SidesWrappler = styled.div`
  width: 100%;
  display: flex;
`;
const LeftContent = styled.div`
  width: 50%;
  max-width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const RightContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const ButtonsWrappler = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  max-width: 100%;
  h1 {
    font-size: 20px;
    color: white;
  }
`;
const GrayBackground = styled.div`
  width: 100vw;
  height: 200vh;
  background-color: #0101015d;
  position: fixed;
  z-index: 2;
  align-items: center;
  overflow: hidden;
`;
