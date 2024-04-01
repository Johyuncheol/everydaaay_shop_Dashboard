import React from "react";
import FigureLinkBox from "@/components/FigureLinkBox/FigureLinkBox";

interface MainNavProps {
  imgSrc: string;
  alt: string;
  detail: string;
  linkSrc: string;
  widthRatio: string;
  aspectRatio: string;
}
const MainNav = ({data}:{data:MainNavProps[]}) => {
  return (
    <div className="flex  gap-[1rem]">
      {data.map((item, index) => {
        return <FigureLinkBox data={item} key={index} />;
      })}
    </div>
  );
};

export default MainNav;
