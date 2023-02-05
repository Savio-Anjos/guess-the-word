import { BsSun, BsFillMoonFill } from 'react-icons/bs';

const Theme = ({ theme, handleTheme }) => {
  return (
    <>
    <h3>Tema: </h3>
     {theme ?
     <span onClick={handleTheme}><BsFillMoonFill size={50} /></span>
     : <span onClick={handleTheme}> <BsSun size={50} /></span> 
     
     }</>
  )
}

export default Theme