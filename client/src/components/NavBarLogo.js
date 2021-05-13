import React from 'react';
import NavBarCSS from './NavBarComps.module.css'


function Applogo (){
    return (
        <img src="../logo512.png" className={NavBarCSS.logo} alt="app logo"></img>
    )
}

export default Applogo;

