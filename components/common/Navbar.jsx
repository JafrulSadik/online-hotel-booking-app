import Image from "next/image";
import Link from "next/link";
import { FaBars, FaLanguage, FaUser } from "react-icons/fa6";
import Search from "./Search";

const Navbar = ({ authPage }) => {
  return (
    <nav className="grid grid-cols-2 md:flex justify-between items-center py-3 bg-white border-b mb-6 md:gap-8 px-4 md:px-8 lg:px-20">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Hotel Logo"
            className="h-8 w-auto"
            height={100}
            width={200}
          />
        </Link>
      </div>

      {!authPage && (
        <>
          <Search />

          <div className="flex items-center space-x-4 relative justify-end">
            <button>
              <FaLanguage className="text-zinc-700 text-xl size-7" />
            </button>
            <button className="bg-white border border-zinc-300 text-zinc-800 px-4 py-2 rounded-full hover:shadow-md flex gap-3 items-center justify-center">
              <FaBars />
              <span className="bg-zinc-600 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white">
                <FaUser className="text-white" />
              </span>
            </button>

            <div className="max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50 hidden lg:block">
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
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
