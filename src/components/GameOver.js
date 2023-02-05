import "./GameOver.scss"
import Theme from "./Theme"
const GameOver = ({ theme, handleTheme }) => {
  return (
   
         <div className={`theme ${theme ? 'light' : 'dark'}`}>
        <h1>Game Over</h1>
        <Theme  theme={theme} handleTheme={handleTheme}/>
    </div>
  )
}

export default GameOver