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

const guessesQty = 3

function App() {
      const [gameStage, setGameStage] = useState(stages[0].name);
      const [words] = useState(wordsList);

      const [theme, setTheme] = useState(true)

      const [pickedWord, setPickedWord] = useState("");
      const [pickedCategory, setPickedCategory] = useState("");
      const [letters, setLetters] = useState([]);

      const [guessedLetters, setGuessedLettes] = useState([]);
      const [wrongLetters, setWrongLetters] =useState([]);
      const [guesses, setGuesses] = useState(guessesQty);
      const [score, setScore] = useState(-100);
      const [animationWin, setAnimationWin] = useState(false);

      const handleTheme = () => {
          if(theme === true) {
              setTheme(false)
          } else {
              setTheme(true)
          }
          
      }

      const pickWordAndCategory = useCallback(() => {
        // pick a random category
        const categories = Object.keys(words);
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

        // pick a ramdom word
        const word = words[category][Math.floor(Math.random() * words[category].length)];

        return { word, category };
     
      }, [words]);

      // Start the game
      const startGame = useCallback(() => {
        //clear all leters
        clearLetterStates();
        // pick word and pick category
        const { word, category } = pickWordAndCategory();

       // create an array of letters
       let wordLetters = word.split("");

       wordLetters = wordLetters.map((l) => l.toLowerCase());

       // fill states
       setPickedWord(word);
       setPickedCategory(category);
       setLetters(wordLetters);

       setGameStage(stages[1].name);

      }, [pickWordAndCategory]);

      // process the letter input
      const verifyLetter = (letter) => {
        
        const normalizedLetter = letter.toLowerCase();

        // check if letter has already been utilized
        if(
           guessedLetters.includes(normalizedLetter) || 
           wrongLetters.includes(normalizedLetter)) {
            return;
        }

        // push guessed letter or remove a guess
        if(letters.includes(normalizedLetter)) {
          setGuessedLettes((actualGuessedLetters) => [
            ...actualGuessedLetters,
            normalizedLetter
          ])
        } else {
          setWrongLetters((actualWrongLetters) => [
            ...actualWrongLetters,
            normalizedLetter
          ]);

          setGuesses((actualGuesses) => actualGuesses - 1 );
        }

      };

      const clearLetterStates = () => {
        setGuessedLettes([]);
        setWrongLetters([]);
      }

      // check if guesses ended
      useEffect(() => {
          if(guesses <= 0) {
            // reset all states
            clearLetterStates()
            setGameStage(stages[2].name)
          }
      }, [guesses])

      // check win condition
      useEffect(() => {

        const uniqueLetters = [...new Set(letters)];

        // win condition
        if(guessedLetters.length === uniqueLetters.length) {
          //Add score
          setScore((actualScore) => actualScore += 100);

          setAnimationWin(true);

          setTimeout(function() {
            setAnimationWin(false)
          }, 4000);

          // restart game with mew word
          startGame();
        }

      }, [guessedLetters, letters, startGame]);

      // restarts the game
      const retry = () => {
        setScore(0);
        setGuesses(guessesQty);

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
       pickedWord={pickedWord}
       pickedCategory={pickedCategory}
       letters={letters}
       guessedLetters={guessedLetters}
       wrongLetters={wrongLetters}
       guesses={guesses}
       score={score}
       animationWin={animationWin}
       />}

       {gameStage === "end" && <GameOver 
       handleTheme={handleTheme} 
       theme={theme}
       retry={retry}
       score={score}
       />}
     
    </div>
  );
}

export default App;
