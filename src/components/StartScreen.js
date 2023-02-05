import './StartScreen.scss'
import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import { useState } from 'react';

const StartScrenn = ({handleTheme, theme, startGame }) => {
   
  return (
    <>
    <div className={`theme ${theme ? 'light' : 'dark'}`}>
   
  <div className='container'> 
     <h1>Guess The Word </h1>  
     <p>Clique no botão abaixo e comece jogar!</p>
     <button onClick={startGame}>Começar o jogo</button>
     <h3>Tema: </h3>
     {theme ?
     <span onClick={handleTheme}><BsFillMoonFill size={50} /></span>
     : <span onClick={handleTheme}> <BsSun size={50} color="#FFF"/></span> 
     
     }
     
  </div>
  </div> 
  
  </>
  )
}

export default StartScrenn