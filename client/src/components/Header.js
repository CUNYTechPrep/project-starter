import React from "react";
import Navigation from "./Navigation";

function Header(){
    return(
        <header className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3 d-flex justify-content-between">
            <span style={{"color":"white"}}>Contador</span>
            <Navigation/>
        </header>
    )
}
export default Header;