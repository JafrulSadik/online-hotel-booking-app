import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Menus from "./Menus";
import Search from "./Search";

const Navbar = async ({ authPage, lang }) => {
  return (
    <nav className="grid grid-cols-2 md:flex justify-between items-center py-3 bg-white border-b mb-6 md:gap-8 px-4 md:px-8 lg:px-20">
      <div className="flex items-center">
        <Link href={`/${lang}`}>
          <Image
            src={Logo}
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
          <Menus lang={lang} />
        </>
      )}
    </nav>
  );
};

export default Navbar;
