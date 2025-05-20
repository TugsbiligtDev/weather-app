import React from "react";

const DayCard = () => {
  return (
    <div className="relative w-[414px] h-[832px] rounded-[48px] bg-[#ffffffbf] px-10 py-8 z-10">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#6B7280] text-sm font-medium">May 20, 2025</p>
          <p className="text-[#111827] text-5xl font-extrabold">Ulaanbaatar</p>
        </div>
        <img src="localization_icon.svg" alt="" />
      </div>

      <div className="flex justify-center items-center py-10">
        <img src="sun.png" alt="sun" width={240} height={240} />
      </div>

      <div>
        <p className="text-[144px] font-extrabold text-[#111827] leading-none">
          14.7°
        </p>
        <p className="text-[#5B74F4] font-medium text-2xl mt-2">
          Patchy rain nearby
        </p>
      </div>

      <div className="flex justify-between pt-24">
        <img src="home.svg" alt="home" />
        <img src="pin.svg" alt="pin" />
        <img src="heart.svg" alt="heart" />
        <img src="user.svg" alt="user" />
      </div>
    </div>
  );
};

export default DayCard;
