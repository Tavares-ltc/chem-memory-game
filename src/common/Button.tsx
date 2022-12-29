import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type ButtonData = {
  text: string;
  navigatePath?: string;
  width?: string;
  onClick?: () => void;
  selected?: boolean;
};
export default function Button({
  text,
  navigatePath,
  width = "60%",
  onClick = undefined,
  selected = false,
}: ButtonData) {
  const navigate = useNavigate();
  return (
    <ButtonWrappler width={width} selected={selected}>
      <button
        onClick={() => {
          if (navigatePath) {
            navigate(navigatePath);
          }
          if (onClick) {
            onClick();
          }
        }}
      >
        <h1>{text}</h1>
      </button>
    </ButtonWrappler>
  );
}
interface Props {
  width: string;
  selected: boolean;
}
const ButtonWrappler = styled.div<Props>`
  display: flex;
  justify-content: space-around;
  button {
    width: ${(Props) => Props.width};
    color: white;
    font-size: 18px;
    font-family: "Fredoka One", cursive;
    background-color: ${(Props)=> Props.selected? 'rgb(255, 142, 12)' : 'rgb(74, 58, 255)'};
    border-radius: 50px;
    border: 0px;
    :hover {
      cursor: pointer;
      background-color: rgb(255, 142, 12);
    }
  }

`;
