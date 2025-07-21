export default function WeatherCard({ data }) {
  return (
    <div className="bg-white/50 p-6 rounded-2xl shadow-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold">{data.name}, {data.sys.country}</h2>
      <p className="text-5xl my-4">{Math.round(data.main.temp)}°C</p>
      <p className="capitalize">{data.weather[0].description}</p>
      <p className="mt-2">Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
}
