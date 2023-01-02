import { useContext } from "react";
import styled from "styled-components";
import Timer from "./Timer";
import { MovesPlaceholder } from "./MovesPlaceholder";
import { ReturnButton } from "../common/ReturnButton";

export default function GameHeader() {
  return (
    <Header>
      <MovesPlaceholder />
      <Timer />
      <ReturnButton navigatePath="/"/>
    </Header>
  );
}

const Header = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #279dff;
  z-index: 10;
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

