import React, { useState, useEffect } from "react";
import SmallCarousel from "@/components/uiManager/SmallCarousel";
import ItemTable from "@/components/ItemTable";
import { getMainUIAPI } from "@/api/Ui";

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

  const initialObject = {
    _id: "",
    imgSrc: "",
    alt: "",
    name: "",
    brand: "",
    price: 0,
  };

  const [data, setData] = useState<HotItemsType>({
    HotItems: [],
    ColumnLabels: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMainUIAPI("hotItems");
      setData(res);
    };

    fetchData();
  }, []);

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