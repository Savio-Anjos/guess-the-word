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

      const [pickedWord, setPickedWord] = useState("");
      const [pickedCategory, setPickedCategory] = useState("");
      const [letters, setLetters] = useState([]);

      const handleTheme = () => {
          if(theme === true) {
              setTheme(false)
          } else {
              setTheme(true)
          }
          
      }

      const pickWordAndCategory = () => {
        // pick a ramdom category
        const categories = Object.keys(words);
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
        
        console.log(category);

        // pick a ramdom word
        const word = words[category][Math.floor(Math.random() * words[category].length)];
        console.log(word);

        return { word, category };
     
      };

      // Start the game
      const startGame = () => {
        // pick word and pick category
        const { word, category } = pickWordAndCategory();
       // create an array of letters
       let wordLetters = word.split("");

       wordLetters = wordLetters.map((l) => l.toLowerCase());

       console.log(word, category);
       console.log(wordLetters);

       setGameStage(stages[1].name);

      }

      // process the letter input
      const verifyLetter = () => {
        setGameStage(stages[2].name);
      }

      // restarts the game
      const retry = () => {
        setGameStage(stages[0].name)
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
