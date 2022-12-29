import { useContext } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { GameContext } from "../common/GameContext";
import { ReturnButton } from "../common/ReturnButton";
import { writeLocalStorage } from "../untils/writeLocalStorage";

export function Options() {
  const {
    difficulty,
    setDifficulty,
    numberOfCards,
    setNumberOfCards,
    language,
    setLanguage,
  } = useContext(GameContext);
  return (
    <MenuWrappler>
      <img src="/wall.svg" />
      <GrayBackground />
      <ContentWrappler>
        <ModalWrappler>
          <Title>
            <h1>Opções</h1>
          </Title>
          <ReturnButton navigatePath="/" />
          <Option>
            <h1>Dificuldade</h1>
            <ButtonWrappler>
              <Button
                text="Normal"
                selected={difficulty === "normal"}
                onClick={() => {
                  setDifficulty("normal");
                  writeLocalStorage({ difficulty: "normal" });
                }}
              />
              <Button
                text="Difícil"
                selected={difficulty === "hard"}
                onClick={() => {
                  setDifficulty("hard");
                  writeLocalStorage({ difficulty: "hard" });
                }}
              />
            </ButtonWrappler>
          </Option>
          <Option>
            <h1>Número de cartas</h1>
            <ButtonWrappler>
              <Button text="8" selected={numberOfCards === 8} />
              <Button text="12" selected={numberOfCards === 12} />
            </ButtonWrappler>
          </Option>
          <Option>
            <h1>Idioma</h1>
            <ButtonWrappler>
              <Button text="Português" selected={language === "portuguese"} />
              <Button text="Inglês" selected={language === "english"} />
            </ButtonWrappler>
          </Option>
        </ModalWrappler>
      </ContentWrappler>
    </MenuWrappler>
  );
}

const MenuWrappler = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  img {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }
`;
const ContentWrappler = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 3em;
    color: white;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const ButtonWrappler = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 30px;

  h1 {
    font-size: 2em;
    color: white;
  }
  Button {
    width: 15vw;
  }
  &:last-of-type {
    margin-bottom: 5vh;
  }
`;
const GrayBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0101015d;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
`;

const ModalWrappler = styled.div`
  position: relative;
  border-radius: 5vh;
  background-color: #279dff;
  width: 40vw;
  height: 98vh;
  z-index: 1;
  box-shadow: 8px 5px 5px black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 1300px) {
    width: 60vw;
    Button {
      width: 27vw;
    }
  }
  @media screen and (max-height: 700px) {
    h1 {
      font-size: 2em;
    }
    Button {
      height: 60px;
      h1 {
        font-size: 1.2em;
      }
    }
  }
  @media screen and (max-width: 756px) {
    width: 80vw;
    height: 85vh;
    Button {
      width: 35vw;
    }
  }
  @media screen and (max-width: 576px) {
    h1 {
      font-size: 2em;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    Button {
      font-size: 0.8em;
    }
  }
  @media screen and (max-height: 500px) {
    h1 {
      font-size: 1.5em;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    Button {
      font-size: 0.8em;
      height: 40px;
      width: 15vw;
    }
  }
  @media screen and (max-height: 500px) {
    h1 {
      font-size: 1.2em;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;
const Title = styled.div`
  h1 {
    font-size: 4em;
    margin-bottom: 10px;
    margin-top: 10px;
    font-weight: 700;
    color: #fc2fff;
    font-family: "Skranji", cursive;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  @media screen and (max-height: 700px) {
    h1 {
      font-size: 2em;
      margin-bottom: 1px;
    }
  }
`;
