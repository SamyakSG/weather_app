import React, { Component } from 'react';
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = React.createContext();

class WeatherProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      searchCity: '',
    };
  }

  fetchData = async () => {
    const response = await getWeatherDataForCity(this.state.searchCity);
    this.setState({ data: response });
  };

  fetchCurrentUserLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => this.setState({ data }));
    });
  };

  setSearchCity = (city) => {
    this.setState({ searchCity: city });
  };

  render() {
    return (
      <WeatherContext.Provider
        value={{
          ...this.state,
          fetchData: this.fetchData,
          fetchCurrentUserLocationData: this.fetchCurrentUserLocationData,
          setSearchCity: this.setSearchCity,
        }}
      >
        {this.props.children}
      </WeatherContext.Provider>
    );
  }
}

export { WeatherProvider, WeatherContext };


// import { createContext, useContext, useState } from "react";
// import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";
// const WeatherContext = createContext(null);

// export const useWeather = () => {
//   return useContext(WeatherContext);
// };

// export const WeatherProvider = (props) => {
//   const [data, setData] = useState(null);
//   const [searchCity, setSearchCity] = useState(null);

//   const fetchData = async () => {
//     const response = await getWeatherDataForCity(searchCity);
//     setData(response);
//   };

//   const fetchCurrentUserLocationData = () => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       getWeatherDataForLocation(
//         position.coords.latitude,
//         position.coords.longitude
//       ).then((data) => setData(data));
//     });
//   };

//   return (
//     <WeatherContext.Provider
//       value={{
//         searchCity,
//         data,
//         setSearchCity,
//         fetchData,
//         fetchCurrentUserLocationData,
//       }}
//     >
//       {props.children}
//     </WeatherContext.Provider>
//   );
// };
