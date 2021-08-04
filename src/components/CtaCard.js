import styled from "styled-components";
import Card from "./styledElements/Card";
import logo from "../images/logo-mastercraft.svg";
import bookmarkIcon from "../images/icon-bookmark.svg";
import { headingStyles, textStyles } from "../abstracts/Mixins";
import Button from "./styledElements/Button";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  position: relative;
  text-align: center;

  .cta-logo {
    width: 8rem;
    position: absolute;
    top: -60%;
    right: 50%;
    transform: translate(50%, 50%);

    ${Responsive.md`
    top: -40%; 
    `}
  }

  .cta-heading {
    ${headingStyles}
    font-size: var(--md);
    color: var(--black);
    padding-top: 0.5rem;
  }

  .cta-desc {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--darkGray);
    padding: 2rem 0;
  }

  .cta-btns {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem 0;
    gap: 2rem;
  }

  .desktop-bookmark {
    padding-right: 2rem;

    ${Responsive.md`
    display: none; 
    `}
  }

  .mobile-bookmark {
    display: none;
    padding: 0;

    ${Responsive.md`
    display: block; 
    `}
  }
`;

const CtaCard = ({ setOpenModal }) => {
  return (
    <Card>
      <Container>
        <img src={logo} alt="mastercraft logo" className="cta-logo" />
        <h1 className="cta-heading">Mastercraft Bamboo Monitor Riser</h1>
        <p className="cta-desc">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="cta-btns">
          <Button primary onClick={() => setOpenModal(true)}>
            Back this project
          </Button>
          <Button bookmark className="desktop-bookmark">
            <img src={bookmarkIcon} alt="bookmark icon" className="btn-icon" />
            <span className="bookmark-text">Bookmark</span>
          </Button>
          <Button bookmark className="mobile-bookmark">
            <img src={bookmarkIcon} alt="bookmark icon" className="btn-icon" />
          </Button>
        </div>
      </Container>
    </Card>
  );
};

export default CtaCard;
