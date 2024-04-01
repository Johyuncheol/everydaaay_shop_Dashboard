import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
  },
  colors: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
  labels: ["Desktop", "Tablet", "Mobile", "Unknown"],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: "100%",
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: "100%",
        },
      },
    },
  ],
};

const ChartThree: React.FC<{ type: string }> = ({ type }) => {
  const [state, setState] = useState<ChartThreeState>({
    series: [65, 34, 12, 56],
  });

  return (
    <div className=" bg-white  shadow-default rounded-md border p-3 ">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black">{type}</h5>
        </div>
        <div></div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-8">
        <p className="flex justify-between text-sm font-medium text-black">
          <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#3C50E0]"></span>
          <span> Desktop </span>
          <span> 65% </span>
        </p>

        <p className="flex justify-between text-sm font-medium text-black">
          <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
          <span> Tablet </span>
          <span> 34% </span>
        </p>

        <p className="flex justify-between text-sm font-medium text-black">
          <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
          <span> Mobile </span>
          <span> 45% </span>
        </p>

        <p className="flex w-full justify-between text-sm font-medium text-black">
          <span className=" h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
          <span> Unknown </span>
          <span> 12% </span>
        </p>
      </div>
    </div>
  );
};

export default ChartThree;
