import React from 'react';
import styled from "styled-components";
import {BsArrowRight} from "react-icons/bs";

const Announcement = ({text, icon, link}) => {
    return (
        <AnnouncementContainer href={link}>
            <Gradient />
            <ContentContainer>
                <h3>{text}</h3>
                <span>See what's new <BsArrowRight /></span>
            </ContentContainer>
        </AnnouncementContainer>
    )
}

export default Announcement

const AnnouncementContainer = styled.a`
  display: flex;
  position: relative;
  padding: 1px;
  box-shadow: rgb(0, 0, 0) 0px 0px 40px;
  z-index: 2;
  cursor: pointer;
  opacity: 0.75;
  transition: .5s opacity;
  border-radius: var(--border-radius);
  text-decoration: none;
  &:hover {
   opacity: 1;
  }
`

const Gradient = styled.div`
  animation: 10s ease-in-out 0s infinite normal both running pulse;
  filter: blur(10px);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(52,148,230,1) 0%, rgba(236,110,173,1) 100%) repeat scroll 0% 0%;
`

const ContentContainer = styled.div`
  z-index: 1;
  background-color: #000;
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: .5rem 1rem;
  h3 {
    padding: 0;
    margin: 0 0 .75rem 0;
    font-size: 1rem;
    color: var(--text-white);
  }
  img {
    height: 1.5rem;
    width: auto;
  }
  
  span {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: .25rem;
    font-size: .875rem;
    color: var(--main-blue);
  }
`