import "./Game.scss";
import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import Theme from "./Theme";

const Game = ({ handleTheme, theme,}) => {
  return (

    <div className={`theme ${theme ? 'light' : 'dark'}`}>
    <div>Game</div>
    <h3>Tema: </h3>
     <Theme  theme={theme} handleTheme={handleTheme}/>
     </div>

  )
}

export default Game