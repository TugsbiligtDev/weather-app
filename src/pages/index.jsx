import Countries from "@/components/Countries";
import Day from "@/components/Day";
import Input from "@/components/Input";
import Night from "@/components/Night";
import React from "react";

const index = () => {
  return (
    <div className="flex justify-center">
      <div className="relative left-[600px]">
        <Input />
        <Countries />
      </div>
      <Day />
      <Night />
    </div>
  );
};

export default index;
