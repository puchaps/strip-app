import Container from "./components/container/container.component";
import MainContextProvired from "./context/context";

const App = () => {
  return (
    <MainContextProvired>
      <Container/>
    </MainContextProvired>
  );
}

export default App;
