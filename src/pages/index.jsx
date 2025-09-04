import Circles from "@/components/Circles";
import DayForecast from "@/components/DayForecast";
import NightForecast from "@/components/NightForecast";
import { useState, useEffect } from "react";

const Index = () => {
  const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const [weather, setWeather] = useState();
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Weather service error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          throw new Error(data.error.message || "Weather data not available");
        }
        setWeather(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error("Weather API error:", error);
        setError(
          error.message ||
            "Unable to fetch weather data. Please try again later."
        );
        setLoading(false);
        setWeather(null);
      });
  }, [cityName, weatherApiKey]);

  const dayData = weather?.forecast?.forecastday?.[0]?.day;

  return (
    <div className="relative flex w-full h-screen overflow-hidden">
      <Circles />
      <div className="w-full flex relative">
        {error ? (
          <div className="w-full h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center max-w-md mx-auto p-6">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Weather Service Unavailable
              </h2>
              <p className="text-gray-600 mb-6">{error}</p>
              <button
                onClick={() => {
                  setError(null);
                  setCityName(cityName);
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <>
            <DayForecast
              date={weather?.forecast?.forecastday?.[0]?.date}
              loc={weather?.location?.name}
              temp={dayData?.maxtemp_c || weather?.current?.temp_c}
              condition={
                dayData?.condition?.text || weather?.current?.condition?.text
              }
              loading={loading}
              weather={weather}
              onCitySelect={setCityName}
            />
            <NightForecast
              date={weather?.forecast?.forecastday?.[0]?.date}
              loc={weather?.location?.name}
              temp={dayData?.mintemp_c || weather?.current?.temp_c}
              condition={
                dayData?.condition?.text || weather?.current?.condition?.text
              }
              loading={loading}
              weather={weather}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
