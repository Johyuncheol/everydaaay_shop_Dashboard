import React, { Dispatch } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-300 drop-shadow-1 ">
      <div className="flex items-center justify-between px-4 py-4 ">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            className={`block flex-shrink-0 ${
              sidebarOpen && "hidden"
            } font-bold`}
            href="/"
          >
            <div className="flex items-center justify-center text-slate-100 font-semibold text-xl">
              <h5 className="bg-black p-2 cursor-pointer">everydaaay</h5>
            </div>
          </Link>
        </div>
        <div className="flex gap items-center justify-between px-4 py-4 gap-3">
          <div>다크모드</div>
          <div>알람</div>
          <div>채팅</div>
          <div>로그인</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
