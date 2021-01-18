import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <Container darkMode={darkMode}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100%;
  color: ${(p) => (p.darkMode ? "#eee" : "#222831")};
`;
