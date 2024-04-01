import React from "react";
import useOpen from "@/hooks/useOpen";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface LinkObjectProps {
  name: string;
  path: string;
}

interface LinkGroupCardProps {
  rootPath: string;
  LinkObject: LinkObjectProps[];
}

const LinkGroupCard = ({ rootPath, LinkObject }: LinkGroupCardProps) => {
  const pathname = usePathname();
  const activeCondition = pathname === "/" || pathname.includes(rootPath);
  const { handleClick, open } = useOpen(activeCondition);

  return (
    <>
      <div
        className="flex w-full justify-between pr-[1rem] cursor-pointer"
        onClick={() => handleClick()}
      >
        <Link href="#" className={`flex items-center gap-2.5  px-4 py-2 `}>
          {rootPath}
        </Link>
        <span className={`${!open && "rotate-90"}`}>{"▼"}</span>
      </div>

      <div
        className={`translate transform overflow-hidden ${!open && "hidden"}`}
      >
        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-[3rem]">
          {LinkObject.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`  flex items-center gap-2.5  px-4s  ${
                    pathname === item.path && "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default LinkGroupCard;
