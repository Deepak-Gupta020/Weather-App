import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faTimesCircle, faCloudSun, faThermometerHalf, faTint, faWind, faSun, faMoon, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const API_KEY = 'b9e96ce86c2498b7b95c4eba66288f0f'; 
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('searchHistory'));
    if (history) {
      setSearchHistory(history);
    }
  }, []);

  const getWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      setError('');

      const newHistory = [city, ...searchHistory.filter(item => item !== city)];
      setSearchHistory(newHistory);
      
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    } catch (err) {
      setError('City not found!');
      setWeather(null);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city) {
      getWeather();
    }
  };

  const handleHistoryClick = (city) => {
    setCity(city);
    getWeather();
  };

  const removeHistoryItem = (cityToRemove) => {
    const newHistory = searchHistory.filter(city => city !== cityToRemove);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toDateString();
  };

  return (
    <div className="container">
      <div className="icon-container">
        <FontAwesomeIcon icon={faCloudSun} className="weather-icon" />
      </div>
      <h1 className="heading">Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"
        className="input"
      />
      <button onClick={handleSearch} className="button">
        Search
      </button>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weatherInfo">
          <h2>{weather.name}</h2>
          <p><FontAwesomeIcon icon={faCloudSun} /> {weather.weather[0].description}</p>
          <p><FontAwesomeIcon icon={faThermometerHalf} /> Temperature: {weather.main.temp}°C</p>
          <p><FontAwesomeIcon icon={faTint} /> Humidity: {weather.main.humidity}%</p>
          <p><FontAwesomeIcon icon={faWind} /> Wind Speed: {weather.wind.speed} m/s</p>
          <p><FontAwesomeIcon icon={faSun} /> Sunrise: {formatTime(weather.sys.sunrise)}</p>
          <p><FontAwesomeIcon icon={faMoon} /> Sunset: {formatTime(weather.sys.sunset)}</p>
          <p><FontAwesomeIcon icon={faCalendarDay} /> Date: {formatDate(weather.dt)}</p>
        </div>
      )}

      {/* Search History Section */}
      {searchHistory.length > 0 && (
        <div className="history">
          <h3>Search History</h3>
          <ul>
            {searchHistory.map((city, index) => (
              <li key={index}>
                <span onClick={() => handleHistoryClick(city)}>{city}</span>
                <button onClick={() => removeHistoryItem(city)} className="remove-button">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </li>
            ))}
          </ul>
          <button onClick={clearHistory} className="clear-history-button">
            <FontAwesomeIcon icon={faTrashAlt} /> Clear All History
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
