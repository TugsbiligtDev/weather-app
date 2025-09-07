const NightForecast = ({ date, loc, temp, condition, loading }) => {
  return (
    <div className="relative w-1/2 h-screen bg-[#0F141E] flex justify-center items-center overflow-hidden">
      <div className="relative">
        <div className="relative w-[414px] h-[832px] rounded-[48px] bg-[#111827]/75 backdrop-blur-md px-10 py-8 z-20">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-5 border-indigo-400 mb-4"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#9CA3AF] text-lg font-medium">{date}</p>
                  <p className="text-white text-5xl font-extrabold">{loc}</p>
                </div>
                <img src="/localization_icon.svg" alt="Location pin icon" />
              </div>

              <div className="flex justify-center items-center py-10">
                <img
                  src="/moon.webp"
                  alt="Moon weather icon"
                  width={260}
                  height={260}
                />
              </div>

              <div>
                <p className="text-[120px] font-extrabold bg-gradient-to-b from-[#F9FAFB] to-[rgba(249,250,251,0)] bg-clip-text text-transparent">
                  {temp}°
                </p>
                <p className="text-[#777CCE] font-extrabold text-2xl">
                  {condition}
                </p>
              </div>

              <div className="flex justify-between pt-12">
                <img src="/home.svg" alt="Home navigation icon" />
                <img src="/pin.svg" alt="Location pin navigation icon" />
                <img src="/heart.svg" alt="Favorites heart icon" />
                <img src="/user.svg" alt="User profile icon" />
              </div>
            </>
          )}
        </div>

        <div className="absolute -right-14 -bottom-12 w-[128px] min-w-[64px] z-10">
          <img
            src="/purple.svg"
            alt="Purple decorative circle"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NightForecast;
