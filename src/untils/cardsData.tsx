
export type CardData = {
  imgSrc: string;
  text: string;
  functionName: string;
  flipped: boolean;
  id: number;
};

export function generateSortedCards(difficulty: string, numberOfCards: number) {
  console.log(difficulty)
  let cards = [
    {
      imgSrc: "/organic-groups/Acido-carboxilico.png",
      text: "Ácido carboxílico",
      functionName: "Ácido carboxílico",
      flipped: false,
    },
    {
      imgSrc: "/organic-groups/Alcano.png",
      text: "Alcano",
      functionName: "Alcano",
      flipped: false,
    },
    {
      imgSrc: "/organic-groups/Alceno.png",
      text: "Alceno",
      functionName: "Alceno",
      flipped: false,
    },
    {
      imgSrc: "/organic-groups/Alcino.png",
      text: "Alcino",
      functionName: "Alcino",
      flipped: false,
    },
    {
      imgSrc: "/organic-groups/Alcool.png",
      text: "Álcool",
      functionName: "Álcool",
      flipped: false,
    },
    {
      imgSrc: "/organic-groups/Aldeido.png",
      text: "Aldeído",
      functionName: "Aldeído",
      flipped: false,
    },
    {
      imgSrc: "/organic-groups/Amida.png",
      text: "Amida",
      functionName: "Amida",
      flipped: false,
    },
    {
      imgSrc: "/organic-groups/Amina.png",
      text: "Amina",
      functionName: "Amina",
      flipped: false,
    },
    {
      imgSrc: "/organic-groups/Anel-benzeno.png",
      text: "Fenil",
      functionName: "Fenil",
      flipped: false,
    },
    {
      imgSrc: "/organic-groups/Cetona.png",
      text: "Cetona",
      functionName: "Cetona",
      flipped: false,
    },
    {
      imgSrc: "/organic-groups/Ester.png",
      text: "Éster",
      functionName: "Éster",
      flipped: false,
    },
    {
      imgSrc: "/organic-groups/Eter.png",
      text: "Éter",
      functionName: "Éter",
      flipped: false,
    },
  ];
  if (difficulty === "hard") {
    const sortedCards = random(cards, numberOfCards);
    const cardsWithoutImage = filterImage(sortedCards);
    const cardsWithouText = filterText(sortedCards)
    const duplicatedCards = cardsWithouText.concat(cardsWithoutImage);
    const sortedDuplicatedCards = sort(duplicatedCards, numberOfCards)
    return createId(sortedDuplicatedCards);
  }
  const sortedCards = random(cards, numberOfCards);
  const duplicatedCards = sortedCards.concat(sortedCards);
  const sortedDuplicatedCards = sort(duplicatedCards, numberOfCards)
  return createId(sortedDuplicatedCards);
}
function random(arr: Omit<CardData, "id">[], numberOfCards: number) {
  const quantity = numberOfCards/2
  const resp: any = [];
  let hashtable: any = {};
  while (resp.length < quantity) {
    const number = Math.floor(Math.random() * arr.length);
    if (!hashtable[number]) {
      hashtable[number] = true;
      resp.push(arr[number]);
    }
  }
  return resp;
}
function sort(arr: Omit<CardData, "id">[], quantity: number){
  const resp: any = [];
  let hashtable: any = {};
  while (resp.length < quantity) {
    const number = Math.floor(Math.random() * arr.length);
    if (!hashtable[number]) {
      hashtable[number] = true;
      resp.push(arr[number]);
    }
  }
  return resp;
}
function filterImage(array: Omit<CardData, "id">[]) {
  return array.map( card =>  ({ ...card, imgSrc: "detective.png" }));
}
function filterText(array: Omit<CardData, "id">[]){
  return array.map( card =>  ({ ...card, text: '?' }));
}
function createId(array: Omit<CardData, "id">[]): CardData[] {
  return array.map((object, index) => ({ ...object, id: index }));
}
