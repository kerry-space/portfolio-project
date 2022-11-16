import React,{useContext} from 'react';
import "./styles.scss";
import Button from './Button';

import { ThemeProvider ,ThemeContext} from './ThemeProvider';


const ContentLayout = () => {
  //now we use param which passet by ThemeContext
  const {theme} = useContext(ThemeContext);

  return (

    <div className='theme-button'>
    <Button />
   
      <div  style={{backgroundColor : theme.backgroundColor, color: theme.color}} >
       
        <div className='content-wrapper' >
            <h1>HEADER</h1>
            <p>TOGGLE THEME USING USECONTEXT</p>
            <footer>FOOTER</footer>
        </div>
    </div>
    
    </div>
  );
}

export default ContentLayout;
