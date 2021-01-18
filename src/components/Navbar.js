import styled from "styled-components";
import Switch from "react-switch";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Home(props) {
  return (
    <Container>
      <Switch
        height={18}
        handleDiameter={22}
        uncheckedIcon={<FaMoon id="moon-icon" color="#eee" />}
        checkedIcon={<FaSun id="sun-icon" color="#f9d71c" />}
        onColor="#cfcfcf"
        onChange={() => props.setDarkMode(!props.darkMode)}
        checked={props.darkMode}
      />
      <ul>
        <li>Home</li>
        <li>Nav2</li>
        <li>Nav3</li>
        <li>Nav4</li>
      </ul>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #607d8b;
  width: 15vw;
  & ul {
    list-style: none;
    margin: 10px auto;
    text-align: center;
  }
  & li {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  & #sun-icon {
    margin-left: 6px;
  }
  & #moon-icon {
    margin-left: 3px;
  }
`;
