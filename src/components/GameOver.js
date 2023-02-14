import { useState } from "react";

import "./GameOver.scss";
import "./Theme.scss";
import Theme from "./Theme";
import Lottie from 'react-lottie';
import animationGameOverDate from './gameOverAnimation.json';


const GameOver = ({ theme, handleTheme, retry, score }) => {

  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  });
  
  const optionsGameOver = {
    loop: true,
    autoplay: true, 
    animationData: animationGameOverDate,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
   
         <div className={`theme ${theme ? 'light' : 'dark'}`}>
        
        <Lottie 
              options={optionsGameOver}
              height={400}
              width={400}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}  
              />
        <h2>
          A sua pontuação foi: <span>{score}</span>
        </h2>
        <button className="button" onClick={retry}>Resetar Jogo</button>
        <Theme  theme={theme} handleTheme={handleTheme}/>
    </div>
  )
}

export default GameOver;