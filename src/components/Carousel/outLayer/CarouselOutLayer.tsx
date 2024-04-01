import React, { useEffect } from "react";

const CarouselOutLayer: React.FC<{
  children: React.ReactNode;
  width: string;
  ratio: string;
  maxHeight?: string;
  maxWidth?: string;
}> = ({ children, width, ratio, maxHeight = "", maxWidth = "" }) => {
  return (
    <>
      {maxHeight !== "" ? (
        <section
          className={`flex w-full aspect-[2/1]  max-h-[400px] bg-transparent overflow-hidden relative shadow-lg`}
        >
          {children}
        </section>
      ) : (
        <section
          className={`flex w-full aspect-[2/1]  bg-transparent overflow-hidden relative shadow-lg`}
        >
          {children}
        </section>
      )}
    </>
  );
};

export default CarouselOutLayer;
