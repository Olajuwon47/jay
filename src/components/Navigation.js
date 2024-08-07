import React, {} from 'react';
    const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
              <p onClick={() => onRouteChange('signout')} className='f5 link dim black underline pa3 pointer'>Signout</p>
           </nav> 
        );
    } else {
        return (
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('signup')} className='f3 link dim black underline pa3 pointer'>Sign Up</p>
          </nav>
        );
      };
    }
export default Navigation ;

    
  