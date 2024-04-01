import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { DayOptionsManager } from "./Options/test";

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC<{ type: string }> = ({ type }) => {
  const [period, setPeriod] = useState<string>("week");
  const [options, setOptions] = useState<ApexOptions>({});
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: "Product One",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },

      {
        name: "Product Two",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
    ],
  });

  const handlePeriodChange = (type: string) => {
    setPeriod(type);
  };

  useEffect(() => {
    // 새로운 카테고리 배열
    if (period === "year") {
      const newCategories = ["2020", "2021", "2022", "2023", "2024"];
      DayOptionsManager.updateCategories(newCategories);
      setOptions({ ...DayOptionsManager.options });
    } else if (period === "week") {
      const newCategories = [
        "1s",
        "2",
        "3",
        "4",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
      ];
      DayOptionsManager.updateCategories(newCategories);
      setOptions({ ...DayOptionsManager.options });
    } else if (period === "month") {
      const newCategories = ["Mon", "Tue", "Wen", "Thir", "Fry", "Sat", "Sun"];

      DayOptionsManager.updateCategories(newCategories);
      setOptions({ ...DayOptionsManager.options });
    }

    // 새로운 카테고리로 업데이트

    //console.log(options);
  }, [period]);

  useEffect(() => {
    console.log(options);
  }, [options]);

  return (
    <div className=" bg-white  shadow-default rounded-md border p-3 ">
      <div className="flex w-full max-w-45 justify-between">
        <h5 className="text-xl font-semibold text-black">{type}</h5>

        <div>
          <button
            onClick={() => handlePeriodChange("week")}
            className={`rounded ${
              period === "week" ? "bg-slate-500" : "bg-white"
            } px-3 py-1 text-xs font-medium hover:underline`}
          >
            Week
          </button>
          <button
            onClick={() => handlePeriodChange("month")}
            className={`rounded ${
              period === "month" ? "bg-slate-500" : "bg-white"
            } px-3 py-1 text-xs font-medium hover:underline`}
          >
            Month
          </button>
          <button
            onClick={() => handlePeriodChange("year")}
            className={`rounded ${
              period === "day" ? "bg-slate-500" : "bg-white"
            } px-3 py-1 text-xs font-medium hover:underline`}
          >
            Year
          </button>
        </div>
      </div>
      <div id="chartOne">
        <ReactApexChart
          key={JSON.stringify(options)} // 강제 리랜더링
          options={options}
          series={state.series}
          type="area"
          height={350}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default ChartOne;
