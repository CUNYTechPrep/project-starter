import React from 'react';
import Menu from "./Menu";
import {LoginButton} from "./index";

const DesktopMenu = () => {
    return (
        <div className={"desktop"}>
            <img src={"/images/logo.svg"} alt={"Company Logo"} />
            <Menu />
            <LoginButton>Log in</LoginButton>
        </div>
    )
}

export default DesktopMenu;