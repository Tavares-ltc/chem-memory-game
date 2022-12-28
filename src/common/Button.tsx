import styled from "styled-components"
import { useNavigate } from "react-router-dom"

type ButtonData = {
    text: string,
    navigatePath: string,
    width?: string,
    onClick?: () => void
}
export default function Button({text, navigatePath, width = '60%', onClick = undefined}: ButtonData) {
    const navigate = useNavigate();
    return(
        <ButtonWrappler width={width}>
            <button onClick={()=> {
                navigate(navigatePath)
                if(onClick){
                    onClick()
                }
                }}><h1>{text}</h1></button>
        </ButtonWrappler>
    )
}
interface Props {
    width: string;
}
const ButtonWrappler = styled.div<Props>`

display: flex;
justify-content: space-around;
 button{
    width: ${(Props)=> Props.width };
    color: white;
    font-size: 18px;
    font-family: 'Fredoka One', cursive;
    background-color: rgb(74, 58, 255);
    border-radius: 50px;
    border: 0px;
    :hover{
        cursor: pointer;
        background-color: rgb(255, 142, 12);

    }
 }
 @media screen and (max-width: 500px ){
	button{
        font-size: 10px;
    }
}
@media screen and (max-height: 500px ){
	button{
        font-size: 10px;
    }
}
`