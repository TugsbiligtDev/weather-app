const Circles = () => {
  return (
    <div className="absolute w-full h-full z-10 flex items-center justify-center overflow-hidden">
      <div className="absolute w-36 h-36 ">
        <div className="absolute w-18 h-36 border-t border-b border-l border-black/10 rounded-l-full left-0 flex justify-end items-center pr-1.5">
          <img src="left.svg" alt="left" />
        </div>
        <div className="absolute w-18 h-36 border-t border-b border-r border-white/10 rounded-r-full right-0 bg-[#F3F4F6] flex justify-start items-center pl-1.5">
          <img src="right.svg" alt="" />
        </div>
      </div>

      <div className="absolute w-80 h-80 ">
        <div className="absolute w-40 h-80 border-t border-b border-l border-black/10 rounded-l-full left-0"></div>
        <div className="absolute w-40 h-80 border-t border-b border-r border-white/10 rounded-r-full right-0"></div>
      </div>

      <div className="absolute w-[540px] h-[540px] ">
        <div className="absolute w-[270px] h-[540px] border-t border-b border-l border-black/10 rounded-l-full left-0"></div>
        <div className="absolute w-[270px] h-[540px] border-t border-b border-r border-white/10 rounded-r-full right-0"></div>
      </div>

      <div className="absolute w-[940px] h-[940px] ">
        <div className="absolute w-[470px] h-[940px] border-t border-b border-l border-black/10 rounded-l-full left-0"></div>
        <div className="absolute w-[470px] h-[940px] border-t border-b border-r border-white/10 rounded-r-full right-0"></div>
      </div>

      <div className="absolute w-[1340px] h-[1340px] ">
        <div className="absolute w-[670px] h-[1340px] border-t border-b border-l border-black/10 rounded-l-full left-0"></div>
        <div className="absolute w-[670px] h-[1340px] border-t border-b border-r border-white/10 rounded-r-full right-0"></div>
      </div>
    </div>
  );
};

export default Circles;
