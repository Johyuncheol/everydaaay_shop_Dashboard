import React from "react";

interface DataType {
  imgSrc: string;
  alt: string;
  detail?: string;
  linkSrc: string;
  widthRatio: string;
  aspectRatio: string;
}

interface FigureLinkBoxProps {
  data: DataType;
}

const FigureLinkBox: React.FC<FigureLinkBoxProps> = ({ data }) => {
  const movePage = (path: string) => {
    window.location.href = path;
  };

  return (
    <figure
      className={` aspect-[1/0.8] m-0 relative cursor-pointer`}
      onClick={() => movePage(data.linkSrc)}
    >
      <img src={data.imgSrc} alt={data.alt} className="w-full h-full object-cover" />
      <pre className="absolute bottom-0 left-5 text-white font-semibold text-lg">{data.detail}</pre>
    </figure>
  );
};

export default FigureLinkBox;
