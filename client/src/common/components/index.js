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
  transition: all 0.5s ease 0s;
  text-shadow: rgba(0, 0, 0, 0.25) 0px 3px 8px;
  
  &:hover {
    opacity: .8;
  }
  
  &:active {
    opacity: .9;
  }
`