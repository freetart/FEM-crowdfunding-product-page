import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";

const Button = styled.button`
  ${headingStyles}
  font-size: var(--xxs);
  transition: var(--mainTransition);
  border-radius: var(--secondaryRadius);
  box-shadow: var(--mainShadow);
  border: 0;
  padding: 2rem;

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--moderateCyan);
      color: var(--white);

      &:hover,
      &:focus {
        background-color: var(--darkCyan);
      }
    `}

  ${({ bookmark }) =>
    bookmark &&
    css`
      color: var(--darkGray);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 0;
      background-color: var(--lightGray);

      &:hover,
      &:focus {
        background-color: var(--darkCyan);
        color: var(--white);

        ${Responsive.md`
        background-color: transparent;
        box-shadow: none; 
        `}
      }
    `}

  ${({ outOfStock }) =>
    outOfStock &&
    css`
      background-color: var(--darkGray);
      color: var(--white);
      cursor: not-allowed;
    `}
`;

export default Button;
