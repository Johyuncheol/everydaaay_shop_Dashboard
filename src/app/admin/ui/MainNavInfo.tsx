import React, { useEffect, useState } from "react";
import MainNav from "@/components/uiManager/MainNav";
import ItemTable from "@/components/ItemTable";
import { useGetUI } from "@/api/useUIService";

interface dataType {
  imgSrc: string;
  alt: string;
  detail: string;
  linkSrc: string;
  widthRatio: string;
  aspectRatio: string;
}
interface MainNavType {
  MainNav: dataType[];
  ColumnLabels: string[];
}

const MainNavInfo = () => {
  const [prevShow, setPrevShow] = useState(false);

  const { data, isLoading, isError } = useGetUI<MainNavType>("mainNav");

  const initialObject = {
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
      {prevShow && <MainNav data={data.MainNav} />}

      <span>main Naivagation</span>
      <ItemTable<dataType>
        columnLabels={data.ColumnLabels}
        data={data.MainNav}
        category="mainNav"
        initialValue={initialObject}
      />
    </div>
  );
};

export default MainNavInfo;
