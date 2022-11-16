import React,{useContext} from 'react';
import {BsSun, BsSunFill} from "react-icons/bs";

import { ThemeContext } from './ThemeProvider';
import "./styles.scss"


const Button = () => {


    const {handleToggleIcon, isDarkTheme} = useContext(ThemeContext);
    console.log(handleToggleIcon, isDarkTheme)

   
   
  return (

     <div className='button-wrapper'>
        {
            isDarkTheme ? <BsSun size={60} onClick={handleToggleIcon}/> : <BsSunFill size={60} onClick={handleToggleIcon}/>
        }
     </div>

  );
}

export default Button;
