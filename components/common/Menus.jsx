"use client";

import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { FaBars, FaLanguage } from "react-icons/fa6";
import MenuList from "./MenuList";
import NavProfileImage from "./NavProfileImg";

const Menus = ({ lang }) => {
  const [showMenu, setShowMenu] = useState(false);
  const session = useSession();
  const user = session?.data?.user;

  const handleSignOut = () => {
    signOut({ callbackUrl: `/${lang}/login` });
  };

  return (
    <div className="flex items-center space-x-4 relative justify-end group/profile">
      <button>
        <FaLanguage className="text-zinc-700 text-xl size-7" />
      </button>

      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="bg-white border border-zinc-300 text-zinc-800 px-4 py-2 rounded-full hover:shadow-md flex gap-3 items-center justify-center"
      >
        <FaBars />
        <NavProfileImage userImage={user?.image} />
      </button>

      {showMenu && (
        <div className="max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50">
          <MenuList
            lang={lang}
            user={user}
            handleSignOut={handleSignOut}
            onShowMenu={setShowMenu}
          />
        </div>
      )}
    </div>
  );
};

export default Menus;
