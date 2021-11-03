import React from 'react';
import Menu from "./Menu";
import {LoginButton} from "./index";
import {GradientBGContainer, Gradient} from "../../../common/components/styled"
import styled from 'styled-components'

const DesktopMenu = () => {
    return (
        <div className={"desktop"}>
            <ImageWrapper>
                <Gradient />
                <img src={"/images/logo.svg"} alt={"Company Logo"} />
            </ImageWrapper>
            <Menu />
            <LoginButton>Log in</LoginButton>
        </div>
    )
}

export default DesktopMenu;

const ImageWrapper = styled(GradientBGContainer)`
  height: 46px;
  width: 46px;
  border-radius: 100%;
`