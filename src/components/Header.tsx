import styled from "styled-components";

export default function Header() {
return (
    <HeaderStyle>
    <h1>Memorizando Funções orgânicas</h1>
    </HeaderStyle>
)
}

const HeaderStyle = styled.div`
display: flex;
justify-content: space-around;
border-radius: 80px;
h1 {
    font-size: 7em;
    font-weight: 700;
    color: #fc2fff;
    font-family: 'Skranji', cursive;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    text-align: center;
    width: 80%;
    margin-bottom: 100px;

}
@media screen and (max-width: 500px ){
	h1 {
        font-size: 3em;
    }
}
@media screen and (max-height: 500px ){
	h1{
        width: 100%;
        margin-bottom: 20px;
        font-size: 3em;
    }
}

`