const NightCard = () => {
  return (
    <div className="relative w-[414px] h-[832px] rounded-[48px] bg-[#111827bf] px-10 py-8 z-10">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#9CA3AF] text-sm font-medium">May 20, 2025</p>
          <p className="text-white text-5xl font-extrabold">Ulaanbaatar</p>
        </div>
        <img src="localization_icon.svg" alt="" />
      </div>

      <div className="flex justify-center items-center py-10">
        <img src="moon.png" alt="moon" width={240} height={240} />
      </div>

      <div>
        <p className="text-[144px] font-extrabold text-[#F9FAFB] leading-none">
          3.8°
        </p>
        <p className="text-[#FF8E27] font-medium text-2xl mt-2">
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

export default NightCard;
