import LocationSearch from "./LocationSearch";

const DayForecast = ({ date, loc, temp, condition, loading, onCitySelect }) => {
  return (
    <div className="relative w-1/2 h-screen bg-[#F3F4F6] flex justify-center items-center overflow-hidden">
      <div className="relative">
        <div className="absolute -left-19 -top-19 w-[176px] min-w-[64px] z-10">
          <img src="orange.svg" alt="orange" className="w-full h-auto" />
        </div>

        <div className="relative w-[414px] h-[832px] rounded-[48px] bg-white/75 backdrop-blur-md px-10 py-8 z-20">
          <LocationSearch onCitySelect={onCitySelect} />

          {loading ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-5 border-orange-400 mb-4"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#6B7280] text-lg font-medium">{date}</p>
                  <p className="text-[#111827] text-5xl font-extrabold">
                    {loc}
                  </p>
                </div>
                <img src="localization_icon.svg" alt="pin" />
              </div>

              <div className="flex justify-center items-center py-10">
                <img src="sun.png" alt="sun" width={260} height={260} />
              </div>

              <div>
                <p className="text-[120px] font-extrabold bg-gradient-to-b from-[#111827] to-[#6B7280] bg-clip-text text-transparent">
                  {temp}°
                </p>
                <p className="text-[#FF8E27] font-extrabold text-2xl">
                  {condition}
                </p>
              </div>

              <div className="flex justify-between pt-12">
                <img src="home.svg" alt="home" />
                <img src="pin.svg" alt="pin" />
                <img src="heart.svg" alt="heart" />
                <img src="user.svg" alt="user" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DayForecast;
