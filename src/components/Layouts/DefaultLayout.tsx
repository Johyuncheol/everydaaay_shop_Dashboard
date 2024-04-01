"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <button
        className={`absolute bottom-[10%]  z-[99] bg-black/60 text-slate-50 font-bold left-[1rem] ${
          sidebarOpen && "left-[13rem]"
        }`}
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        {sidebarOpen ? "<<" : ">>"}
      </button>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-zinc-400">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
