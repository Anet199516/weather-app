/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Weather extends React.Component {
    render() {
      const { city, temp, sunrise, sunset, country, error } = this.props;
      return (
        <>
          { city
             &&
            <div>
           <p>Location: {city} {country}</p>
           <p>Temperature: {temp}</p>
           <p>Sunrise: {sunrise}</p>
           <p>Sunset: {sunset}</p>
            </div>
          }
          <h1>{error}</h1>
        </>
    );
  }
}

export default Weather;
