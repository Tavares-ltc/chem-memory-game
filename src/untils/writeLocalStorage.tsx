type LocalStorageData = {
  difficulty?: string | null;
  numberOfCards?: number | null;
  language?: string | null;
};
export function writeLocalStorage({
  difficulty = null,
  numberOfCards = null,
  language = null,
}: LocalStorageData) {
  const gameStorage = {
    difficulty,
    numberOfCards,
    language,
  };
  localStorage.setItem("gameData", JSON.stringify(gameStorage));
}
