import { useState } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Calculator from "./components/Calculator";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <Container darkMode={darkMode}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={Calculator} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100%;
  color: ${(p) => (p.darkMode ? "#222831" : "#eee")};
  background-color: ${(p) => (p.darkMode ? "#eee" : "#222831")};
`;
