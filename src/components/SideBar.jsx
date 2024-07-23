import React, { useState } from "react";
import { RiHomeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { TbCurrencyDollar } from "react-icons/tb";
import { TbPuzzleFilled } from "react-icons/tb";

import logo from "../assets/asset 0.png";
import searchIcon from "../assets/asset 4.svg";

function Sidebar() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  
  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const Link = [
    {
      name: "Dashboard",
      icon: <RiHomeFill className="mt-1 mx-3" />,
      link: "/Dashboard",
    },
    {
      name: "Features",
      icon: <FaStar className="mt-1 mx-3" />,
      link: "/features",
    },
    {
      name: "User",
      icon: <FaUser className="mt-1 mx-3" />,
      link: "/User",
    },
    {
      name: "Pricing",
      icon: <TbCurrencyDollar className="mt-1 mx-3" />,
      link: "/Pricing",
    },
    {
      name: "Support",
      icon: <TbPuzzleFilled className="mt-1 mx-3" />,
      link: "/Support",
    },
  ];
  return (
    <div className="w-1/4 bg-white dark:bg-slate-950 p-3 shadow-lg">
      <div className="m-4 p-1 flex items-center mb-4 shadow-md rounded-md">
        <img src={logo} alt="Logo" className="h-6 w-6" />
        <span className="ml-2 p-2 font-bold text-md dark:text-white tracking-widest">
          Darkdash X
        </span>
      </div>
      <div>
        {/* Search Icon */}
        <img
          src={searchIcon}
          alt="Search Icon"
          className="absolute ml-4 mt-3.5 size-3 dark:text-white"
        />
        <input
          className="mx-2 my-2 justify-end border border-gray-100 text-xs text-start pl-7 w-48 h-7 rounded-sm bg-white dark:bg-slate-900 dark:text-white tracking-wider"
          type="text"
          placeholder="Search for ..."
        />
      </div>
      <div className="flex justify-center mt-5">
        <ul className="text-sm justify-start tracking-tigher font-semibold">
          {
            Link.map((link) => (
              <li
                key={link.name}
                className="flex ml-5 p-2 w-60 dark:text-purple-700 dark:hover:bg-slate-900 rounded-md cursor-pointer mb-5"
              >
                {link.icon}
                {link.name}
              </li>
            ))

            // <li className="flex ml-5 p-2 w-60 dark:text-purple-700 dark:hover:bg-slate-900 rounded-md cursor-pointer mb-5">
          }
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
