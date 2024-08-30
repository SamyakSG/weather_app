import React, { Component } from 'react';
import { WeatherContext } from "../context/Weather";

class Input extends Component {
  static contextType = WeatherContext;

  render() {
    const weather = this.context;
    return (
      <input
        className="input-field"
        placeholder="Search here"
        value={weather.searchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)}
      />
    );
  }
}

export default Input;


// import React from "react";
// import { useWeather } from "../context/Weather";
// const Input = () => {
//   const weather = useWeather();

//   return (
//     <input
//       className="input-field"
//       placeholder="Search here"
//       value={weather.searchCity}
//       onChange={(e) => weather.setSearchCity(e.target.value)}
//     />
//   );
// };

// export default Input;