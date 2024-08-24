# Weather Application

## Overview

This Weather Application is a responsive web app built using React.js that provides real-time weather information based on city names. The app fetches data from the OpenWeatherMap API to display current weather conditions, a 7-day forecast, and additional details like humidity, wind speed, sunrise, and sunset times. It also includes a search history feature for easy access to previously searched cities.

## Features

- **City-Based Weather Search:** Users can search for weather data by entering a city name.
- **Real-Time Weather Data:** Displays current temperature, weather description, humidity, wind speed, sunrise, and sunset times.
- **7-Day Forecast:** Provides a detailed weather forecast for the next 7 days.
- **Search History:** Stores and displays a list of recent searches, allowing users to revisit previous searches easily.
- **Error Handling:** Informs users of issues like incorrect city names or data retrieval errors with clear messages.
- **Responsive Design:** The application is fully responsive and works across various devices and screen sizes.

## Project Structure

src/ ├── components/ │ ├── WeatherCard.js # Displays current weather information │ ├── SearchHistory.js # Manages and displays search history │ ├── WeatherForecast.js # Displays the 7-day weather forecast │ ├── Header.js # Displays the app header and search bar ├── services/ │ ├── weatherService.js # Handles API requests to OpenWeatherMap ├── App.js # Main application component ├── App.css # Global styles for the application ├── index.js # Entry point for React app ├── index.css # Global CSS styles

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ### Install Dependencies:
npm install
###Set Up API KEY:
Obtain an API key from OpenWeatherMap.
Create a .env file in the root directory of the project and add your API key:
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
##Run The Application
npm start
The app will run in development mode on http://localhost:3000.

Usage
Search Weather: Enter a city name in the search bar to retrieve weather data.
View Forecast: Scroll down to view the 7-day weather forecast.
Search History: Click on a city in the search history to quickly load its weather data. Use the delete icon to remove a city or clear all history.
Responsive Layout: The app is designed to work on both desktop and mobile devices.
Technologies Used
React.js: JavaScript library for building user interfaces.
Axios: For making HTTP requests to the OpenWeatherMap API.
React Icons: For weather and UI icons.
CSS3: For styling and responsive design.
Future Enhancements
Geolocation Support: Automatically detect the user’s location and display weather information.
Weather Alerts: Display notifications for severe weather conditions.
Hourly Forecast: Provide detailed hourly weather data.
Multiple Themes: Allow users to switch between different themes (e.g., dark mode).
Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any improvements or new features.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For any inquiries or feedback, please contact 020deepakgupta@gmail.com
