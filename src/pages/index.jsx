import Circles from "@/components/Circles";
import DayForecast from "@/components/DayForecast";
import LocationSearch from "@/components/LocationSearch";
import NightForecast from "@/components/NightForecast";
import React from "react";

const index = () => {
  return (
    <div className="relative flex w-full h-screen overflow-hidden">
      <Circles />
      <div className="w-full flex relative">
        <DayForecast />
        <NightForecast />
      </div>
    </div>
  );
};

export default index;
