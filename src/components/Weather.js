import { useState } from "react";
import styled from "styled-components";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState({});

  // san fran: "https://www.metaweather.com/api/location/2487956/"
  // nyc: 2459115
  // london: 44418

  const proxyURL = "https://cors-anywhere.herokuapp.com/";

  function fetchSearch() {
    fetch(
      proxyURL +
        `https://www.metaweather.com/api/location/search/?query=${search}`
    )
      .then((resp) => resp.json())
      .then((data) => setSearchInfo(data));
    // .then((data) => console.log(data));
  }

  function getIcon(abbr) {
    return (
      <img
        src={`https://www.metaweather.com/static/img/weather/${abbr}.svg`}
        alt=""
      />
    );
  }

  function fetchWeather(woeid) {
    fetch(proxyURL + `https://www.metaweather.com/api/location/${woeid}/`)
      .then((resp) => resp.json())
      .then((data) => setWeatherInfo(data));
    // .then((data) => console.log(data));
  }

  function renderSearch() {
    return searchInfo.map((location) => (
      <li key={location.title} onClick={() => fetchWeather(location.woeid)}>
        {location.title}
      </li>
    ));
  }

  function renderWeatherInfo() {
    if (!weatherInfo.consolidated_weather) {
      return;
    } else {
      return weatherInfo.consolidated_weather.map((day) => (
        <div id="single-weather" key={day.applicable_date}>
          {dateConversion(day.applicable_date)}
          {getIcon(day.weather_state_abbr)}
          {day.weather_state_name}
          <br />
          {Math.round((day.the_temp * 9) / 5 + 32)}°F
        </div>
      ));
    }
  }

  function dateConversion(date) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const event = new Date(date);
    return event.toLocaleDateString(undefined, options);
  }

  return (
    <Container>
      <Body>
        <WeatherContainer>{renderWeatherInfo()}</WeatherContainer>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchSearch}>Search for Location</button>
        <ul>{renderSearch()}</ul>
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
  align-items: center;
  & input {
    outline: none;
    font-size: 25px;
    width: 450px;
  }
  & button {
    outline: none;
    font-size: 20px;
    padding: 10px;
    margin: 10px;
    width: 450px;
  }
  & ul {
    list-style: none;
    font-size: 20px;
    cursor: pointer;
  }
`;

const WeatherContainer = styled.div`
  display: flex;
  & img {
    height: 50px;
  }
  & #single-weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 10px;
  }
`;
