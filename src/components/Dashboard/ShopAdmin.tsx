"use client";
import React from "react";
import LineChart from "../Charts/LineChart/LineChart";
/* import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne"; */
import CardDataStats from "../CardDataStats";
import ChartThree from "../Charts/ChartThree";
import Image from "next/image";
const ShopAdmin: React.FC = () => {
  return (
    <>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
          방문자
        </CardDataStats>
        <CardDataStats title="Total Profit" total="$45,2K" rate="4.35%" levelUp>
          매출
        </CardDataStats>
        <CardDataStats title="Total Product" total="2.450" rate="2.59%" levelUp>
          전체 상품수
        </CardDataStats>
        <CardDataStats title="Total Users" total="3.456" rate="0.95%" levelDown>
          전체 사용자
        </CardDataStats>
      </div>

      <div className="flex flex-col gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className=" grid  grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:gap-7.5">
          <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
            <ChartThree type={"유저 성별"} />
            <ChartThree type={"방문자 추이"} />
          </div>

          <LineChart type={"방문자 추이"} />
        </div>

        <LineChart type={"매출 추이"} />
        <LineChart type={"전체 사용자"} />
        <LineChart type={"전체상품수"} />
      </div>
    </>
  );
};

export default ShopAdmin;
