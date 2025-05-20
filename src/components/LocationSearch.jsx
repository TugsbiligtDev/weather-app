import React, { useState } from "react";

const LocationSearch = ({ searchQuery, onSearch, onSelectLocation }) => {
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([
    "Tokyo, Japan",
    "Shibuya City, Tokyo, Japan",
    "Ikebukuro, Toshima City, Tokyo"
  ]);

  // Handle input change
  const handleInputChange = (e) => {
    const query = e.target.value;
    onSearch(query);
    
    // Show results if there's text in the input
    setShowResults(query.length > 0);
    
    // In a real app, you would fetch location suggestions here
    // For demo purposes, we'll just filter our hardcoded results
    if (query.length > 0) {
      const filteredResults = [
        "Tokyo, Japan",
        "Shibuya City, Tokyo, Japan", 
        "Ikebukuro, Toshima City, Tokyo",
        "Ulaanbaatar, Mongolia",
        "New York, USA",
        "London, UK"
      ].filter(location => 
        location.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  // Handle location selection
  const handleLocationSelect = (location) => {
    // Extract city name from location string
    const city = location.split(',')[0];
    onSelectLocation(city);
    onSearch(location);
    setShowResults(false);
  };

  return (
    <div className="absolute z-50 top-6 left-1/2 transform -translate-x-1/2 w-[500px]">
      <div className="flex items-center rounded-full bg-white p-4 shadow-md">
        <img src="search.svg" alt="" className="ml-2 mr-3" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search"
          className="w-full h-full text-gray-500 text-lg outline-none"
          onFocus={() => setShowResults(searchQuery.length > 0)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />
      </div>
      
      {showResults && searchResults.length > 0 && (
        <div className="flex flex-col rounded-2xl bg-white mt-2 p-4 shadow-lg">
          {searchResults.map((location, index) => (
            <div 
              key={index}
              className="flex gap-4 items-center py-2 cursor-pointer hover:bg-gray-100 rounded-lg px-2"
              onClick={() => handleLocationSelect(location)}
            >
              <img src="room.svg" alt="icon" />
              <p className="text-black text-xl font-medium">{location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
