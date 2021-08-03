import styled from "styled-components";
import Navbar from "./Navbar";
import bgDesktop from "../images/image-hero-desktop.jpg";
import bgMobile from "../images/image-hero-mobile.jpg";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${bgDesktop}) left center/cover no-repeat;
  height: 60vh;

  ${Responsive.md`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${bgMobile}) left center/cover no-repeat;
  `}
`;

const Header = () => {
  return (
    <header>
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
