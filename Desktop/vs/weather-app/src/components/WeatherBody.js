import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHalf,
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

const WeatherBody = ({ day, icon, temp, humidity, windSpeed, description }) => {
  return (
    <div className="weatherBody">
      <h2 className="headerDay">{day}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />

      <div className="WeatherBodyText">
        <div className="WeatherItem">
          <h2>
            <FontAwesomeIcon className="icon" icon={faTemperatureHalf} /> Temp:
          </h2>
          <h2> {Math.floor(temp)}°</h2>
        </div>

        <div className="WeatherItem">
          <h2>
            <FontAwesomeIcon className="icon" icon={faDroplet} /> Humidity:
          </h2>
          <h2>%{humidity}</h2>
        </div>

        <div className="WeatherItem">
          <h2>
            <FontAwesomeIcon className="icon" icon={faWind} /> Wind speed:
          </h2>
          <h2>{Math.floor(windSpeed)}km/h</h2>
        </div>

        <span>{description}</span>
      </div>
    </div>
  );
};

export default WeatherBody;
