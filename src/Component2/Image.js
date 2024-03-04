import React from 'react'
import './Image.css';
import Fries from './Assets1/fries.png';
import Catering from'./Assets1/catering.png';
function Image() {
  return (
    <div class='parent4'>
      <div class='muruga'>
        <div class='img0'>
            <img src={Fries} alt='' />
        </div>
        <div class='img0'>
            <h6>Hungry?</h6>
            <h1>We will Home deliver!</h1>
            <button>Make an Order</button>
        </div>
      </div>
      {/* catering */}
      <div class="catering">
        <div class='ct0'>
            <h4>Catering</h4>
            <h1>We Manage Your Events</h1>
            <p>Allow our Chef to deliver the perfect private dinner or cocktail party experience in your<br></br> home; or let us simply add a little extra flavor to your next office meeting, boat trip, or<br></br> beach picnic. By partnering with our sibling location Rosewater Wine & Spirits, we can<br></br> offer a full array of bar services and beverage selections. Email us to learn more.</p>
        </div>
        <div class='ct1'>
            <h4>We Cater in Weddings,<br></br>
Corporate Functions<br></br>
and Events</h4>
           
            <img src={Catering} alt='' />
            <button>HIRE US NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Image;
