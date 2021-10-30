import styled from "styled-components";
import {BaseButton} from "../../../common/components";

export const ResponsiveParentContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    main {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        @media (max-width: 30em) {
            margin: 20px;
            width: calc(100% - 40px);
            height: 100%;
        }
        @media (min-width: 30em) {
            width: 100%;
            height: 100%;
        }
    }
`;

export const ResponsiveContentContainer = styled.div`
    width: 100%;
    @media (min-width: 30em) {
        max-width: 68em;
    }
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  
  li {
    a {
      text-decoration: none;
      color: white;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  @media(min-width: 30em) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    
    li {
      &:not(:first-child) {
        margin-left: .5rem;
      }
    }
  }
  
  @media(max-width: 30em) {
    li {
      &:not(:first-child) {
        margin: 1rem 0;
      }
      
      a {
        font-size: 1rem;
      }
    }
  }
`

export const LoginButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #262626;
  border-radius: var(--border-radius);
  height: var(--button-height);
  width: 100%;
  color: #FFF;
  text-decoration: none;
  text-align: center;
  font-size: .875rem;
  cursor: pointer;
  
  &:hover {
    opacity: .8;
  }
  
  &:active {
    opacity: .9;
  }
`

