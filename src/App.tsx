import { Route, Routes } from "react-router-dom";
import "./App.css";
import City from "./pages/City";

import Home from "./pages/Home";
import Header from "./components/Header";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [themes, setThemes] = useState<boolean>(true);
  return (
    <AppContainer themes={themes}>
      <Header themes={themes} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:city"
          element={<City themes={themes} setThemes={setThemes} />}
        />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div<{ themes: boolean }>`
  min-height: 100vh;
  background-color: ${({ themes }) =>
    themes ? " hsla(9, 100%, 64%, 0.4)" : " hsl(0, 0%, 71%)"};
`;
