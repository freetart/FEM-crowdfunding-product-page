import styled from "styled-components";
import Responsive from "../../abstracts/Responsive";

const Card = styled.article`
  background-color: var(--white);
  border-radius: var(--mainRadius);
  box-shadow: var(--mainShadow);
  width: 800px;
  margin: 0 auto;
  padding: 5rem;
  position: relative;

  ${Responsive.lg`
  width: 95%;
  `}

  ${Responsive.md`
  padding: 3rem;
  `}
`;

export default Card;
