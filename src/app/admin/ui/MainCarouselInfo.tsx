import React, { useEffect, useState } from "react";
import MainCarousel from "@/components/uiManager/MainCarousel";
import ItemTable from "@/components/ItemTable";
import UIService from "@/api/Ui";
import { useGetUI } from "@/api/useUIService";

interface dataType {
  _id: string;
  imgSrc: string;
  alt: string;
  detail: string;
}
interface MainCarouseType {
  MainBanner: dataType[];
  ColumnLabels: string[];
}
const MainCarouselInfo = () => {
  const [prevShow, setPrevShow] = useState(false);
  const { data, isLoading, isError } =
    useGetUI<MainCarouseType>("mainCarousel");

  const initialObject = {
    _id: "",
    imgSrc: "",
    alt: "",
    detail: "",
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
      {prevShow && <MainCarousel data={data.MainBanner} />}

      <span>main Carousel</span>
      <ItemTable<dataType>
        columnLabels={data.ColumnLabels}
        data={data.MainBanner}
        category={"mainCarousel"}
        initialValue={initialObject}
      />
    </div>
  );
};

export default MainCarouselInfo;
