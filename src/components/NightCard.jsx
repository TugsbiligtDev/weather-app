import React from "react";

const NightCard = () => {
  return (
    <div className="w-[414px] h-[832px] rounded-[48px] bg-[#111827bf] px-10 py-12 ">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#9CA3AF] text-lg font-medium ">
            September 10, 2021
          </p>
          <p className="text-white text-5xl font-extrabold">Kraków</p>
        </div>
        <img src="localization_icon.svg" alt="" />
      </div>

      <div className=" flex justify-center items-center py-3">
        <img src="moon.png" alt="moon" width={264} height={264} />
      </div>

      <div>
        <p className="text-[144px] font-extrabold text-[#F9FAFB]">17°</p>
        <p className="text-[#777CCE] font-extrabold text-2xl">Clear</p>
      </div>

      <div className="flex justify-between pt-12">
        <img src="home.svg" alt="home" />
        <img src="pin.svg" alt="pin" />
        <img src="heart.svg" alt="heart" />
        <img src="user.svg" alt="user" />
      </div>
      <img src="purple.svg" alt="" className="z-0" />
    </div>
  );
};

export default NightCard;
