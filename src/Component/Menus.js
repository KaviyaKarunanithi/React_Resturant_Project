import React from "react";
 import Menu2 from './Menu2'
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
function Menus (){
    return(
        <div className="vi">
            <Menu2 />
            <Footer />
            <Outlet />
         </div>
    )
}
export default Menus