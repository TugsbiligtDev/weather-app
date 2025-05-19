import React from "react";

const DayCard = () => {
  return (
    <div className="w-[414px] h-[832px] rounded-[48px] bg-[#ffffffbf] px-10 py-12">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#6B7280] text-lg font-medium ">
            September 10, 2021
          </p>
          <p className="text-[#111827] text-5xl font-extrabold">Kraków</p>
        </div>
        <img src="localization_icon.svg" alt="" />
      </div>

      <div className=" flex justify-center items-center py-3">
        <img src="sun.png" alt="moon" width={264} height={264} />
      </div>

      <div>
        <p className="text-[144px] font-extrabold text-[#111827]">17°</p>
        <p className="text-[#FF8E27] font-extrabold text-2xl">Bright</p>
      </div>

      <div className="flex justify-between pt-12">
        <img src="home.svg" alt="home" />
        <img src="pin.svg" alt="pin" />
        <img src="heart.svg" alt="heart" />
        <img src="user.svg" alt="user" />
      </div>
      <img src="orange.svg" alt="" className="z-0" />
    </div>
  );
};

export default DayCard;
