import React, { useEffect, useState } from "react";
import MainCarousel from "@/components/uiManager/MainCarousel";
import ItemTable from "@/components/ItemTable";
import { getMainUIAPI } from "@/api/Ui";

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

  const initialObject = {
    _id: "",
    imgSrc: "",
    alt: "",
    detail: "",
  };

  const [data, setData] = useState<MainCarouseType>({
    MainBanner: [],
    ColumnLabels: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMainUIAPI("mainCarousel");
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
