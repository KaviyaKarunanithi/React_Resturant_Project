import React from 'react'
import "./Menu1.css";
function Menu1() {
  return (
    <div class="parent1">
        <div class="heading">
        <h5>MENU</h5>
          <h2>Taste Our Foods & Enjoy</h2>
        </div>
      <div class="menu">
          
          <div class="img1">
          <img src="https://themewagon.gitlab.io/restaurant/assets/img/food/bowl-calcium-cereal.png" />
          <div class="pa">
            {/* <div class="text">BLUEBERY MILK SMOTHIE</div> */}
          </div>
          </div>
          <div class="img2">
            <img src="https://themewagon.gitlab.io/restaurant/assets/img/food/bread-bun-chopping-board.png"/>
            <div class="text1">
              {/* <h4>PUMKIN SPICE JUICE</h4> */}
            </div>
          </div>
          <div class="img3">
            <img src="https://themewagon.gitlab.io/restaurant/assets/img/food/antioxidant-beverage-carrot-juice.png" />
            <div class="text2">
              {/* <h4>SPICE CHICKEN NOODELS</h4> */}
            </div>
          </div>
        
          <div class="img4">
            <img src= "https://themewagon.gitlab.io/restaurant/assets/img/food/bowl-delicious-dinner.png"/>
            <div class="text3">
              {/* <h4>SPICE CHICKEN BURGER</h4> */}
            </div>
          </div>
         
        </div>
    </div>
  )
}

export default Menu1
