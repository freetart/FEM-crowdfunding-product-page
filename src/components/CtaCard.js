import styled from "styled-components";
import Card from "./styledElements/Card";
import logo from "../images/logo-mastercraft.svg";
import bookmarkIcon from "../images/icon-bookmark.svg";
import { headingStyles, textStyles } from "../abstracts/Mixins";
import Button from "./styledElements/Button";

const Container = styled.div`
  position: relative;
  text-align: center;

  .cta-logo {
    width: 8rem;
    position: absolute;
    top: -30%;
    right: 40%;
    transform: translate(-50%, -50%);
  }

  .cta-heading {
    ${headingStyles}
    font-size: var(--md);
    color: var(--black);
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
  }
`;

const CtaCard = () => {
  return (
    <Card>
      <Container>
        <img src={logo} alt="mastercraft logo" className="cta-logo" />
        <h1 className="cta-heading">Mastercraft Bamboo Monitor Riser</h1>
        <p className="cta-desc">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="cta-btns">
          <Button primary>Back this project</Button>
          <Button bookmark>
            <img src={bookmarkIcon} alt="bookmark icon" className="btn-icon" />
            <span className="bookmark-text">Bookmark</span>
          </Button>
        </div>
      </Container>
    </Card>
  );
};

export default CtaCard;
