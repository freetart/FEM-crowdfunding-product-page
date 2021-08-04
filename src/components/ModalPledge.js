import styled from "styled-components";
import Button from "../components/styledElements/Button";
import { headingStyles, textStyles, flexCenter } from "../abstracts/Mixins";

const Container = styled.div`
  border: 0.2rem solid var(--lightGray);
  padding: 3rem;
  border-radius: var(--mainRadius);
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    border: 0.2rem solid var(--moderateCyan);

    .inner-circle {
      opacity: 1;
    }
  }

  &.out-of-stock {
    opacity: 0.6;
  }

  .circle {
    ${flexCenter}
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: 0.1rem solid var(--darkGray);
  }

  .inner-circle {
    background-color: var(--moderateCyan);
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    opacity: 0;
    transition: var(--mainTransition);
  }

  .modal-pledge-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .modal-pledge-header-left {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .modal-pledge-title {
    ${headingStyles}
    font-size: var(--xxs);
  }

  .modal-pledge-alert {
    ${textStyles}
    color: var(--moderateCyan);
    font-size: var(--xxs);
  }

  .modal-pledge-desc {
    ${textStyles}
    color: var(--darkGray);
    font-size: var(--xxs);
    padding: 2rem 0;
  }

  .modal-pledge-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .modal-pledge-left {
    ${headingStyles}
    color: var(--darkGray);
    font-size: var(--xxs);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .modal-pledge-number {
    font-size: var(--md);
    color: var(--black);
  }

  .modal-pledge-footer-desc {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--darkGray);
  }

  .modal-pledge-footer-btns {
    display: flex;
    gap: 2rem;
  }

  .modal-pledge-input {
    border-radius: var(--secondaryRadius);
    border: 0.1rem solid var(--darkGray);
    padding-left: 2rem;
    font-size: var(--xxs);
    outline: 0;
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      border: 0.1rem solid var(--moderateCyan);
    }
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
        <header className="modal-pledge-header">
          <div className="modal-pledge-header-left">
            <div className="circle">
              <div className="inner-circle"></div>
            </div>
            <h4 className="modal-pledge-title">{product}</h4>
            <p className="modal-pledge-alert">{pledgeAmount}</p>
          </div>
          <h3 className="modal-pledge-left">
            <span className="modal-pledge-number">{productAmount}</span>
            left
          </h3>
        </header>
        <p className="modal-pledge-desc">{description}</p>
        <footer className="modal-pledge-footer">
          <p className="modal-pledge-footer-desc">Enter your pledge</p>
          <div className="modal-pledge-footer-btns">
            {inStock ? (
              <>
                <input
                  className="modal-pledge-input"
                  placeholder="Enter Pledge..."
                />
                <Button primary>Continue</Button>
              </>
            ) : (
              <Button outOfStock>Out of stock</Button>
            )}
          </div>
        </footer>
      </Container>
    </article>
  );
};

export default Pledge;
