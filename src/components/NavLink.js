import styled from "styled-components";
import { textStyles } from "../abstracts/Mixins";

const Container = styled.li`
  .nav-link {
    ${textStyles}
    color: var(--white);
    font-size: var(--xxs);
    position: relative;

    &::before {
      content: "";
      height: 0.2rem;
      width: 100%;
      position: absolute;
      background-color: var(--white);
      bottom: -0.5rem;
      transform: scale(0);
      transform-origin: center;
      transition: var(--mainTransition);
    }

    &:hover::before,
    &:focus::before {
      transform: scale(1);
    }
  }
`;

const NavLink = ({ text }) => {
  return (
    <Container>
      <a href="#!" className="nav-link">
        {text}
      </a>
    </Container>
  );
};

export default NavLink;
