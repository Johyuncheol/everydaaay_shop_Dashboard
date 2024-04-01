import React, { useState, useEffect } from "react";
import SmallCarousel from "@/components/uiManager/SmallCarousel";
import ItemTable from "@/components/ItemTable";
import UIService from "@/api/Ui";
import { useGetUI } from "@/api/useUIService";

interface dataType {
  _id: string;
  imgSrc: string;
  alt: string;
  name: string;
  brand: string;
  price: number;
}
interface HotItemsType {
  HotItems: dataType[];
  ColumnLabels: string[];
}

const HotItemsInfo = () => {
  const [prevShow, setPrevShow] = useState(false);
  const { data, isLoading, isError } = useGetUI<HotItemsType>("hotItems");

  const initialObject = {
    _id: "",
    imgSrc: "",
    alt: "",
    name: "",
    brand: "",
    price: 0,
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
      {prevShow && <SmallCarousel data={data.HotItems} />}

      <span>Hot Items</span>

      <ItemTable<dataType>
        columnLabels={data.ColumnLabels}
        data={data.HotItems}
        category="hotItems"
        initialValue={initialObject}
      />
    </div>
  );
};

export default HotItemsInfo;
