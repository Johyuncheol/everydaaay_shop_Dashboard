import React from "react";

interface Item {
  _id: string;
  imgSrc: string;
  alt: string;
  brand: string;
  name: string;
  price: number;
}

interface SmallCarouselProps<Item> {
  item: Item;
  ratio: string;
  index: number;
}

const SmallCarouselCard: React.FC<SmallCarouselProps<Item>> = ({
  item,
  index,
  ratio,
}) => {
  return (
    <div className={`flex flex-col shrink-0 justify-center pl-[1rem] bg-slate-100 aspect-[1/2]`} key={index} >
      <img src={item.imgSrc} alt={item.alt} className="w-full object-cover" />
      <span >{item.brand}</span>
      <span>{item.name}</span>
      <span>{item.price}</span>
    </div>
  );
};

export default SmallCarouselCard;
