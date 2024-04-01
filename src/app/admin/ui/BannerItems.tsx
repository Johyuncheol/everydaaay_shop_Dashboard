import React, { useState, useEffect } from "react";
import SmallCarousel from "@/components/uiManager/SmallCarousel";
import ItemTable from "@/components/ItemTable";
import UIService from "@/api/Ui";
import Banner from "@/components/FigureLinkBox/Banner";
import { useGetUI } from "@/api/useUIService";

interface dataType {
  _id: string;
  imgSrc: string;
  alt: string;
  name: string;
  brand: string;
  price: number;
}

interface bannerType {
  _id: string;
  imgSrc: string;
  alt: string;
  detail: string;
  linkSrc: string;
  widthRatio: string;
  aspectRatio: string;
}

interface bannerItemsType {
  BannerItems: dataType[];
  Banner: bannerType[];
  ColumnLabels: string[];
  BannerLabels: string[];
}

const BannerItems = () => {
  const [prevShow, setPrevShow] = useState(false);

  const { data, isLoading, isError } = useGetUI<bannerItemsType>("bannerItems");

  const ItemInitialObject = {
    _id: "",
    imgSrc: "",
    alt: "",
    name: "",
    brand: "",
    price: 0,
  };
  const BannerInitialObject = {
    _id: "",
    imgSrc: "",
    alt: "",
    detail: "",
    linkSrc: "",
    widthRatio: "",
    aspectRatio: "",
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>데이터 가져오다 에러</div>;
  }

  if (!data) {
    return <div>데이터가 없는 경우</div>;
  }

  return (
    <div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 "
        onClick={() => setPrevShow(!prevShow)}
      >
        미리보기
      </button>
      {prevShow && (
        <>
          {data.Banner.length > 0 && <Banner data={data.Banner[0]} />}
          <SmallCarousel data={data.BannerItems} />
        </>
      )}

      <div className="flex flex-col gap-[2rem]">
        <span>Banner </span>
        <ItemTable<bannerType>
          columnLabels={data.BannerLabels}
          data={data.Banner}
          category="banner"
          initialValue={BannerInitialObject}
        />
        <span> Items </span>
        <ItemTable<dataType>
          columnLabels={data.ColumnLabels}
          data={data.BannerItems}
          category="bannerItems"
          initialValue={ItemInitialObject}
        />
      </div>
    </div>
  );
};

export default BannerItems;
