import React from 'react';
import './FaceRecongintion.css';
    const FaceRecongintion =({ imageUrl, box }) =>{
        return(
          <div className='center ma' >
            <div className='absolute mt2' >
             {/* imageUrl &&*/} 
              <img id='inputimage' src={imageUrl}  alt='' width='500px' height='auto'
              />
              <div className='bounding_box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}> </div>
            </div>
         </div>
        );
    }

export default FaceRecongintion;
