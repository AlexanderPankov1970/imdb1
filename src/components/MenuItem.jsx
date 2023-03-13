import Link from "next/link";
import React from "react";

function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-green-400 flex">
        <Icon className="text-2xl sm:hidden mx-1 my-2" />
        <p className="hidden sm:inline my-2 text-2xl">{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
