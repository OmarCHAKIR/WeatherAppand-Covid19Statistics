import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import * as weatherUtility from "../../components/WeatherDisplay";
import axios from "axios";

const api = {
  key: "7c4feea95085387c1f03a0f73c8b1a18",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  //const [error, setError] = useState("");

  const clickHandler = async (e) => {
    e.preventDefault();

    console.log(query);
    axios
      .get(`${api.base}weather?q=${query}&appid=${api.key}`)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp < 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <SearchBar click={clickHandler} change={handleOnChange} />
        {typeof weather.main != "undefined" ? (
          <React.Fragment>
            <div className="location-box">
              <weatherUtility.CityLocation
                cityLocation={weather.name}
                citySys={weather.sys.country}
              />
              <weatherUtility.CityDate
               cityDate={dateBuilder(new Date())}
                />
            </div>
            <div className="weather-box">
              <weatherUtility.CityWeather
                cityTemp={weather.main.temp}
                cityTempStatus={weather.weather[0].main}
              />
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default Weather;
