import "./Game.scss";
import "./Theme.scss";
import Theme from "./Theme";
import { useState } from "react";

const Game = ({ 
  handleTheme, 
  theme, 
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
      const [letter, setLetter] = useState("");
      
      const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);

        setLetter("")
      }

  return (

    <div className={`theme ${theme ? 'light' : 'dark'}`}>
    <div className="game">
      <p className="points">
          <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span className="category">{pickedCategory}</span>
        <p>Você ainda tem {guesses} tentativa(s)</p>
      </h3>

      <div className="centerContent">
     
      <div className={`theme ${theme ? 'wordContainerLight' : 'wordContainerDark'}`}>
       {letters.map((letter, i) => (
        guessedLetters.includes(letter) ? (
          <span className={`theme ${theme ? 'letterLight' : 'letterDark'}`}>{letter}</span>
        ) : (   
          <span key={i} className={`theme ${theme ? 'blankSquareLight' : 'blankSquareDark'}`}></span>
        )
       ))}
        
      </div>
      </div>

      <div className={`theme ${theme ? 'letterContainerLight' : 'letterContainerDark'}`}>
        <p>Tente advinhar uma letra da palavra: </p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)}/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ) )}
      </div>
      
        
    </div>
     <Theme  theme={theme} handleTheme={handleTheme}/>
     </div>

  )
}

export default Game;