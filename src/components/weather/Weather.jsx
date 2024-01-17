import './Weather.css';

import { useState } from 'react';
import axios from 'axios';

export const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Qué tiempo hace?</h1>
      <label>Ciudad:</label>
      <input
        type='text'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeatherData}>Obtener Tiempo</button>

      {weatherData && (
        <div>
          <h2>{weatherData.location.name}</h2>
          <h3>{weatherData.location.region}</h3>
          <p>Temperatura: {weatherData.current.temp_c}°C</p>
          <p>{weatherData.current.condition.text}</p>
          {weatherData.current.condition.icon && (
            <img
              src={`https:${weatherData.current.condition.icon}`}
              alt='Weather Icon'
            />
          )}
        </div>
      )}
    </div>
  );
};
