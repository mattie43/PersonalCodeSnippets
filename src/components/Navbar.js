import styled from "styled-components";
import Switch from "react-switch";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Home(props) {
  return (
    <Container darkMode={props.darkMode}>
      <div id="switch-container">
        <NavLink id="home" exact to="/" activeClassName="selected">
          Home
        </NavLink>
        <Switch
          height={18}
          handleDiameter={22}
          uncheckedIcon={<FaMoon id="moon-icon" color="#eee" />}
          checkedIcon={<FaSun id="sun-icon" color="#f9d71c" />}
          onColor="#576375"
          onChange={() => props.setDarkMode(!props.darkMode)}
          checked={props.darkMode}
        />
      </div>
      <ul>
        <li>
          <NavLink to="/calculator" activeClassName="selected">
            Calculator
          </NavLink>
        </li>
      </ul>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(p) => (p.darkMode ? "#a6e3e9" : "#607d8b")};
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
    color: #16c79a;
  }
  & #sun-icon {
    margin-left: 6px;
  }
  & #moon-icon {
    margin-left: 3px;
  }
  & #switch-container {
    /* align-self: flex-end; */
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    align-items: center;
    & #home {
      margin-top: 5px;
    }
  }
`;
