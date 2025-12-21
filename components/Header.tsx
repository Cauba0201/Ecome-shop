"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
import HeaderTop from "./HeaderTop";
import Image from "next/image";
import { FaBell } from "react-icons/fa6";


const Header = () => {
  return (
    <div>
      <HeaderTop />
    </div>
  );
};

export default Header;
