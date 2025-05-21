import { useEffect, useState } from "react";

const LocationSearch = () => {
  const [cityName, setCityName] = useState("");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((country) => {
        // console.log(country);
        setLocations(country?.data);
      });
  }, []);
  const searchLoc = (event) => {
    setCityName(event);
  };

  const searchkey = (event) => {
    if (event.key === "Enter") {
      locations.map((location) => console.log("location", location.cities));
    }
  };

  console.log("cities", locations);
  return (
    <div className="absolute z-50 -top-25 left-32 transform -translate-x-1/2 w-[567px] max-w-[90vw]">
      <div className="flex gap-4 items-center rounded-[48px] bg-white p-4">
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Enter the city"
          className="w-full h-full text-black text-[32px] font-bold outline-none"
          value={cityName}
          onChange={(event) => searchLoc(event.target.value)}
          onKeyDown={searchkey}
        />
      </div>
      {/* <div className="flex flex-col rounded-2xl bg-white mt-2 p-4">
        <div className="flex gap-4 items-center py-2">
          <img src="room.svg" alt="icon" />
          <p className="text-black text-[28px] font-bold">Tokyo, Japan</p>
        </div>
        <div className="flex gap-4 items-center py-2">
          <img src="room.svg" alt="icon" />
          <p className="text-black text-[28px] font-bold">
            Shibuya City, Tokyo, Japan
          </p>
        </div>
        <div className="flex gap-4 items-center py-2">
          <img src="room.svg" alt="icon" />
          <p className="text-black text-[28px] font-bold">
            Ikebukuro, Toshima City, Tokyo
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default LocationSearch;
