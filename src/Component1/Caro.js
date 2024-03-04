import React from 'react'

function Caro() {
  return (
    <div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://themewagon.gitlab.io/restaurant/assets/img/food/bowl-calcium-cereal.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://themewagon.gitlab.io/restaurant/assets/img/food/antioxidant-beverage-carrot-juice.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://themewagon.gitlab.io/restaurant/assets/img/food/bowl-delicious-dinner.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Caro
