import { useState } from 'react';
import './StartScreen.scss'

import Theme from './Theme';

import Lottie from 'react-lottie';
import animationStart from './startAnimation.json';

const StartScrenn = ({handleTheme, theme, startGame }) => {

  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  });

  const optionsStart = {
    loop: true,
    autoplay: true, 
    animationData: animationStart,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
   
  return (
    <>
    <div className={`theme ${theme ? 'light' : 'dark'}`}>
   
  <div className='container'> 
     <h1>Guess The Word </h1>  
     <Lottie 
              options={optionsStart}
              height={200}
              width={200}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}  
              />
     <p>Clique no botão abaixo e comece jogar!</p>
     <button className='button' onClick={startGame}>Começar o jogo</button>
     
     <Theme theme={theme} handleTheme={handleTheme}/>
     
  </div>
  </div> 
  
  </>
  )
}

export default StartScrenn