import React from "react";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="flex justify-center dark:bg-gray-500 bg-amber-100 p-4 lg:text-lg">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
