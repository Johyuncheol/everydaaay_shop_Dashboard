import React from "react";
import LeftArrowSvg from "@/../../public/images/carousel/LeftArrow.svg";
import RightArrowSvg from "@/../../public/images/carousel/RightArrow.svg";
import Image from "next/image";

const CarouselBtn: React.FC<{
  handlePrevClick: () => void;
  handleNextClick: () => void;
}> = ({ handlePrevClick, handleNextClick }) => {
  return (
    <>
      <Image
        src={LeftArrowSvg}
        onClick={handlePrevClick}
        alt="LeftArrow"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 border-none text-xl cursor-pointer"
      />
      <Image
        src={RightArrowSvg}
        onClick={handleNextClick}
        alt="RightArrow"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 border-none text-xl cursor-pointer"
      />
    </>
  );
};

export default CarouselBtn;
