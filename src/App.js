import { useState } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Calculator from "./components/Calculator";
import ToDo from "./components/ToDo";
import Weather from "./components/Weather";
import Quote from "./components/QuoteGenerator";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  // check out useDarkMode hook
  // useLocalStorage and useMediaQuery
  return (
    <Container darkMode={darkMode}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/todo" component={ToDo} />
      <Route path="/weather" component={Weather} />
      <Route path="/quote" component={Quote} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100%;
  color: ${(p) => (p.darkMode ? "#eee" : "#222831")};
  background-color: ${(p) => (p.darkMode ? "#222831" : "#eee")};
`;
