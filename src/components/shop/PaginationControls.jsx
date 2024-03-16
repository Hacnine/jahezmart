"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

const PaginationControls = ({ totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") ?? "1";

  const handlePrevClick = () => {
    if (currentPage > 1) {
      router.push(`shop/?page=${Number(currentPage) - 1}`);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      router.push(`shop/?page=${Number(currentPage) + 1}`);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          className=" p-1 text-gray-100 rounded-md bg-gray-300 hover:bg-gray-400 focus:outline-none size-8 center"
        >
          <MdChevronLeft className="h-5 w-5" />
        </button>
        <button className="mx-2 p-1 text-gray-600 hover:text-gray-500 rounded-md border hover:bg-gray-200 focus:outline-none size-8 center">
          {currentPage}
        </button>
        <button className="mr-2 p-1 text-gray-600 hover:text-gray-500 rounded-md border hover:bg-gray-200 focus:outline-none size-8 center">
          of
        </button>
        <button className="mr-2 p-1 text-gray-600 hover:text-gray-500 rounded-md border hover:bg-gray-200 focus:outline-none size-8 center">
          {totalPages}
        </button>
        <button
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
          className="ml-2 p-1 text-gray-100 rounded-md bg-gray-300 hover:bg-gray-400 focus:outline-none size-8 center"
        >
          <MdChevronRight className="h-5 w-5" />
        </button>
      </div>
    </>
  );
};
export default PaginationControls;
