import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf, faWind, faDroplet } from "@fortawesome/free-solid-svg-icons";

/**
 * WeatherBody Component
 * 
 * This component is responsible for displaying the weather information for a single day.
 * 
 * @param {Object} props - Contains the weather information passed to the component.
 * @param {string} day - The day of the week (e.g., "Monday", "Today").
 * @param {string} icon - Icon code from OpenWeatherMap API for the weather condition.
 * @param {number} temp - The temperature for the day (in degrees).
 * @param {number} humidity - The humidity level (in percentage).
 * @param {number} windSpeed - Wind speed (in km/h).
 * @param {string} description - A brief description of the weather (e.g., "clear sky").
 * 
 * @returns {JSX.Element} A JSX structure displaying the weather information with icons.
 */
const WeatherBody = ({ day, icon, temp, humidity, windSpeed, description }) => {
  return (
    <div className="weatherBody">
      
      {/* Display the day (e.g., "Today", "Monday") */}
      <h2 className="headerDay">{day}</h2>
      
      {/* Display the weather icon from OpenWeatherMap based on the provided icon code */}
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description} // Alt text describing the weather (for accessibility)
      />
      
      {/* Weather details container */}
      <div className="WeatherBodyText">
        
        {/* Temperature Section */}
        <div className="WeatherItem">
          <h2>
            <FontAwesomeIcon className="icon" icon={faTemperatureHalf} /> Temp:
          </h2>
          {/* Rounding down the temperature value */}
          <h2> {Math.floor(temp)}°</h2>
        </div>

        {/* Humidity Section */}
        <div className="WeatherItem">
          <h2>
            <FontAwesomeIcon className="icon" icon={faDroplet} /> Humidity:
          </h2>
          {/* Display humidity percentage */}
          <h2>%{humidity}</h2>
        </div>

        {/* Wind Speed Section */}
        <div className="WeatherItem">
          <h2>
            <FontAwesomeIcon className="icon" icon={faWind} /> Wind speed:
          </h2>
          {/* Rounding down the wind speed value */}
          <h2>{Math.floor(windSpeed)}km/h</h2>
        </div>
        
        {/* Weather description (e.g., "clear sky") */}
        <span>{description}</span>
      </div>
    </div>
  );
};

export default WeatherBody;
