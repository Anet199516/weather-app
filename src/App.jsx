/* eslint-disable class-methods-use-this */
import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '4fbb56b063c9e4e42eaf8e35688d3aeb';

class App extends React.Component {

  async gettingWeather(event) {
    event.preventDefault();
    const city = event.target.elements.value;
    const API_URL = await fetch(`https://openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await API_URL.json();
    console.log(data);
  }

  render() {
    return (
      <>
        <Info />
        <Form weatherMethod={() => this.gettingWeather(this.props.event)} />
        <Weather />
      </>
    );
  }
}

export default App;
