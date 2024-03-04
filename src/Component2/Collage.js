import React from 'react'
import './Collage.css';
import C1 from './Assets1/c1.jpg';
import Collage1 from './Assets1/c2.jpg';
import Collage2 from './Assets1/c3.jpg';
import Collage3 from './Assets1/c4.jpg';
import Collage4 from './Assets1/c5.jpg';
import Collage5 from './Assets1/c6.jpg';
import Collage6 from './Assets1/c7.jpg';

function Collage() {
  return (
    // <div class='parent5'>
    //   <div class='collage'>
    //     <div class='c1'>
    //      <div class='c4'>
    //          <img src={C1} alt='' />
    //          </div>
    //          <div class='c3'>
    //              <img src={Collage4} alt='' />
                 
    //              <img src={Collage5} alt='' />
    //              <img src={Collage6} alt='' />
    //              <img src={Collage1} alt=''/>
    //             <img src={Collage2} alt=''/>
    //            <img src={Collage3} alt=''/>
    //          </div>
    //     </div>
    //   </div>
    // </div>
    <div className='parent-coll'>
      <div className='sub-coll-1'>
      <img src={C1}/>
      </div>
      <div className='sub-coll-2'>
      <div className='coll1'>
         <img src={Collage1}/>
         <img src={Collage2}/>
         <img src={Collage3}/>
      </div>
      <div className='coll2'>
         <img src={Collage4}/>
         <img src={Collage5}/>
         <img src={Collage6}/>
      </div>
      </div>
    </div>
  )
}

export default Collage
