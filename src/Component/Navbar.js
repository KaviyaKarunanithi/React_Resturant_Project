import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-dark">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <img src="https://themewagon.gitlab.io/restaurant/assets/img/logo.png" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" id="home">
          <Link class="nav-link" aria-current="page" to='/'>Home</Link><br></br>
        </li><br></br>
        <li class="nav-item" id="page">
          < Link class="nav-link" to='Pages'>Page</Link>
        </li>
        <li class="nav-item" id="menu">
          <Link class="nav-link" to ='Menu'> Menu</Link>
         </li>
        <li class="nav-item" id="about">
          <Link class="nav-link" to ="About">About</Link>   
        </li>
      </ul>
      <div className='order'>
      <button>Order Now</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
