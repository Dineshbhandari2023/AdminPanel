import React, { useState, useEffect } from "react";
import profile from "../assets/asset 1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiXMark } from "react-icons/hi2";

function Topbar({ toggleSideMenu }) {
  return (
    <div className="flex h-10 justify-between items-center bg-white dark:bg-slate-950 p-4 shadow-xl">
      <button
        onClick={toggleSideMenu}
        className="relative mt-1 lg:hidden dark:text-purple-700"
      >
        <RxHamburgerMenu />
        <HiXMark />
      </button>

      <div></div>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-white rounded-full">
          <img className="rounded-full" src={profile} alt="" />
        </div>
        <span className="ml-2 text-sm dark:text-white">Mr. Dinesh</span>
      </div>
    </div>
  );
}

export default Topbar;
