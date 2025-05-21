import { useState, useEffect } from "react";

const weatherApiKey = "899d9c2c0f5845838dc70138240912";

const LocationSearch = ({ onCitySelect }) => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState({});
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulan bator");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetchCountriesData();
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [selectedCity]);

  useEffect(() => {
    let searchResults = [];

    countries?.map((country) => {
      return country?.cities?.map((city) => {
        if (city.toLowerCase().includes(searchValue)) {
          searchResults.push({ name: city, country: country.country });
        }
      });
    });

    setFilteredCities(searchResults.slice(0, 5));
    setShowDropdown(searchValue.length > 0);
  }, [searchValue]);

  const fetchCountriesData = () => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data);
      });
  };

  const fetchWeatherData = () => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data?.forecast?.forecastday[0]);
      });
  };

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
    onCitySelect(cityName); // <-- this tells the parent
    setSearchValue("");
    setShowDropdown(false);
  };

  return (
    <div className="absolute z-50 -top-25 left-32 transform -translate-x-1/2 w-[567px] max-w-[90vw]">
      <div className="flex gap-4 items-center rounded-[48px] bg-white p-4 shadow-lg">
        <img src="search.svg" alt="search" className="w-6 h-6" />
        <input
          type="text"
          placeholder="Enter the city"
          className="w-full h-full text-black text-[32px] font-bold outline-none"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value.toLowerCase())}
          onFocus={() => setShowDropdown(searchValue.length > 0)}
        />
      </div>
      {showDropdown && filteredCities.length > 0 && (
        <div className="flex flex-col rounded-2xl bg-white mt-2 p-4 shadow-lg transition-all duration-300 ease-in-out">
          {filteredCities.map((city) => (
            <div
              key={city.name + city.country}
              className="flex gap-4 items-center py-3 hover:bg-gray-100 cursor-pointer rounded-xl px-3 transition-colors duration-200"
              onClick={() => handleCityClick(city.name)}
            >
              <img src="room.svg" alt="icon" className="w-6 h-6" />
              <p className="text-black text-[28px] font-bold">
                {city.name}, {city.country}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
