# Weather App with Interactive Map

## Overview

A React-based Weather Application that allows users to search for any city and view real-time weather information along with its location on an interactive map.

The application fetches weather data from the OpenWeather API and displays temperature, humidity, wind speed, weather conditions, and a map centered on the searched city using React Leaflet and OpenStreetMap.

## Features

* Search weather by city name
* Real-time weather data using OpenWeather API
* Display temperature, humidity, wind speed, and weather conditions
* Dynamic weather icons
* Loading state while fetching data
* Interactive map with location marker
* Map automatically updates and centers on the searched city
* Responsive and modern UI built with Tailwind CSS

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Hooks (`useState`, `useEffect`)

### APIs

* OpenWeather API

### Maps

* React Leaflet
* OpenStreetMap

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project directory

```bash
cd weather-app
```

3. Install dependencies

```bash
npm install
```

4. Install map libraries

```bash
npm install leaflet react-leaflet
```

5. Create a `.env` file in the root directory

```env
VITE_API_KEY=YOUR_OPENWEATHER_API_KEY
```

6. Start the development server

```bash
npm run dev
```

## Project Structure

```text
src
│
├── component
│   └── WeatherMap.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## How It Works

1. User enters a city name.
2. Clicking the Search button updates the searched city state.
3. `useEffect` triggers an API call to OpenWeather.
4. Weather information is fetched and stored in state.
5. Latitude and longitude from the API response are passed to the map component.
6. React Leaflet updates the map and places a marker at the searched location.

## Learning Outcomes

* Working with APIs using Fetch API
* Managing state with React Hooks
* Using `useEffect` for side effects
* Handling asynchronous operations
* Conditional rendering in React
* Environment variables with Vite
* Integrating third-party libraries
* Working with maps using React Leaflet

## Future Enhancements

* 5-day weather forecast
* Search suggestions/autocomplete
* Dark mode
* Current location weather
* Weather charts and graphs
* Recent search history
* Weather alerts and notifications

## Author

Sanidhya Somani
