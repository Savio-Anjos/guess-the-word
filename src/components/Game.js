import "./Game.scss";
import Theme from "./Theme";

const Game = ({ handleTheme, theme, verifyLetter}) => {
  return (

    <div className={`theme ${theme ? 'light' : 'dark'}`}>
    <div>
        <h1>Game</h1>
        <button className="button" onClick={verifyLetter}>Finalizar Jogo</button>
    </div>
     <Theme  theme={theme} handleTheme={handleTheme}/>
     </div>

  )
}

export default Game