import React, { Component } from "react";

import WeatherInfo from "./components/WeatherInfo";

import WeatherForm from "./components/WeatherForm";

import { API_KEY } from "./keys";

class App extends Component {
  state = {
    temperature: "",
    description: "",
    humidity: "",
    city: "",
    country: "",
    error: null,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const { country, city } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    if (cityValue && countryValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${API_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();

      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        error: null,
      });
    } else {
      this.setState({ error: "Please Enter a City and a Country" });
    }
  };

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <WeatherForm getWeather={this.getWeather} />
            <WeatherInfo {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
