const LocationSearch = () => {
  return (
    <div className="absolute z-50 -top-25 left-32 transform -translate-x-1/2 w-[567px] max-w-[90vw]">
      <div className="flex gap-4 items-center rounded-[48px] bg-white p-4">
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Enter the city"
          className="w-full h-full text-black text-[32px] font-bold outline-none"
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
