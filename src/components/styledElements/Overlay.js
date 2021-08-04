import styled from "styled-components";
import { flexCenter } from "../../abstracts/Mixins";

const Overlay = styled.div`
  ${flexCenter}
  height: 100%;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5000;
`;

export default Overlay;
