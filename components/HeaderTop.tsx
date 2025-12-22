"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";

const HeaderTop = () => {
  //const { data: session }: any = useSession();

  const handleSignOut = async () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Sign out successful!");
  };

  return (
    <div className="h-10 text-white bg-blue-500 max-lg:px-5 max-lg:h-16 max-[573px]:px-0">
      <div className="flex justify-between h-full max-lg:flex-col max-lg:justify-center max-lg:items-center max-w-screen-2xl mx-auto px-12 max-[573px]:px-0">
        <ul className="flex items-center h-full gap-x-5 max-[370px]:text-sm max-[370px]:gap-x-2">
          <li className="flex items-center gap-x-2 font-semibold">
            <FaHeadphones className="text-white" />
            <span>+84 12345678</span>
          </li>
          <li className="flex items-center gap-x-2 font-semibold">
            <FaRegEnvelope className="text-white text-xl" />
            <span>nguyenvanan@gmail.com</span>
          </li>
        </ul>
        <ul className="flex items-center h-full gap-x-5 max-[370px]:text-sm max-[370px]:gap-x-2">
          {/* {session ? ( */}
            <>
              <li className="flex items-center">
                <Link
                  href="/login"
                  className="flex items-center gap-x-2 font-semibold"
                >
                  <FaRegUser className="text-white" />
                  <span>Login</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/register"
                  className="flex items-center gap-x-2 font-semibold"
                >
                  <FaRegUser className="text-white" />
                  <span>Register</span>
                </Link>
              </li>
            </>
          {/* ) : ( */}
            <>
              {/* <span>{session.user?.name}</span> */}
              <li className="flex items-center">
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-x-2 font-semibold"
                >
                  <FaRegUser className="text-white" />
                  <span>Logout</span>
                </button> 
              </li>
            </>
          {/* )} */}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
