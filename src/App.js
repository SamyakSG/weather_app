import React, { Component } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { WeatherContext } from "./context/Weather";

import "./App.css";

class App extends Component {
  static contextType = WeatherContext;

  componentDidMount() {
    this.context.fetchCurrentUserLocationData();
  }

  render() {
    const weather = this.context;
    return (
      <div className="App">
        <h1>Weather Forecast</h1>
        <Input />
        <Button onClick={weather.fetchData} value="Search" />
        <Card weather={weather.data} />
        <Button value="Refresh" />
      </div>
    );
  }
}

export default App;
