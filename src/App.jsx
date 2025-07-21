import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./index.css";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-blue-100 to-purple-300 p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">☀️ ClimaX</h1>
      <SearchBar setWeatherData={setWeatherData} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}
