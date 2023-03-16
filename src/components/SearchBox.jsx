"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    console.log(888, search);
    router.push(`/search/${search}`);
    setSearch("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto 
    justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className=" w-full h-14 rounded-md
         placeholder-gray-700 outline-none
         bg-transparent flex-1"
      />
      <button
        disabled={!search}
        className="text-green-700 disabled:text-green-300"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
