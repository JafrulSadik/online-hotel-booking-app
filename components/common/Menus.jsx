"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaLanguage, FaUser } from "react-icons/fa6";

const Menus = ({ session }) => {
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <div className="flex items-center space-x-4 relative justify-end group/profile">
      <button>
        <FaLanguage className="text-zinc-700 text-xl size-7" />
      </button>
      <button
        onClick={() => setProfileMenu((prev) => !prev)}
        className="bg-white border border-zinc-300 text-zinc-800 px-4 py-2 rounded-full hover:shadow-md flex gap-3 items-center justify-center"
      >
        <FaBars />
        {!session?.user?.image ? (
          <span className="bg-zinc-600 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white">
            <FaUser className="text-white" />
          </span>
        ) : (
          <Image
            src={session?.user?.image}
            height={20}
            width={20}
            className="h-6 w-6 rounded-full"
            alt="User Image"
          />
        )}
      </button>

      {
        <div
          className={`max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50 ${
            profileMenu ? "block" : "lg:hidden"
          }`}
        >
          {!session?.user ? (
            <ul className="">
              <Link href="/login" className="w-full">
                <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                  Login
                </li>
              </Link>

              <Link href="/register" className="w-full">
                <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                  Signup
                </li>
              </Link>

              <Link href="#" className="w-full">
                <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                  Help
                </li>
              </Link>
            </ul>
          ) : (
            <ul className="">
              <Link href="/login" className="w-full">
                <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                  {session?.user?.name}
                </li>
              </Link>

              <Link href="/user/manage-hotels" className="w-full">
                <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                  Manage Hotels
                </li>
              </Link>

              <Link href="/user/bookings" className="w-full">
                <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                  Bookings
                </li>
              </Link>

              <Link href="#" className="w-full">
                <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                  Help
                </li>
              </Link>
              <button
                onClick={() => signOut()}
                className="w-full bg-gray-100 rounded-b-md "
              >
                <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                  Logout
                </li>
              </button>
            </ul>
          )}
        </div>
      }
    </div>
  );
};

export default Menus;
