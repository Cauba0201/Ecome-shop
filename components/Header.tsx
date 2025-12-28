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
      {pathname.startsWith("/admin") === true && (
        <div className="flex justify-between h-32 bg-white items-center px-16 max-[1320px]:px-10  max-w-screen-2xl mx-auto max-[400px]:px-5">
          <Link href="/">
            <Image
              src="/logo v1.png"
              width={130}
              height={130}
              alt="singitronic logo"
              className="w-56 h-auto"
            />
          </Link>
          <div className="flex gap-x-5 items-center">
            {/* <NotificationBell /> */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="w-10">
                <Image
                  src="/randomuser.jpg"
                  alt="random profile photo"
                  width={30}
                  height={30}
                  className="w-full h-full rounded-full"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/admin">Dashboard</Link>
                </li>
                <li>
                  <a>Profile</a>
                </li>
                <li >
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
