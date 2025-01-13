"use client";

import { useRouter } from "next/navigation";

const MenuItem = ({ href, label, onShowMenu }) => {
  const router = useRouter();
  const handleNavigate = () => {
    onShowMenu(false);
    router.push(href);
  };
  return (
    <button onClick={handleNavigate} className="w-full">
      <li className="w-full text-left px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
        {label}
      </li>
    </button>
  );
};

export default MenuItem;
