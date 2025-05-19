const Input = () => {
  return (
    <div className="w-[567px] py-4 px-6 flex gap-4 items-center rounded-[48px] bg-white mt-[58px] z-20">
      <img src="search.svg" alt="" />
      <input
        type="text"
        placeholder="Enter the city"
        className="w-full h-full text-black text-[32px] font-bold outline-none"
      />
    </div>
  );
};

export default Input;
