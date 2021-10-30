import styled, {css} from "styled-components";

export const FlexContainerCenteredChildren = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BaseButton = styled.button`
  border:none;
  border-radius: var(--border-radius);
  ${FlexContainerCenteredChildren};
  cursor: pointer;
  
  &:hover {
    opacity: .8;
  }
  
  &:active {
    opacity: .9;
  }
`