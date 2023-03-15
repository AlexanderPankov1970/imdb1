import React from "react";
import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" alt="Loading..." width={100} height={100} />
    </div>
  );
}
