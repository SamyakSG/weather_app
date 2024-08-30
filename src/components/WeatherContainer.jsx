import React, { Component } from 'react';
import { WeatherContext } from "../context/Weather";
import Card from './Card';

class WeatherContainer extends Component {
  static contextType = WeatherContext;

  render() {
    const weather = this.context;

    if (!weather || !weather.data) {
      return <div>Loading...</div>;
    }

    return <Card weather={weather.data} />;
  }
}

export default WeatherContainer;
