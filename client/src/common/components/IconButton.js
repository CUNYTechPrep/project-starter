import React from "react";
import styled from "styled-components";
import {BaseButton, FlexContainerCenteredChildren} from "./index";

const IconButton = ({icon, handleClick}) => {
    return (
        <IconButtonContainer onClick={handleClick}>
            {icon}
        </IconButtonContainer>
    )
}

const IconButtonContainer = styled(BaseButton)`
  background: var(--fg);
  height: 100%;
  width: 46px;
  ${FlexContainerCenteredChildren}
`

export default IconButton;