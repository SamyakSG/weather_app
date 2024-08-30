// import React from "react";
// import { useWeather } from "../context/Weather";

// const Card = () => {
//   const weather = useWeather();

//   return (
//     <div className="card">
//       <img src={weather?.data?.current?.condition?.icon} />
//       <h2>{weather.data?.current?.temp_c}. C</h2>
//       <h5>
//         {weather.data?.location?.name}, {weather.data?.location?.region}{" "}
//         {weather.data?.location?.country}
//         {weather.data?.current?.temp_c}
       
//       </h5>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { useWeather } from "../context/Weather";
import './Card.css'; // Import the CSS file

const Card = () => {
  const weather = useWeather();

  // Extract relevant data from the weather object
  const location = weather.data?.location;
  const current = weather.data?.current;
  const airQuality = current?.air_quality;

  return (
    <div className="card">
      <div className="card-header">
        <img src={current?.condition?.icon} alt={current?.condition?.text} />
        <h2>{current?.temp_c}°C</h2>
        <p className="condition">{current?.condition?.text}</p>
      </div>
      <div className="card-body">
        <h3>{location?.name}, {location?.region}, {location?.country}</h3>
        <ul>
          <li><strong>Feels Like:</strong> {current?.feelslike_c}°C</li>
          <li><strong>Wind:</strong> {current?.wind_kph} kph {current?.wind_dir}</li>
          <li><strong>Humidity:</strong> {current?.humidity}%</li>
          <li><strong>Pressure:</strong> {current?.pressure_mb} mb</li>
          <li><strong>Visibility:</strong> {current?.vis_km} km</li>
          <li><strong>Precipitation:</strong> {current?.precip_mm} mm</li>
          <li><strong>UV Index:</strong> {current?.uv}</li>
        </ul>
        <h4>Air Quality Index</h4>
        <ul>
          <li><strong>CO:</strong> {airQuality?.co} µg/m³</li>
          <li><strong>NO2:</strong> {airQuality?.no2} µg/m³</li>
          <li><strong>O3:</strong> {airQuality?.o3} µg/m³</li>
          <li><strong>SO2:</strong> {airQuality?.so2} µg/m³</li>
          <li><strong>PM2.5:</strong> {airQuality?.pm2_5} µg/m³</li>
          <li><strong>PM10:</strong> {airQuality?.pm10} µg/m³</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
