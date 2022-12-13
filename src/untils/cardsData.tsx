export type CardData = {
    imgSrc: string;
    functionName: string;
    flipped: boolean;
    id: number;
}

export function generateSortedCards() {
    const cards = [
        {
          imgSrc: "/organic-groups/Acido-carboxilico.png",
          functionName: "Ácido carboxílico", flipped: false
        },
        { imgSrc: "/organic-groups/Alcano.png", functionName: "Alcano", flipped: false },
        { imgSrc: "/organic-groups/Alceno.png", functionName: "Alceno", flipped: false },
        { imgSrc: "/organic-groups/Alcino.png", functionName: "Alcino", flipped: false },
        { imgSrc: "/organic-groups/Alcool.png", functionName: "Álcool", flipped: false },
        { imgSrc: "/organic-groups/Aldeido.png", functionName: "Aldeído", flipped: false },
        { imgSrc: "/organic-groups/Amida.png", functionName: "Amida", flipped: false },
        { imgSrc: "/organic-groups/Amina.png", functionName: "Amina", flipped: false },
        { imgSrc: "/organic-groups/Anel-benzeno.png", functionName: "Fenil", flipped: false },
        { imgSrc: "/organic-groups/Cetona.png", functionName: "Cetona", flipped: false },
        { imgSrc: "/organic-groups/Ester.png", functionName: "Éster", flipped: false },
        { imgSrc: "/organic-groups/Eter.png", functionName: "Éter", flipped: false },
      ];

      const sortedCards = cards.sort(()=> Math.random() -0.5)
      const selectedCards = sortedCards.slice(0, 6)
      const duplicatedCards = selectedCards.concat(selectedCards)
      const sortedDuplicatedCards = duplicatedCards.sort(()=> Math.random() -0.5)
      return createId(sortedDuplicatedCards)
}


function createId(array: Omit<CardData, "id">[]) : CardData[]  {
return array.map((object, index)=> ({...object, id: index}) )
}