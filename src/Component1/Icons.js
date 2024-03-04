import React from 'react'
import Teacup from './Assets/teacup.png';
import Spoon from './Assets/spoon.png';
import Dinner from './Assets/dinner.png';
import IceCreamCup from './Assets/icecream.png';
import Glass from './Assets/glass.png'
import "./Icons.css";

function Icons() {
  return (
    <div class="parent2">
      <div class="kaviya">
        <div class='ic1'>
          <img src={Teacup} alt=' '/>
          <ul>
            <li><a href ="#">Breakfast</a></li>
          </ul> 
        </div>
        <div class='ic2'>
          <img src={Spoon} alt=' ' />
          <ul>
            <li><a href ="#">Lunch</a></li>
          </ul> 
        </div>
        <div class='ic3'>
          <img src={Dinner} alt=' ' />
          <ul>
            <li><a href ="#">Dinner</a></li>
          </ul> 
        </div>
        <div class="ic4">
          <img src={IceCreamCup} alt='' />
          <ul>
            <li><a href ="#">Desserts</a></li>
          </ul> 
        </div>
        <div class='ic5'>
          <img src={Glass} alt=' ' />
          <ul>
            <li><a href ="#">Drinks</a></li>
          </ul> 
        </div>
        <hr></hr>
      </div>
    </div>
  )
}

export default Icons
