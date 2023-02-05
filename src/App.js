//CSS
import './App.scss';

// React
import { useCallback, useEffect, useState } from 'react';

// data 
import { wordsList } from "./data/words";

//Components
import StartScrenn from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {
      const [gameStage, setGameStage] = useState(stages[0].name);
      const [words] = useState(wordsList);

      const [theme, setTheme] = useState(true)

      const handleTheme = () => {
          if(theme === true) {
              setTheme(false)
          } else {
              setTheme(true)
          }
          
      }

      // Start the game
      const startGame = () => {
        setGameStage(stages[1].name);
      }

      // process the letter input
      const verifyLetter = () => {
        setGameStage(stages[2].name);
      }

      // restarts the game
      const retry = () => {
        setGameStage([0].name)
      }

  return (
   
    <div className="App">
       {gameStage === "start" && <StartScrenn 
       handleTheme={handleTheme} 
       theme={theme} 
       startGame={startGame}
       />}

       {gameStage === "game" && <Game 
       handleTheme={handleTheme} 
       theme={theme}
       verifyLetter={verifyLetter}
       />}

       {gameStage === "end" && <GameOver 
       handleTheme={handleTheme} 
       theme={theme}
       retry={retry}
       />}
     
    </div>
  );
}

export default App;
