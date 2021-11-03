import styled from "styled-components";

export const GradientBGContainer = styled.a`
  display: flex;
  position: relative;
  padding: 1px;
  box-shadow: rgb(0, 0, 0) 0px 0px 40px;
  z-index: 0;
  cursor: pointer;
  opacity: 0.75;
  transition: .5s opacity;
  text-decoration: none;
  &:hover {
   opacity: 1;
  }
  
  img {
    position: relative;
    z-index: 1;
  }
`

export const Gradient = styled.div`
  animation: 10s ease-in-out 0s infinite normal both running pulse;
  filter: blur(1px);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  z-index: 0;
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(52,148,230,1) 0%, rgba(236,110,173,1) 100%) repeat scroll 0% 0%;
  opacity: .3;
`