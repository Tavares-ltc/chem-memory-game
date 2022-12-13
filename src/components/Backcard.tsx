import styled from "styled-components";
import {IoIosFlask} from "react-icons/io"
export default function Backcard(){
    return(
        <CardWrappler>
            <img src="card.jpg"></img>
            <ContentWrappler>
        <ImageStyle>
        
        </ImageStyle>
            </ContentWrappler>
        </CardWrappler>
    )
}
const CardWrappler = styled.div`
width: 130px;
height:190px;
background-color: #4f4f4f;
border: 5px solid #4f4f4f;
border-radius: 10px;

box-sizing: border-box;
position: absolute;
overflow: hidden;
backface-visibility: hidden;
img {
    width: 100%;
    object-fit: cover;
    z-index: 1;
    opacity: 100%;
}
@media screen and (min-width: 1000px ){
	width: 190px;
    height:265px;
}
`
const ImageStyle = styled.div`
width: 50%;
height:50% ;
background-color: #fffafa;
border: 5px solid #4f4f4f;
border-radius: 50px;
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
opacity: 100%;

img{
    width: 85%;
    height: 50%;
    object-fit: cover;
    opacity: 100%;
    border-radius: 2px;

}
`

const ContentWrappler = styled.div`
margin: 10px 0 10px 0;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
height: 90%;
width: 100%;

`