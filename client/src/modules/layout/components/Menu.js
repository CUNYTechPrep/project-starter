import React from "react";
import {Link} from "react-router-dom";
import {NavList} from "./index";

const Menu = () =>{
    return (
        <NavList>
            <li>
                <Link to={"#"}>
                    About us
                </Link>
            </li>
            <li>
                <Link to={"#"}>
                    Features
                </Link>
            </li>
            <li>
                <Link to={"#"}>
                    Events
                </Link>
            </li>
        </NavList>
    )
}

export default Menu;