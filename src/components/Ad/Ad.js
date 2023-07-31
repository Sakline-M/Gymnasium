import React from "react";
import adBanner from "../../assets/banner/ad.jpeg";
import cross from "../../assets/icon/cross.svg";

const Ad = ({ setAdd }) => {
  return (
    <div className="pl-[25%] pt-[10%] cusAdBg h-[100vh]">
      <img src={adBanner} alt="" />
      <img
        onClick={() => {
          setAdd(false);
        }}
        className="w-[60px] absolute top-16 right-72 cursor-pointer"
        src={cross}
        alt=""
      />
    </div>
  );
};

export default Ad;
