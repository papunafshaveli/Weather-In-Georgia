import { Route, Routes } from "react-router-dom";
import "./App.css";
import City from "./pages/City";

import Home from "./pages/Home";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<City />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: rosybrown;
`;
