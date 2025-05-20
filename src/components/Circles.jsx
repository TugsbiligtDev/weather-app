import React from "react";

const Circles = () => {
  return (
    <div className="absolute  z-0 flex items-center justify-center">
      <div className="w-[140px] h-[140px] border border-black rounded-full absolute"></div>
      <div className="w-[340px] h-[340px] border border-black rounded-full absolute"></div>
      <div className="w-[540px] h-[540px] border border-black rounded-full absolute"></div>
      <div className="w-[940px] h-[940px] border border-black rounded-full absolute"></div>
      <div className="w-[1340px] h-[1340px] border border-black rounded-full absolute"></div>
    </div>
  );
};

export default Circles;
