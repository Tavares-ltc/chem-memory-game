import styled from "styled-components"
import Button from "../common/Button";
import Header from "../components/Header";

export default function Menu(){
    return (
        <MenuWrappler>
        <img src="/wall.svg"/>
        <Header></Header>
        <>
        <Button text="Jogar" navigatePath="/game" />
        <Button text="Opções" navigatePath="/" />
        <Button text="Créditos" navigatePath="/" />
            </>
        </MenuWrappler>
    )
}

const MenuWrappler = styled.div`

    img{
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
    Button{
        margin-bottom: 30px;
    }
    @media screen and (max-height: 500px ){
	img {
        box-sizing: content-box;
        height: 108vh;
    }
    Button{
        margin-bottom: 20px;
    }
}
`

