import { useState, useEffect } from "react";

const LocationSearch = ({ onCitySelect }) => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [countriesError, setCountriesError] = useState(null);

  useEffect(() => {
    fetchCountriesData();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchValue.length > 0) {
        let searchResults = [];

        countries?.map((country) => {
          return country?.cities?.map((city) => {
            if (city.toLowerCase().includes(searchValue.toLowerCase())) {
              searchResults.push({ name: city, country: country.country });
            }
          });
        });

        setFilteredCities(searchResults.slice(0, 5));
        setShowDropdown(true);
      } else {
        setFilteredCities([]);
        setShowDropdown(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchValue, countries]);

  const fetchCountriesData = () => {
    setCountriesError(null);

    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Countries service error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          throw new Error(data.error || "Countries data not available");
        }
        setCountries(data.data || []);
        setCountriesError(null);
      })
      .catch((error) => {
        setCountriesError(
          "Unable to load countries. Search may not work properly."
        );
        setCountries([]);
      });
  };

  const handleCityClick = (cityName) => {
    onCitySelect(cityName);
    setSearchValue("");
    setShowDropdown(false);
  };

  return (
    <div className="absolute z-50 -top-25 left-32 transform -translate-x-1/2 w-[567px] max-w-[90vw]">
      <div className="flex gap-4 items-center rounded-[48px] bg-white p-4 shadow-lg">
        <img src="/search.svg" alt="Search icon" className="w-6 h-6" />
        <input
          type="text"
          placeholder="Enter the city"
          className="w-full h-full text-black text-[32px] font-bold outline-none"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
      {showDropdown && (
        <div className="flex flex-col rounded-2xl bg-white mt-2 p-4 shadow-lg transition-all duration-300 ease-in-out">
          {countriesError ? (
            <div className="text-center py-4">
              <p className="text-red-500 text-sm mb-2">{countriesError}</p>
              <button
                onClick={fetchCountriesData}
                className="text-blue-500 hover:text-blue-600 text-sm underline"
              >
                Retry loading countries
              </button>
            </div>
          ) : filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <div
                key={city.name + city.country}
                className="flex gap-4 items-center py-3 hover:bg-gray-100 cursor-pointer rounded-xl px-3 transition-colors duration-200"
                onClick={() => handleCityClick(city.name)}
              >
                <img src="/room.svg" alt="Location icon" className="w-6 h-6" />
                <p className="text-black text-[28px] font-bold">
                  {city.name}, {city.country}
                </p>
              </div>
            ))
          ) : searchValue.length > 0 ? (
            <div className="text-center py-4">
              <p className="text-gray-500 text-xl">No cities found</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
