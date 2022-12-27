import Menu from "./pages/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import { GameContextProvider } from "./components/GameContextProvider";
function App() {


  return (
    <BrowserRouter>
    <GameContextProvider>
      <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/game" element={<Game />} />
      </Routes>
    </GameContextProvider>
    </BrowserRouter>
  );
}

export default App;
