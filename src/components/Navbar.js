import styled from "styled-components";
import NavLink from "./NavLink";
import { maxWidthLg } from "../abstracts/Mixins";
import logo from "../images/logo.svg";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  ${maxWidthLg}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 2rem;

  .nav-logo {
    width: 15rem;
  }

  .nav-list {
    display: flex;
    gap: 3rem;

    ${Responsive.md`
    display: none;
    `}
  }
`;

const Navbar = () => {
  return (
    <nav>
      <Container>
        <img src={logo} alt="crowdfund logo" className="nav-logo" />
        <ul className="nav-list">
          <NavLink text="About" />
          <NavLink text="Discover" />
          <NavLink text="Get Started" />
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
