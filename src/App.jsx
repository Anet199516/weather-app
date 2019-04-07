/* eslint-disable class-methods-use-this */
import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '4fbb56b063c9e4e42eaf8e35688d3aeb';
//const API_KEY = 'c051b4c062d3541ccc0d7609b6d96e88';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: null,
      city: null,
      country: null,
      sunrise: null,
      sunset: null,
      humidity: null,
      error: null,
    };
  }

  async gettingWeather(event) {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    if (city || country) {
      const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await API_URL.json();

      const sunrise = data.sys.sunrise;
      const date = new Date();
      date.setTime(sunrise);
      const sunrise_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      const sunset = data.sys.sunrise;
      const date2 = new Date();
      date.setTime(sunset);
      const sunset_date = date2.getHours() + ':' + date2.getMinutes() + ':' + date2.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        humidity: data.main.humidity,
        error: null,
      });
    } else {
      this.setState({
        temp: null,
        city: null,
        country: null,
        sunrise: null,
        sunset: null,
        humidity: null,
        error: 'Please, enter the name of the city and the name of the country',
      });
    }
  }

  render() {
    const { temp, city, country, sunrise, sunset, humidity, error } = this.state;
    return (
      <div>
        <div className="wrapper">
        <div className="main main-container">
        <div className="title-container">
        <Info />
        </div>
        <div className="form-container">
        <div className="container1">
        <Form weatherMethod={event => this.gettingWeather(event)} />
        </div>
        <div className="container2">
        <Weather
          temp={temp}
          city={city}
          country={country}
          sunrise={sunrise}
          sunset={sunset}
          humidity={humidity}
          error={error}
        />
        </div>
       
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
