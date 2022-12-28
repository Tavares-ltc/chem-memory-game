import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { GameContext } from "../common/GameContext";

export function GameFineshedModal() {
  const { moves, time, isGameFinished } = useContext(GameContext);
  const ModalRef = useRef(null);
  const clientViewport = document.documentElement.clientWidth;
  const buttonWidth = clientViewport > 500? "22vw" : "28vw"
  if (!isGameFinished) return <></>;
  
  function viewModal() {
    if (ModalRef.current !== null) {
      window.onscroll = function () {
        // @ts-ignore: Object is possibly 'null'.
        ModalRef.current.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center",
        });
      };
    }
  }

  return (
    <>
      {viewModal()}
      <GrayBackground />
      <FinishedModalWrappler ref={ModalRef}>
        <h1>Você venceu!</h1>
        <ContentWrappler>
          <LeftContent>
            <h1>Jogadas</h1>
            <h1>Tempo</h1>
          </LeftContent>
          <RightContent>
            <h1>{moves}</h1>
            <h1>{time}</h1>
          </RightContent>
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
  position: absolute;
  z-index: 3;
  box-shadow: 8px 5px 5px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  h1 {
    text-align: center;
    font-size: 3em;
    color: #05eb05;
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

const ContentWrappler = styled.div`
  width: 94%;
  height: 60%;
  background-color: white;
  border-radius: 1em;
  display: flex;
  h1 {
    color: black;
    font-size: 25px;
  }
  box-sizing: border-box;
  padding: 10px;
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
  position: absolute;
  z-index: 2;
  overflow: hidden;
`;
