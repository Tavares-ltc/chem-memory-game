import Menu from './pages/Menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from './pages/Game';

function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Menu/>} />
              <Route path="/game" element={ <Game/>} />
            </Routes>
    </BrowserRouter>
  
  );
}

export default App;
