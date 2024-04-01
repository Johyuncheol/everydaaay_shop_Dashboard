import React, { useEffect, useState } from "react";
import MainNav from "@/components/uiManager/MainNav";
import ItemTable from "@/components/ItemTable";
import { getMainUIAPI } from "@/api/Ui";

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
  const initialObject = {
    imgSrc: "",
    alt: "",
    detail: "",
    linkSrc: "",
    widthRatio: "",
    aspectRatio: ""
  };
  const [data, setData] = useState<MainNavType>({
    MainNav: [],
    ColumnLabels: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMainUIAPI("mainNav");
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
