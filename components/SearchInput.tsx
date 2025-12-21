"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { sanitize } from "@/lib/sanitize";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedSearch = sanitize(searchInput);
    router.push(`/search?query=${encodeURIComponent(sanitizedSearch)}`);
    setSearchInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full justify-center">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search products..."
        className="bg-gray-50 input input-boardered w-[70%] rouded-r-none outline-none focus:outline-none max-sm:w-full"
      />
      <button
        type="submit"
        className="btn bg-blue-50 text-white px-4 py-2 rounded-l-none rounded-r-xl hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
