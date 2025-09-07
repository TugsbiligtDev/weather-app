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

    if (!weatherApiKey) {
      setError(
        "Weather API key is not configured. Please check your environment variables."
      );
      setLoading(false);
      return;
    }

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
          <div className="w-full h-screen flex top-[20%] justify-center relative z-50">
            <h1 className="text-red-500 text-2xl">{error}</h1>
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
