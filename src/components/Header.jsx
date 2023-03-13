import React from "react";
import MenuItem from "./MenuItem";
import { ImHome } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={ImHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div>
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
