import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

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
      gap: 2rem;
      padding: 0;
      padding-right: 2rem;
      background-color: var(--lightGray);

      &:hover,
      &:focus {
        background-color: var(--darkCyan);
        color: var(--white);
      }
    `}
`;

export default Button;
