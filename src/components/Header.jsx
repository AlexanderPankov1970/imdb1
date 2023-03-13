import React from "react";
import Link from "next/link";
import { ImHome } from "react-icons/im";
import { BsFillInfoCircleFill } from "react-icons/bs";
//import { AiFillHome } from "react-icons/ai";
import MenuItem from "./MenuItem";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={ImHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/" className="">
          <h2 className="mr-5">
            <span className="font-bold mr-1 bg-amber-500 py-1 px-1 rounded-lg">
              IMDB
            </span>
            <span className="hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
