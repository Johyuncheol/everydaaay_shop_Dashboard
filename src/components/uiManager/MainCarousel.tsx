"use client";

import React, { useEffect } from "react";
import { CarouselFrame } from "@/lib/MyCarousel";
import MainCarouselCard from "@/components/Carousel/card/MainCarouselCard";
import CarouselBtn from "@/components/Carousel//button/CarouselBtn";
import CarouselOutLayer from "@/components/Carousel/outLayer/CarouselOutLayer";
import CarouselIndecator from "@/components/Carousel/locations/CarouselLocation";

interface mainBannerItem {
  _id: string;
  imgSrc: string;
  detail: string;
}

const MainCarousel: React.FC<{ data: mainBannerItem[] }> = ({ data }) => {
  return (
    <CarouselFrame<mainBannerItem>
      CarouselCard={MainCarouselCard}
      CarouselBtn={CarouselBtn}
      CarouselOutLayer={CarouselOutLayer}
      CarouselIndecator={CarouselIndecator}
      data={data}
      width={"100%"}
      layerRatio={"2/1"}
      cardRatio={"2/1"}
    />
  );
};

export default MainCarousel;
