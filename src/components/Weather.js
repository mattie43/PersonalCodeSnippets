import { useState } from "react";
import styled from "styled-components";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [weatherInfo, setWeatherInfo] = useState([]);

  // san fran: "https://www.metaweather.com/api/location/2487956/"
  // nyc: 2459115
  // london: 44418
  //
  const proxyURL = "https://cors-anywhere.herokuapp.com/";

  function fetchWeather() {
    fetch(
      proxyURL +
        `https://www.metaweather.com/api/location/search/?query=${search}`
    )
      .then((resp) => resp.json())
      .then((data) => setWeatherInfo(data));
    // .then((data) => console.log(data));
  }

  function renderLocations() {
    return weatherInfo.map((location) => (
      <li key={location.title} onClick={() => console.log(location.woeid)}>
        {location.title}
      </li>
    ));
  }

  return (
    <Container>
      <Body>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchWeather}>Search for Location</button>
        <ul>{renderLocations()}</ul>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  & input {
    outline: none;
    font-size: 25px;
  }
  & button {
    outline: none;
    font-size: 20px;
    padding: 10px;
    margin: 10px;
  }
  & ul {
    list-style: none;
    font-size: 20px;
  }
`;
