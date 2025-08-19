import React, { useEffect, useState } from "react";
import axios from "axios";
import Theme from "./Theme";
import WeatherList from "./WeatherList";
import SearchForm from "./SearchForm";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const api = "d49ab1ddfcfcd3650b1ba51e41aea8c3";

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric`
      );
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather();
  };

  return (
    <>
      <div className="headerContainer">
        <h1 className="header">Weather App</h1>
        <Theme />
      </div>

      <SearchForm city={city} setCity={setCity} handleSumbit={handleSubmit} />

      {weather && (
        <div>
          <h1 className="cityName">{weather.city.name}</h1>
          <WeatherList weather={weather} />
        </div>
      )}
    </>
  );
};

export default Weather;
