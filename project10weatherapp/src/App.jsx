import { useState, useEffect } from "react";
import WeatherMap from "./component/WeatherMap";

function App() {
  const [city, setCity] = useState("London");
  const [searchcity, setSearchcity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchWeather() {
      if (!searchcity) return;

      setLoading(true);

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=${API_KEY}&units=metric`
        );

        const data = await res.json();
        setWeather(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [searchcity]);
console.log(weather);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center p-6">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Weather Card */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Weather App
          </h1>

          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Enter city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 border border-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={() => setSearchcity(city)}
              className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>

          {loading && (
            <p className="text-center text-blue-600 font-medium">
              Loading...
            </p>
          )}

          {!loading && weather && weather.main && (
            <div className="bg-gray-50 rounded-xl p-6 text-center shadow-md">
              <h2 className="text-3xl font-bold text-gray-800">
                {weather.name}
              </h2>

              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather"
                className="mx-auto"
              />

              <p className="text-5xl font-bold text-blue-600 mb-2">
                {Math.round(weather.main.temp)}°C
              </p>

              <p className="text-lg text-gray-600 mb-4">
                {weather.weather[0].main}
              </p>

              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="bg-white p-3 rounded-lg shadow">
                  💧 Humidity
                  <p className="font-bold">
                    {weather.main.humidity}%
                  </p>
                </div>

                <div className="bg-white p-3 rounded-lg shadow">
                  🌬️ Wind
                  <p className="font-bold">
                    {weather.wind.speed} m/s
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Map */}
        {weather && weather.coord && (
          <div className="bg-white p-4 rounded-2xl shadow-2xl">
            <WeatherMap
              lat={weather.coord.lat}
              lon={weather.coord.lon}
              city={weather.name}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;