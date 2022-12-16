import styled from "styled-components";
import { useRef, useState } from "react";
import Backcard from "./Backcard";
import Frontcard from "./Frontcard";
import { CardData, generateSortedCards } from "../untils/cardsData";


export default function Cards() {
  const firstChoosedCard = useRef<CardData | null>(null);
  const secondChoosedCard = useRef<CardData | null>(null);
  const [disableClick, setDisableClick] = useState(false);
  const [cards, setCards] = useState(() => {
    return generateSortedCards();
  });

  return (
    <>
      {cards.map((item) => (
        <CardWrappler onClick={() => !disableClick && chooseCard(item)}>
          <Card
            functionName={item.functionName}
            imgSrc={item.imgSrc}
            clicked={item.flipped}
          />
        </CardWrappler>
      ))}
    </>
  );

  function chooseCard(card: CardData) {
    if (!firstChoosedCard.current) {
      flipCard(card);
      return firstChoosedCard.current = card;
    }
    if(firstChoosedCard.current && secondChoosedCard.current === null && card.id !== firstChoosedCard.current.id) {
      setDisableClick(true);
      flipCard(card);
      secondChoosedCard.current = card
    }
    if ( secondChoosedCard.current && firstChoosedCard.current.functionName !== secondChoosedCard.current.functionName) {
      setTimeout(() => {
        unflipCards();
        firstChoosedCard.current = null;
        secondChoosedCard.current = null;
        return setDisableClick(false);
      }, 1800);
    } 
    if ( secondChoosedCard.current && firstChoosedCard.current.functionName === secondChoosedCard.current.functionName){
      setTimeout(() => {
        firstChoosedCard.current = null;
        secondChoosedCard.current = null;
        return setDisableClick(false);
      }, 1800);
    }
  }

  function flipCard(cardClicked: CardData | null) {
    if(!cardClicked){
      return;
    }
    const newCards: CardData[] = cards.map((card) => {
      if (card.id !== cardClicked.id) {
        return card;
      }
      return ({...card, flipped: true});
    });
    setCards(newCards);
  }
  function unflipCards() {
    const newCards: CardData[] = cards.map((card) => {
      if (firstChoosedCard.current && secondChoosedCard.current && card.id !== firstChoosedCard.current.id && card.id !== secondChoosedCard.current.id) {
        return card;
      }
      return ({...card, flipped: false});
    });
    setCards(newCards);
  }
}

function Card({
  functionName,
  imgSrc,
  clicked,
}: {
  functionName: string;
  imgSrc: string;
  clicked: boolean;
}) {
  return (
    <>
      <Gamecard clicked={clicked}>
        <Frontcard imgSrc={imgSrc} functionName={functionName} />
        <Backcard />
      </Gamecard>
    </>
  );
}
const CardWrappler = styled.div`
  position: relative;
  width: 130px;
  height: 190px;
  div {
    backface-visibility: hidden;
  }
  @media screen and (min-width: 1000px ){
	width: 190px;
    height:265px;
}
`;
interface Props {
  clicked: boolean;
}

const Gamecard = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  transform: ${(props) =>
    props.clicked ? "rotateY(180deg)" : "rotateY(0deg)"};
`;
