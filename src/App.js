import styled from "styled-components";
import Globals from "./abstracts/Globals";
import Header from "./components/Header";
import CtaCard from "./components/CtaCard";
import StatsCard from "./components/StatsCard";
import ProjectCard from "./components/ProjectCard";

const Main = styled.main`
  transform: translateY(-20%);
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const App = () => {
  return (
    <>
      <Globals />
      <Header />
      <Main>
        <CtaCard />
        <StatsCard />
        <ProjectCard />
      </Main>
    </>
  );
};

export default App;
