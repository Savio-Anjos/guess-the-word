import "./GameOver.scss";
import "./Theme.scss";
import Theme from "./Theme";
const GameOver = ({ theme, handleTheme, retry, score }) => {
  return (
   
         <div className={`theme ${theme ? 'light' : 'dark'}`}>
        <h1>Fim de jogo!</h1>
        <h2>
          A sua pontuação foi: <span>{score}</span>
        </h2>
        <button className="button" onClick={retry}>Resetar Jogo</button>
        <Theme  theme={theme} handleTheme={handleTheme}/>
    </div>
  )
}

export default GameOver;