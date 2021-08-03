import styled from "styled-components";
import Button from "../components/styledElements/Button";
import { headingStyles, textStyles } from "../abstracts/Mixins";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  border: 0.2rem solid var(--lightGray);
  padding: 3rem;
  border-radius: var(--mainRadius);

  &.out-of-stock {
    opacity: 0.6;
  }

  .pledge-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .pledge-title {
    ${headingStyles}
    font-size: var(--sm);
  }

  .pledge-alert {
    ${textStyles}
    color: var(--moderateCyan);
    font-size: var(--xxs);
  }

  .pledge-desc {
    ${textStyles}
    color: var(--darkGray);
    font-size: var(--xxs);
    padding: 2rem 0;
  }

  .pledge-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .pledge-left {
    ${headingStyles}
    color: var(--darkGray);
    font-size: var(--xxs);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .pledge-number {
    font-size: var(--md);
    color: var(--black);
  }
`;

const Pledge = ({
  product,
  pledgeAmount,
  description,
  productAmount,
  inStock,
}) => {
  return (
    <article>
      <Container className={!inStock && "out-of-stock"}>
        <header className="pledge-header">
          <h4 className="pledge-title">{product}</h4>
          <p className="pledge-alert">{pledgeAmount}</p>
        </header>
        <p className="pledge-desc">{description}</p>
        <footer className="pledge-footer">
          <h3 className="pledge-left">
            <span className="pledge-number">{productAmount}</span>
            left
          </h3>
          {inStock ? (
            <Button primary>Select Reward</Button>
          ) : (
            <Button outOfStock>Out of stock</Button>
          )}
        </footer>
      </Container>
    </article>
  );
};

export default Pledge;
