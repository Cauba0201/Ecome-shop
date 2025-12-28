"use client";

import React from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";


const CartElement = () => {
  return (
    <div className="relative">
      <Link href="/cart">
        <FaCartShopping className="text-2xl text-[#fff]" />
        <span className="block w-6 h-6 bg-blue-600 text-white rounded-full flex justify-center items-center absolute top-[-17px] right-[-22px]"></span>
      </Link>
    </div>
  );
};

export default CartElement;
