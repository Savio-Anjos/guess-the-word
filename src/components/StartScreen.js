import './StartScreen.scss'

import Theme from './Theme';

const StartScrenn = ({handleTheme, theme, startGame }) => {
   
  return (
    <>
    <div className={`theme ${theme ? 'light' : 'dark'}`}>
   
  <div className='container'> 
     <h1>Guess The Word </h1>  
     <p>Clique no botão abaixo e comece jogar!</p>
     <button onClick={startGame}>Começar o jogo</button>
     <Theme theme={theme} handleTheme={handleTheme}/>
     
  </div>
  </div> 
  
  </>
  )
}

export default StartScrenn