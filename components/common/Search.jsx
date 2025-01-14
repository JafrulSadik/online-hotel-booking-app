"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set("search", searchTerm);
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="row-start-2 col-span-2 border-0 md:border flex shadow-sm hover:shadow-md transition-all md:rounded-full items-center px-2"
    >
      <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4 divide-x  md:px-2 flex-grow ">
        <div className="lg:col-span-3  ">
          <input
            type="text"
            placeholder="Where to?"
            className="px-3 py-2 w-full bg-transparent focus:outline-none  placeholder:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-primary w-9 h-9 rounded-full grid place-items-center text-sm text-center transition-all hover:brightness-90 shrink-0"
      >
        <FaSearch className="text-white" />
      </button>
    </form>
  );
};

export default Search;
