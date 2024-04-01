import React from "react";

const CarouselLocation: React.FC<{
  currentIndex: number;
  totalNums: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}> = ({ currentIndex, totalNums, setCurrentIndex }) => {
  return (
    <div className="flex justify-end">
      <div className="flex w-30 py-4 gap-4">
        {new Array(totalNums).fill(0).map((_, index) => (
          <div
            key={index}
            className={`w-full h-2 border border-black bg-${index === currentIndex ? "black" : "white"} cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselLocation;
