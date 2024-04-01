import React from "react";

interface itemRequire {
  imgSrc: string;
  _id: string;
  detail: string;
}

interface MainCarouselCardProps {
  index: number;
  item: itemRequire;
  ratio: string;
}

const MainCarouselCard: React.FC<MainCarouselCardProps> = ({ item, ratio }) => {
  return (
    <div className={`relative w-full aspect-[${ratio}] flex justify-center`}>
      <img
        src={item.imgSrc}
        alt={`id: ${item._id}인 포스트`}
        className="object-cover w-full"
      />
      <span className="absolute bottom-10 left-5 text-white text-2xl">
        {item.detail}
      </span>
    </div>
  );
};

export default MainCarouselCard;
