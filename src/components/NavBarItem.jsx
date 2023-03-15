"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  //console.log(1111111, genre);

  return (
    <div>
      <Link
        className={`m-4  hover:text-green-400 font-bold p-2 ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-green-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
