import { useState } from "react";

interface Item {
  id?: string;
  imgSrc?: string;
  detail?: string;
}

interface useCarouselProps {
  data: Item[];
}

export const useCarosel = ({ data }: useCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handlePrevClick = () => {
    if (!isButtonClicked) {
      setIsButtonClicked(true);

      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : data.length - 1
      );

      setTimeout(() => {
        setIsButtonClicked(false);
      }, 200); // 500ms 동안 클릭 이벤트 무시
    }
  };

  const handleNextClick = () => {
    if (!isButtonClicked) {
      setIsButtonClicked(true);

      setCurrentIndex((prevIndex) =>
        prevIndex < data.length - 1 ? prevIndex + 1 : 0
      );

      setTimeout(() => {
        setIsButtonClicked(false);
      }, 200); // 200ms 동안 클릭 이벤트 무시
    }
  };

  return {
    handlePrevClick,
    handleNextClick,
    currentIndex,
    data,
    setCurrentIndex
  };
};
