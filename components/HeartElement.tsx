"use client";

import React from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

const HeartElement = () => {
  return (
    <div className="relative">
      <Link href="/wishlist">
        <FaHeart className="text-2xl text-black" />
      </Link>
    </div>
  );
};

export default HeartElement;
