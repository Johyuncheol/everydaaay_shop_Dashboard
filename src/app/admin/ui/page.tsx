"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useEffect, useRef, useState } from "react";
import MainCarouselInfo from "./MainCarouselInfo";
import MainNavInfo from "./MainNavInfo";
import HotItemsInfo from "./HotItemsInfo";
import RecommendInfo from "./RecommendInfo";
import BannerItems from "./BannerItems";
import { addSessionStorage, getSessionStorage } from "@/utill/session";
const Page = () => {
  const [Category, setCategory] = useState(getSessionStorage("UIcategory") || "mainCarousel");

  const chageCategory = (key: string) => {
    addSessionStorage("UIcategory", key);
    setCategory(key);
  };


  return (
    <DefaultLayout>
      <div className="flex flex-wrap">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 "
          onClick={() => chageCategory("mainCarousel")}
        >
          main_Carousel
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 "
          onClick={() => chageCategory("mainNav")}
        >
          main_nav
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 "
          onClick={() => chageCategory("hotItems")}
        >
          요즘 뜨는제품
        </button>

        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 "
          onClick={() => chageCategory("recommend")}
        >
          추천 제품
        </button>

        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 "
          onClick={() => chageCategory("bannerItems")}
        >
          베너 및 관련제품
        </button>
      </div>

      {Category === "mainCarousel" && <MainCarouselInfo />}

      {Category === "mainNav" && <MainNavInfo />}

      {Category === "hotItems" && <HotItemsInfo />}

      {Category === "recommend" && <RecommendInfo />}

      {Category === "bannerItems" && <BannerItems />}
    </DefaultLayout>
  );
};

export default Page;
