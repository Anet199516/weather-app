/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const Weather = ({ city, temp, sunrise, sunset, humidity, country, error }) =>  (
        <>
          { city
             &&
            <div className="weather-info">
           <p className="weather-key">Location: <span className="weather-value">{city} {country}</span></p>
           <p className="weather-key">Temperature: <span className="weather-value">{temp}</span></p>
           <p className="weather-key">Sunrise: <span className="weather-value">{sunrise}</span></p>
           <p className="weather-key">Sunset: <span className="weather-value">{sunset}</span></p>
           <p className="weather-key">Humidity: <span className="weather-value">{humidity}</span></p>
            </div>
          }
          <h2 className="weather-error">{error}</h2>
        </>
);

export default Weather;
