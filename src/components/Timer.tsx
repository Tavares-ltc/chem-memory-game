import { useState } from "react";
import styled from "styled-components";

export default function Timer() {
    const [timer, setTimer ] = useState({m: 0, md: 0, s: 0, sd:0})
    const [second, setSecond] = useState(0);
  
    setTimeout(() => {
        setTimer({...timer, sd: timer.sd + 1});
        if(timer.sd === 9) setTimer({...timer, s: timer.s + 1, sd: 0})
        if(timer.s === 6) setTimer({...timer, md: timer.md +1, s: 0})
        if(timer.md === 9) setTimer({...timer, md: 0, m: timer.m +1})
  
    }, 1000);
    return (
      <TimerWrappler>
        <h1>{`${timer.m} ${timer.md} : ${timer.s} ${timer.sd}`}</h1>
      </TimerWrappler>
    );
  }
  const TimerWrappler = styled.div`
    width: 110px;
    height: 60%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid black;
    h1 {
      font-size: 20px;
      font-family: 'Fredoka One', cursive;
    }
  `;