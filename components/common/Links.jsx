import Link from "next/link";

const Links = () => {
  return (
    <ul className="">
      <Link href={`/${lang}/login`} className="w-full">
        <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
          Login
        </li>
      </Link>

      <Link href={`/${lang}/register`} className="w-full">
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
  );
};

export default Links;
