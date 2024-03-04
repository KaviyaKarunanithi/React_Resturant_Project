import React from 'react';
import './fooddetails.css';
import Food3 from './Assets4/food3.jpg'

const FoodDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={Food3} alt="Teriyaki Chicken Noodle Bowl" className="food-image" />
        </div>
        <div className="col-md-6">
          <h2>Teriyaki Chicken Noodle Bowl</h2>
          <p>Calories: 611</p>
          <p>Price: <span className="original-price">₹299</span> <span className="discounted-price">₹149</span></p>
          <button className="offer-button">50% OFF</button>
          <button className="add-button">ADD</button>
          <div className="details">
            <h3>DETAILS ABOUT THIS MEAL</h3>
            <p>A classic Japanese dish of broiling the chicken in the wok, glazing with Teriyaki and combining the flavours of the sauce in the noodles along with fresh veggies and egg. Truly a creation. This noodle bowl is a must try! All our bowls are prepared fresh on your order.</p>
            <div className="icon">Chicken icon</div>
            <p>NON VEG</p>
          </div>
          <div class='flex'>
               <div className="ingredients">
                   <h3>INGREDIENTS</h3>
                   <ul>
                     <li>Noodles</li>
                     <li>Egg</li>
                     <li>Chicken Breast Boneless</li>
                     <li>Cabbage</li>
                    <li>Onion</li>
                    <li>Carrot</li>
                   <li>Tri Bell Peppers</li>
                   <li>Teriyaki Sauce</li>
                   <li>Soya</li>
                   <li>Spring Onion</li>
                   <li>Sesame Seeds</li>
                 </ul>
               </div>
             <div className="nutrition">
                <h3>NUTRITION</h3>
                 <p>611 ENERGY (KCAL)</p>
                 <p>21 Fat (g)</p>
                 <p>51 Carbs (g)</p>
                 <p>6 Fiber (g)</p>
                 <p>24 Protein (g)</p>
           </div>
           </div>
            
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
