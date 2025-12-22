"use client";

import React, { use } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
import HeaderTop from "./HeaderTop";
import Image from "next/image";
import { FaBell } from "react-icons/fa6";
import CartElement from "./CartElement";
import HeartElement from "./HeartElement";
import SearchInput from "./SearchInput";

const Header = () => {
  //const { data: session }: any = useSession();
  const pathname = usePathname();

  const handleSignOut = async () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Sign out successful!");
  };

  const getWishlistByUserId = () => {
    // Fetch wishlist data based on user ID
  };

  const getUserByEmail = () => {
    // Fetch user data based on email
  };

  return (
    <header className="bg-white">
      <HeaderTop />
      {pathname.startsWith("/admin") ? null : (
        <div className="h-32 bg-white flex items-center justify-between px-16 max-[1320px]:px-16 max-md:px-6 max-lg:flex-col max-lg:gap-y-7 max-lg:justify-center max-lg:h-60 max-w-screen-2xl mx-auto">
          <Link href="/">
            <img src="/logo v1 svg.svg" alt="Logo" width={300} height={300} className="relative right-5 max-[1023px]:w-56" />
          </Link>
          <SearchInput />
          <div className="flex items-center gap-x-10">
            <HeartElement />
            <CartElement />
            <FaBell className="text-gray-600 cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
