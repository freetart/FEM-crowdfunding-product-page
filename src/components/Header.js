import styled from "styled-components";
import Navbar from "./Navbar";
import bg from "../images/image-hero-desktop.jpg";

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${bg}) left center/cover no-repeat;
  height: 60vh;
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
