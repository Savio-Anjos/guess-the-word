import "./Game.scss";
import "./Theme.scss";
import Theme from "./Theme";

const Game = ({ handleTheme, theme, verifyLetter}) => {
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
     
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
        <span className="blankSquare"></span>
        <span className="blankSquare"></span>
        <span className="blankSquare"></span>
      </div>

      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra: </p>
        <form>
          <input type="text" name="letter" maxLength="1" required/>
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