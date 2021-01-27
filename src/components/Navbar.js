import styled from "styled-components";
import Switch from "react-switch";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar(props) {
  function renderNavs() {
    return [
      { name: "Calculator", link: "/calculator" },
      { name: "To-do List", link: "/todo" },
      { name: "Small Weather App", link: "/weather" },
    ].map((nav) => (
      <li key={nav.name}>
        <NavLink to={nav.link} activeClassName="selected">
          {nav.name}
        </NavLink>
      </li>
    ));
  }
  return (
    <Container darkMode={props.darkMode}>
      <SwitchContainer>
        <NavLink id="home" exact to="/" activeClassName="selected">
          Home
        </NavLink>
        <Switch
          height={18}
          handleDiameter={22}
          uncheckedIcon={<FaMoon id="moon-icon" color="#eee" />}
          checkedIcon={<FaSun id="sun-icon" color="#f9d71c" />}
          offColor="#576375"
          onColor="#888"
          onChange={() => props.setDarkMode(!props.darkMode)}
          checked={props.darkMode}
        />
      </SwitchContainer>
      <ul>{renderNavs()}</ul>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(p) => (p.darkMode ? "#607d8b" : "#a6e3e9")};
  width: 15vw;
  & ul {
    list-style: none;
    margin: 10px auto;
    text-align: center;
  }
  & a {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
  }
  & .selected {
    color: ${(p) => (p.darkMode ? "#16c79a" : "#F78E69")};
  }
  & #sun-icon {
    margin-left: 6px;
  }
  & #moon-icon {
    margin-left: 3px;
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  align-items: center;
  & #home {
    margin-top: 5px;
  }
`;
