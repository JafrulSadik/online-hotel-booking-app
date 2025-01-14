"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Pagination = ({ pagination }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-8 flex justify-center">
      <nav aria-label="Page navigation">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              disabled={pagination.previousPage === null}
              onClick={() => handlePageChange(pagination.previousPage)}
              className="block py-2 px-3 ml-0 leading-tight text-zinc-500 bg-white rounded-l-lg border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
            >
              <span className="sr-only">Previous</span>
              <FaChevronLeft />
            </button>
          </li>

          {Array.from({ length: pagination.totalPages }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`py-2 px-3 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 ${
                  page === (index + 1).toString() ? "bg-zinc-200" : ""
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}

          <li>
            <button
              disabled={pagination.nextPage === null}
              onClick={() => handlePageChange(pagination.nextPage)}
              className="block py-2 px-3 leading-tight text-zinc-500 bg-white rounded-r-lg border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
            >
              <span className="sr-only">Next</span>
              <FaChevronRight />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
