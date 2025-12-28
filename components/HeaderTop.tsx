"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import SearchInput from "./SearchInput";
import HeartElement from "./HeartElement";
import CartElement from "./CartElement";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";

const HeaderTop = () => {
  //const { data: session }: any = useSession();

  const handleSignOut = async () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Sign out successful!");
  };

  return (
    <div className="h-10 text-[#fff] bg-[#000] max-lg:px-5 max-lg:h-16 max-[573px]:px-0">
      <div className="flex justify-between h-full max-lg:flex-col max-lg:justify-center max-lg:items-center max-w-screen-2xl mx-auto px-12 max-[573px]:px-0">
        <ul className="flex items-center h-full gap-x-5 max-[370px]:text-sm max-[370px]:gap-x-2">
          <li className="flex items-center gap-x-2 font-semibold">
            <IoMenu className="text-white" />
            <span>Menu</span>
          </li>
          {/* <li className="flex items-center gap-x-2 font-semibold">
            <SearchInput />
          </li> */}
        </ul>
        <ul className="flex items-center h-full gap-x-5 max-[370px]:text-sm max-[370px]:gap-x-2">
          <li className="flex items-center gap-x-2 font-semibold">
            <Link href="/">
              <Image
                src="/logo v1.png"
                width={130}
                height={130}
                alt="singitronic logo"
                className="w-56 h-auto"
              />
            </Link>
          </li>
        </ul>
        <ul className="flex items-center h-full gap-x-5 max-[370px]:text-sm max-[370px]:gap-x-2">
          {/* {session ? ( */}
          <>
            <li className="flex items-center ">
              <Link
                href="/login"
                className="flex items-center gap-x-2 font-semibold"
              >
                <FaRegUser className="text-[#fff]" />
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/favorite"
                className="flex items-center gap-x-2 font-semibold"
              >
                <HeartElement />
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/cart"
                className="flex items-center gap-x-2 font-semibold"
              >
                <CartElement />
              </Link>
            </li>
          </>
          {/* ) : ( */}

          {/* )} */}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
