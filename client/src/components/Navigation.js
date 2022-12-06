import React, { useState } from "react";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faBars} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom";

import "./Navigation.css";

function Navigation(){
    const [showMenu,setShowMenu]= useState(false);
    let menu 
    let menuMask
    if(showMenu){
        menu = 
        <div className="menu">
            <ul>
                <li className="nav-item" onClick={()=>setShowMenu(false)}>
                    <Link className="nav-link" to="/">
                    Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about-us" onClick={()=>setShowMenu(false)}>
                    About Us
                    </NavLink>
                </li>
            </ul>
        </div>
        menuMask = <div className="menuMask" onClick={()=>setShowMenu(false)}></div>
    }
    return(
        <nav>
            <span className="text-xl" style={{"color":"white"}}>
            <FontAwesomeIcon
            icon={faBars}
            onClick={()=>setShowMenu(!showMenu)}
            />
            </span>
            {menuMask}
            {menu}

        </nav>
    )
}
export default Navigation;

// const [showMenu,setShowMenu]= useState(false);
//     const maskTransitions = useTransition(showMenu,{
//         from: { position:'absolute', opacity: 0 },
//         enter: { opacity: 1 },
//         leave: { opacity: 0 },
//     })
//     const menuTransitions = useTransition(showMenu,null,{
//         from: { opacity: 0, transform: 'translateX(-100%)' },
//         enter: { opacity: 1, transform: 'translateX(0%)' },
//         leave: { opacity: 0, transform: 'translateX(-100%)' },
//     })


//     return(
//         <nav>
//             <span className="text-xl" style={{"color":"white"}}>
//             <FontAwesomeIcon
//             icon={faBars}
//             onClick={()=>setShowMenu(!showMenu)}
//             />
//             </span>

//             {
//                 maskTransitions.map(({item,key,props}) => 
//                 item && <animated.div key={key}style={props} className="menuMask"
//                 onClick={()=>setShowMenu(false)}>
//                 </animated.div>
//                   )
//             }

//             {
//                 menuTransitions.map(({item,key,props}) => 
//                 item && <animated.div key={key}style={props} className="menu">
//                     This is the menu
//                 </animated.div>
//                   )
//             }

//         </nav>
//     )
// }