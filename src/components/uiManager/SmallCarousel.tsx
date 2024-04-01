"use client";

import React from "react";
import { CarouselFrame } from "@/lib/MyCarousel";
import SmallCarouselCard from "@/components/Carousel/card/SmallCarouselCard";
import CarouselBtn from "@/components/Carousel//button/CarouselBtn";
import CarouselOutLayer from "@/components/Carousel/outLayer/CarouselOutLayer";
import CarouselIndecator from "@/components/Carousel/locations/CarouselLocation";

interface Item {
  _id: string;
  imgSrc: string;
  alt: string;
  brand: string;
  name: string;
  price: number;
}

const SmallCarousel: React.FC<{ data: Item[] }> = ({ data }) => {
  return (
    <CarouselFrame<Item>
      CarouselCard={SmallCarouselCard}
      CarouselBtn={CarouselBtn}
      CarouselOutLayer={CarouselOutLayer}
      CarouselIndecator={CarouselIndecator}
      data={data}
      width={"100%"}
      layerRatio={"2/1"}
      cardRatio={"1/2"}
      maxHeight={"400px"}
    />
  );
};

export default SmallCarousel;
