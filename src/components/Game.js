import "./Game.scss";
import "./Theme.scss";
import Theme from "./Theme";
import { useState } from "react";

const Game = ({ handleTheme, theme, verifyLetter}) => {
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
          <span>Pontuação: 000</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span className="category">Fruta</span>
        <p>Você ainda tem 3 tentativa(s)</p>
      </h3>

      <div className="centerContent">
     
      <div className={`theme ${theme ? 'wordContainerLight' : 'wordContainerDark'}`}>
        <span className={`theme ${theme ? 'letterLight' : 'letterDark'}`}>A</span>
        <span className={`theme ${theme ? 'blankSquareLight' : 'blankSquareDark'}`}></span>
        <span className={`theme ${theme ? 'blankSquareLight' : 'blankSquareDark'}`}></span>
        <span className={`theme ${theme ? 'blankSquareLight' : 'blankSquareDark'}`}></span>
        <span className={`theme ${theme ? 'blankSquareLight' : 'blankSquareDark'}`}></span>
        
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
        <span> a,</span>
        <span> b,</span>
      </div>
      
        
    </div>
     <Theme  theme={theme} handleTheme={handleTheme}/>
     </div>

  )
}

export default Game;