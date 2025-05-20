import NightCard from "./NightCard";

const NightForecast = () => {
  return (
    <div className="relative w-1/2 h-screen bg-[#0F141E] flex justify-center items-center">
      <NightCard />
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <img
          src="purple.svg"
          alt="purple"
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default NightForecast;
