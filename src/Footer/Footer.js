import React from 'react'
import './Footer.css';
import Folks from './Assets2/folks.png';
import Instagram from './Assets2/instagram.png';
import Facebook from './Assets2/facebook.png';
import Twitter from './Assets2/twitter.png';
function Footer() {
  return (
    <div class='parent5'>
      <div class='child'>
        <div class='ch0'>
           
            <img src={Folks} alt='' />
            {/* <img src={Logo} alt='' /> */}
            <div class='ch1'>
            <h3><span>R</span>estaurant</h3>
            <h2>Want To Taste<br></br>
Our Food?</h2>
            <button>Order Online</button>
            </div>
            <div class='ch2'>
                <h6>ABOUT</h6>
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Careers</li>
                    <li>Hire Us</li>
                </ul>
            </div>
            <div class='ch3'>
                <h6>RESOURCES</h6>
                <ul>
                    <li>Terms</li>
                    <li>Helps</li>
                    <li>Privacy</li>
                    
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
