import Globals from "./abstracts/Globals";
import Header from "./components/Header";
import CtaCard from "./components/CtaCard";

const App = () => {
  return (
    <>
      <Globals />
      <Header />
      <main>
        <CtaCard />
      </main>
    </>
  );
};

export default App;
