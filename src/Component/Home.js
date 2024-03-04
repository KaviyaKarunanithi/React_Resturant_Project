import React from "react";
import Body from '../Component1/Body';
import Menu from "../Component1/Menu1";
import Content from "../Component1/Content";
import Image from "../Component2/Image";
import Footer from "../Footer/Footer";
import Collage from "../Component2/Collage";
const Home = () => {
    return(
        <>
             <Body />
             <Menu />
             {/* <Icons /> */}
             <br></br>
            <br></br>
            <Content />
          {/* <Image></Image> */}
          <Collage />
            {/* <Collage /> */}
            <Footer />
        </>
    )
};
export default Home;