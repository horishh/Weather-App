import React from 'react'
import WeatherBody from './WeatherBody'

/**
 * WeatherList Component
 * 
 * This component renders a list of weather forecast items for specific days.
 * It utilizes the `WeatherBody` component to display the weather information for each day.
 * The `weather` prop passed to it contains forecast data which is extracted for different days.
 * @param {Object} weather - The weather forecast data passed from the parent component.
 */

const WeatherList = ({weather}) => {
  return (
    <div className="container">
      {/* Weather for Today */}
            <WeatherBody
              day="Today"
              icon={weather.list[0].weather[0].icon}
              temp={weather.list[0].main.temp}
              humidity={weather.list[0].main.humidity}
              windSpeed={weather.list[0].wind.speed}
              description={weather.list[0].weather[0].description}
            />
            {/* Weather for the next significant day in the forecast */}
            <WeatherBody
              day={new Date(weather.list[7].dt_txt).toLocaleString("en-us", {
                weekday: "long",
              })}
              icon={weather.list[7].weather[0].icon}
              temp={weather.list[7].main.temp}
              humidity={weather.list[7].main.humidity}
              windSpeed={weather.list[7].wind.speed}
              description={weather.list[7].weather[0].description}
            />
            {/* Weather for another future day in the forecast */}
            <WeatherBody
              day={new Date(weather.list[15].dt_txt).toLocaleString("en-us", {
                weekday: "long",
              })}
              icon={weather.list[15].weather[0].icon}
              temp={weather.list[15].main.temp}
              humidity={weather.list[15].main.humidity}
              windSpeed={weather.list[15].wind.speed}
              description={weather.list[15].weather[0].description}
            />
          </div>
  )
}

export default WeatherList