import styled from "styled-components";
type CardContent = {
    imgSrc: string,
    functionName: string
}
export default function Card({imgSrc, functionName}: CardContent){
    return(
        <CardWrappler>
            <img src="card-template.png"></img>
            <ContentWrappler>
        <ImageStyle>
        <img src={imgSrc} alt="organic function" />    
        </ImageStyle>
        <TextStyle>
        <h1>{functionName}</h1>        
        </TextStyle>
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
transform: rotateY(180deg);
img {
    width: 100%;
    position: absolute;
    object-fit: cover;
    z-index: 1;
    opacity: 60%;

}
@media screen and (min-width: 1000px ){
	width: 190px;
    height:265px;
}
`
const ImageStyle = styled.div`
width: 90%;
height:60% ;
background-color: #4f4f4f;
border-radius: 5px;
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 85%;
    height: 50%;
    object-fit: cover;
    opacity: 100%;
    border-radius: 2px;
}
`
const TextStyle = styled.div`
width: 95%;
height: 30%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 10px;
border-radius: 10px;
z-index: 1;
font-weight: bold;
line-height: 15px;
text-align: center;
h1{
    color: #4a3aff;
}
font-family: 'Fredoka One', cursive;
@media screen and (min-width: 1000px ){
line-height: 30px; 
}
`
const ContentWrappler = styled.div`
margin: 10px 0 10px 0;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
height: 90%;
width: 100%;
`