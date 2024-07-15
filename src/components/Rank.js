import React from 'react';
   /* const Rank =() =>{
        return(
          <div>
            <div className='white f5 '>
            {'Olajuwon, your current rank is...'}
            </div> 
            <div className='white f1 '>
            {'#1'}
          </div> 
          </div>  
        );
    }*/
    const Rank = ({ name, entries }) => {
      return (
        <div>
          <div className='white f3'>
            {`${name}, your current entry count is...`}
          </div>
          <div className='white f1'>
            {entries}
          </div>
        </div>
      );
    }
export default Rank;


	