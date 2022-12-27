import { useContext } from "react";
import styled from "styled-components";
import Timer from "./Timer";
import { MovesPlaceholder } from "./MovesPlaceholder";

export default function GameHeader() {

  return (
    <Header>
        <MovesPlaceholder/>
      <Timer />
      <img />
    </Header>
  );
}

const Header = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #279dff;
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
 img {
  width: 110px;
 }
`;
