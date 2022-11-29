import React from "react";

const CarosuelCard = ({ src, title, subTitle }) => {
  return (
    <div className="flex rounded-xl md:py-4 md:px-5 py-3 px-4 md:w-[450px] w-full shadow-carCard gap-x-5">
      <img src={src} alt="image1" className="w-[100px] h-[100px]" />
      <div>
        <p className="text-secondary text-[18px]">{title}</p>
        <p className="font-medium md:text-xl text-sm">{subTitle}</p>
      </div>
    </div>
  );
};

export default CarosuelCard;
