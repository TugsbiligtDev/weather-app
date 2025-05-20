import DayCard from "./DayCard";
const DayForecast = () => {
  return (
    <div className="relative w-1/2 h-screen bg-[#F3F4F6] flex justify-center items-center">
      <DayCard />
      <div className="absolute top-0 left-0 w-32 h-32">
        <img src="orange.svg" alt="orange" className="absolute top-0 left-0" />
      </div>
    </div>
  );
};

export default DayForecast;
