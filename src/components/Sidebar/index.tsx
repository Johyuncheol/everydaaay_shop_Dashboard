"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LinkGroupCard from "./LinkGroupCard";
import Link from "next/link";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const sidebar = useRef<any>(null);

  const dataaa = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "Main UI Mananger",
      path: "/admin/ui",
    },
  ];

  const Branddataaa = [
    {
      name: "Brand1",
      path: "/brand/Brand1",
    },
    {
      name: "Brand2",
      path: "/brand/Brand2",
    },
  ];

  return (
    <aside
      ref={sidebar}
      className={`absolute z-[90] left-0 top-0 h-screen w-[15rem] overflow-y-hidden bg-zinc-500  lg:static  ${
        !sidebarOpen && "hidden"
      }`}
    >
      <Link className={`block flex-shrink-0  font-bold`} href="/">
        <div className="flex items-center justify-center pt-[2rem] mb-[2rem] text-slate-100 font-semibold text-xl">
          <h5 className="bg-black p-2 cursor-pointer">everydaaay</h5>
        </div>
      </Link>
      <LinkGroupCard rootPath={"Admin"} LinkObject={dataaa} />
      {/*       <LinkGroupCard rootPath={"Brand"} LinkObject={Branddataaa} />
       */}{" "}
    </aside>
  );
};

export default Sidebar;
