import "./Game.scss";
import { BsSun, BsFillMoonFill } from 'react-icons/bs';

const Game = ({ handleTheme, theme,}) => {
  return (

    <div className={`theme ${theme ? 'light' : 'dark'}`}>
    <div>Game</div>
    <h3>Tema: </h3>
     {theme ?
     <span onClick={handleTheme}><BsFillMoonFill size={50} /></span>
     : <span onClick={handleTheme}> <BsSun size={50} color="#FFF"/></span> 
     
     }
     </div>

  )
}

export default Game