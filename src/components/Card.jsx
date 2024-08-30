import React, { Component } from 'react';
import './Card.css'; // Import the CSS file

class Card extends Component {
constructor(props){
  super(props);
  this.state={
    isAirQualityOpen:false,
  };
}
toggleAirQualityDropdown = () => {
  this.setState((prevState) => ({ isAirQualityOpen: !prevState.isAirQualityOpen }));
};

render() {
    // const weather = useWeather();
    const { weather } = this.props;
    console.log('weather',weather);
    
    const { isAirQualityOpen } = this.state;

    const location = weather?.location;
    const current = weather?.current;
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
            <button onClick={this.toggleAirQualityDropdown}>
            {isAirQualityOpen ? '▲ ' : 'Air Quality Index ▼'}
            </button>
            {isAirQualityOpen && (<div>
              <h4>Air Quality Index</h4>
              <ul>
                <li><strong>CO:</strong> {airQuality?.co} µg/m³</li>
                <li><strong>NO2:</strong> {airQuality?.no2} µg/m³</li>
                <li><strong>O3:</strong> {airQuality?.o3} µg/m³</li>
                <li><strong>SO2:</strong> {airQuality?.so2} µg/m³</li>
                <li><strong>PM2.5:</strong> {airQuality?.pm2_5} µg/m³</li>
                <li><strong>PM10:</strong> {airQuality?.pm10} µg/m³</li>
              </ul>
            </div>)}
          </div>
        </div>

    );

  }
}
export default Card
