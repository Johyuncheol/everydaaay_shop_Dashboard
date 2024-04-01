import React, { useState } from "react";
import SmallCarousel from "@/components/uiManager/SmallCarousel";
import ItemTable from "@/components/ItemTable";
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

interface bannerDataType {
  _id: string;
  imgSrc: string;
  alt: string;
  detail: string;
  linkSrc: string;
  widthRatio: string;
  aspectRatio: string;
}

interface bannerType {
  Banner: bannerDataType[];
  BannerLabels: string[];
}

interface bannerItemsType {
  BannerItems: dataType[];
  ColumnLabels: string[];
}

const BannerItems = () => {
  const [prevShow, setPrevShow] = useState(false);

  const {
    data: bannerData,
    isLoading: bannerLoading,
    isError: bannerError,
  } = useGetUI<bannerType>("banner");

  const {
    data: bannerItemsData,
    isLoading: bannerItemsLoading,
    isError: bannerItemsError,
  } = useGetUI<bannerItemsType>("bannerItems");

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

  if (bannerLoading || bannerItemsLoading) {
    return <div>Loading...</div>;
  }

  if (bannerError || bannerItemsError) {
    return <div>데이터 가져오다 에러</div>;
  }

  if (!bannerData || !bannerItemsData) {
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
          {bannerData.Banner.length > 0 && (
            <Banner data={bannerData.Banner[0]} />
          )}
          <SmallCarousel data={bannerItemsData.BannerItems} />
        </>
      )}

      <div className="flex flex-col gap-[2rem]">
        <span>Banner </span>
        <ItemTable<bannerDataType>
          columnLabels={bannerData.BannerLabels}
          data={bannerData.Banner}
          category="banner"
          initialValue={BannerInitialObject}
        />
        <span> Items </span>
        <ItemTable<dataType>
          columnLabels={bannerItemsData.ColumnLabels}
          data={bannerItemsData.BannerItems}
          category="bannerItems"
          initialValue={ItemInitialObject}
        />
      </div>
    </div>
  );
};

export default BannerItems;
