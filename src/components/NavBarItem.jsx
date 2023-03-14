//"use client";

import Link from "next/link";
import React from "react";
//import { useSearchParams } from "next/navigation";

export default function NavBarItem({ title, param }) {
  //   const searchParams = useSearchParams();
  //   const search = searchParams.get("search");
  //   console.log(1, search);
  return (
    <div>
      <Link
        className={`m-4  hover:text-green-400 font-bold p-2 underline`}
        href={`/?genre${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
