import React from "react";
import Fo1 from './Assets3/fo1.jpg';
import Food2 from './Assets3/food4.png';
import Food3 from './Assets3/food2.jpg'
import Food4 from './Assets3/food3.jpg'
import Food5 from './Assets3/food5.jpg'
import Food6 from './Assets3/food6.jpg'
import './product.js'
import './Menu2.css';

import { Link, Outlet } from "react-router-dom";

function Menu2(){

    
    return(
        <div className="ya">
            <h1>Best Food In Chennai</h1>
            <div class='food'>
            <div class='f2'>
                <Link to='/buy'><img src={Fo1} alt='' /></Link><br></br><br></br>
                <center>
                <h6>Buhari North Indian Meals 400 for One</h6>
                <button>4.5*</button>
                </center>
            </div>
            <div class='f1'>
               <Link to='/buy'> <img src={Food2} alt='' /></Link><br></br><br></br>
                <center>
                    <h6>Panner Fry </h6>
                    <button>3.5*</button>
                </center>
            </div>
            <div class='f3'>
                <Link to='/buy'><img src={Food3} alt='' /></Link><br></br><br></br>
                <center>
                    <h6>Wendy's Burger 300 for One</h6>
                    <button>40.0*</button>
                </center>
            </div>
            </div>
            <div class='sub-food'>
                <div class='f4'>
                    <Link to='/buy'><img src={Food4} alt='' /></Link><br></br><br></br>
                    <center>
                    <h6>Wendy's Burger 300 for One</h6>
                    <button>40.0*</button>
                </center>
                </div>
                <div class='f5'>
                   <Link to='/buy'> <img src={Food5} alt='' /></Link><br></br><br></br>
                    <center>
                    <h6>Wendy's Burger 300 for One</h6>
                    <button>40.0*</button>
                </center>
                </div>
                <div class='f6'>
                  <Link to='/buy'><img src={Food6} alt='' /></Link><br></br><br></br>
                    <center>
                    <h6>Wendy's Burger 300 for One</h6>
                    <button>40.0*</button>
                   
                </center>
                </div>
            </div>
            
        </div>
    )
}
export default Menu2;