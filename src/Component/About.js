import React from "react";
import './About.css';
import Footer from "../Footer/Footer";
const About = () => {
    return(
        <div className="about">
            <div class='v1'>
                <div className="v2">
                
                <h4>About Us</h4>
                <h1>Who Are We?</h1><br></br>
                <p>We are a chain of theme restaurant founded in 1971 in London. In<br></br> 1979, the cafe began covering its walls with rock and roll <br></br>memorabilia, a tradition which expanded to others in the chain.</p>
                <button>Learn More</button>
               
                </div>
                <div class='v3'>
                    <img src='	https://themewagon.gitlab.io/restaurant/assets/img/food/soup.png' />
                </div>
            </div>

            <Footer />
         </div>
    )
};
export default About;
