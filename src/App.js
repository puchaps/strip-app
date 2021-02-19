import React from "react";

import Container from "./components/container/container.component";
import MainContextProvider from "./context/context";

const App = () => (
  <MainContextProvider>
    <Container />
  </MainContextProvider>
);

export default App;
