import React, { useEffect, useState } from "react";
import axios from "axios";
import Theme from "./Theme";
import WeatherList from "./WeatherList";
import SearchForm from "./SearchForm";

/**
 * Weather Component
 * 
 * This is the main component for the Weather App. It allows users to search for weather forecasts by city name.
 * It fetches weather data from the OpenWeatherMap API and passes the data to child components (`WeatherList`, `SearchForm`).
 * 
 * @returns {JSX.Element} A fully functioning weather app with theme support and search functionality.
 */
const Weather = () => {
  // State to store the city input by the user
  const [city, setCity] = useState(""); 
  
  // State to store the weather data fetched from the API
  const [weather, setWeather] = useState(null); 
  
  // OpenWeatherMap API key
  const api = 'd49ab1ddfcfcd3650b1ba51e41aea8c3'; 

  /**
   * Function to fetch weather data from OpenWeatherMap API based on the city.
   * Uses async/await with Axios to make an HTTP GET request.
   * The weather data is set in the state upon a successful response.
   */
  const getWeather = async () => {
    try {
      // Send a GET request to the OpenWeatherMap API using the city name and API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric`
      );
      setWeather(response.data); // Store the weather data in state
      console.log(response.data); // Log the data for debugging purposes
    } catch (error) {
      console.log(error); // Log errors if the API call fails
    }
  };

  useEffect(() => {
    getWeather();
  }, []); 

  /**
   * Event handler for form submission.
   * 
   * This function is triggered when the user submits the search form. It prevents the default form behavior
   * and calls the `getWeather` function to fetch data for the input city.
   * 
   * @param {Event} event - The event object from the form submission.
   */
  const handleSubmit = (event) => {
    event.preventDefault(); 
    getWeather(); 
  };

  return (
    <>
      {/* Header section containing the title and theme component */}
      <div className="headerContainer">
        <h1 className="header">Weather App</h1>
        <Theme />
      </div>

      {/* Search form component to allow users to input a city */}
      <SearchForm 
        city={city} 
        setCity={setCity} 
        handleSumbit={handleSubmit}
      />

      {/* Conditional rendering: Display weather info only if weather data exists */}
      {weather && (
        <div>
          <h1 className="cityName">{weather.city.name}</h1>
          {/* WeatherList component to display the forecast */}
          <WeatherList weather={weather} />
        </div>
      )}
    </>
  );
};

export default Weather;
