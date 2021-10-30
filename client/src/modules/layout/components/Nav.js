import React from "react";
import styled from "styled-components";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Nav = () => {
    return (
        <NavContainer>
            <DesktopMenu />
            <MobileMenu />
        </NavContainer>
    );
};

export default Nav;

const NavContainer = styled.nav`
  @media(min-width: 30em) {
    width: 100%;
    .desktop {
      display: grid;
      grid-template-columns: .1fr .8fr .1fr; 
      align-items: center;
      justify-content: center;
    }
    .mobile {
      display: none;
    }
    padding: 1rem 0;
  }
  
  @media(max-width: 30em) {
    margin: 20px 20px 0 20px;
    width: calc(100% - 40px);
    
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      
    }
  }
`;
