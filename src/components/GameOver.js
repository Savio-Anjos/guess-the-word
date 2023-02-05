import "./GameOver.scss"
import Theme from "./Theme"
const GameOver = ({ theme, handleTheme, retry }) => {
  return (
   
         <div className={`theme ${theme ? 'light' : 'dark'}`}>
        <h1>Game over</h1>
        <button className="button" onClick={retry}>Resetar Jogo</button>
        <Theme  theme={theme} handleTheme={handleTheme}/>
    </div>
  )
}

export default GameOver;