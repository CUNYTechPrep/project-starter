import React from 'react';
import styled from "styled-components";
import Announcement from "./components/Announcement";
import {BaseButton} from "../../common/components";

const Hero = () => {
    return (
        <HeroContainer>
            <Announcement text={"October Events 2021"} link={"/test"} icon={"/images/logoWhite.svg"} />
            <h1>
                The event app you'll actually want
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <SignUpButton>Sign up for free</SignUpButton>
        </HeroContainer>
    )
}

export default Hero;

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 4rem 0 0 0;
  
  h1,p {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  
  h1 {
    color: var(--text-white);
    margin: 4rem 0;
  }
  h1 {
    font-size: 2.4rem;
  }
  
  p {
    width: 100%;
    font-size: 1.3rem;
    color: rgba(255,255,255,.7);
  }
`

export const SignUpButton = styled(BaseButton)`
  background: rgb(236,110,142);
  background: linear-gradient(90deg, rgba(236,110,142,1) 0%, rgba(236,110,173,1) 100%);
  box-shadow: rgba(236, 110, 142, .5) 0px 1px 15px;
  margin: 4rem 0;
  padding: 1rem 2rem;
  color: white;
  font-weight: bold;
  letter-spacing: .03rem;
  
  &:hover {
    box-shadow: rgba(236, 110, 142, .5) 0px 1px 40px;
    transition: all 0.1s ease 0s;
  }
`