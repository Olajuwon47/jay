import React, {} from 'react';
import { Tilt } from 'react-tilt'
import brain from './brain.png';
import './Logo.css';
    const Logo =() =>{
        return(
          <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-5'  options={{max: 35}} style={{ height: 150, width: 150 }}>
               <div className='Tilt-inner pa3'>
                <img /*style={{paddingTop: '3px'}}*/id='inputimage' alt='logo' src={brain} width='100px' height='auto'/> </div>
            </Tilt>
          </div>  
        );
    }

export default Logo;