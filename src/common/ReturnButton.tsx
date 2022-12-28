import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export function ReturnButton({ navigatePath } : { navigatePath: string }) {
  const navigate = useNavigate();
  return (
    <ReturnButtonWrappler>
      <svg
        onClick={() => {
          navigate(navigatePath);
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>Arrow Undo</title>
        <path
          d="M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </ReturnButtonWrappler>
  );
}

const ReturnButtonWrappler = styled.div`
  width: 100px;
  margin-right: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  svg {
    width: 35px;
    color: white;
    fill: white;
    cursor: pointer;
  }
`;
