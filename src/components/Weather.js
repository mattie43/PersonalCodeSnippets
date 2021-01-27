import { useState } from "react";
import styled from "styled-components";

export default function Weather() {
  const [zipcode, setZipcode] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({});

  function fetchWeather(query) {
    fetch(`https://www.metaweather.com/api/location/search/?query=${query}`)
      .then((resp) => resp.json())
      .then((data) => setWeatherInfo(data));
  }

  return (
    <Container>
      <Body>
        weather test
        {fetchWeather()}
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Body = styled.div`
  display: flex;
  background-color: salmon;
`;
