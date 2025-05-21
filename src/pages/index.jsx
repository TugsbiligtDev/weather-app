import Circles from "@/components/Circles";
import DayForecast from "@/components/DayForecast";
import NightForecast from "@/components/NightForecast";
import { useState, useEffect } from "react";

// country api https://countriesnow.space/api/v0.1/countries

const Index = () => {
  const weatherApiKey = "899d9c2c0f5845838dc70138240912";
  const [weather, setWeather] = useState();
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
        console.log(data);
      });
  }, [cityName]);

  return (
    <div className="relative flex w-full h-screen overflow-hidden">
      <Circles />
      <div className="w-full flex relative">
        <DayForecast
          date={weather?.forecast?.forecastday?.[0]?.date}
          loc={weather?.location?.name}
          temp={weather?.current?.temp_c}
          condition={weather?.current?.condition?.text}
          loading={loading}
          weather={weather}
        />
        <NightForecast
          date={weather?.forecast?.forecastday?.[0]?.date}
          loc={weather?.location?.name}
          temp={weather?.current?.temp_c}
          condition={weather?.current?.condition?.text}
          loading={loading}
          weather={weather}
        />
      </div>
    </div>
  );
};

export default Index;
