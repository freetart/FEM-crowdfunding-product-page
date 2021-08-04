import styled from "styled-components";
import Overlay from "./styledElements/Overlay";
import { FaTimes } from "react-icons/fa";
import { headingStyles, textStyles } from "../abstracts/Mixins";
import Card from "../components/styledElements/Card";
import ModalPledge from "../components/ModalPledge";
import pledgeData from "../data";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  overflow-y: scroll;
  scrollbar-color: var(--lightGray) white;
  height: 60rem;

  .modal-close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    border: 0;
    background: transparent;

    ${Responsive.md`
    top: 0.5rem;
    right: 1rem;
    `}
  }

  .modal-icon {
    color: var(--darkGray);
    font-size: var(--md);

    ${Responsive.md`
    font-size: var(--sm);
    `}
  }

  .modal-title {
    ${headingStyles}
    font-size: var(--md);
    margin-bottom: 1rem;
  }

  .modal-desc {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--darkGray);
  }

  .modal-pledges {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

const MainModal = ({ setOpenModal }) => {
  return (
    <Overlay>
      <Card>
        <Container>
          <header className="modal-header">
            <h2 className="modal-title">Back this project</h2>
            <p className="modal-desc">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
            <button className="modal-close" onClick={() => setOpenModal(false)}>
              <FaTimes className="modal-icon" />
            </button>
          </header>
          <div className="modal-pledges">
            {pledgeData.map((pledge) => {
              return (
                <ModalPledge
                  key={pledge.id}
                  product={pledge.product}
                  pledgeAmount={pledge.pledgeAmount}
                  description={pledge.description}
                  productAmount={pledge.productAmount}
                  inStock={pledge.inStock}
                />
              );
            })}
          </div>
        </Container>
      </Card>
    </Overlay>
  );
};

export default MainModal;
