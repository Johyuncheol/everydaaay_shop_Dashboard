import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-md border bg-white px-7 py-6 shadow-default ">
      <div className="flex h-11.5 w-11.5 items-center  rounded-full  ">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between ">
        <div>
          <h4 className="text-title-md font-bold text-black">{total}</h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && "text-red-500"
          } ${levelDown && "text-cyan-700"} `}
        >
          {rate}

          {levelUp && "▲"}
          {levelDown && "▼"}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
