import Link from "next/link";

interface IPaginate {
  currentPage: number;
  totalPages: number;
  pageType: string;
}

const Paginate = ({ currentPage, totalPages, pageType }: IPaginate) => {
  return (
    <div className="flex justify-center gap-4 mt-6 mb-6">
      {currentPage > 1 && (
        <Link
          href={`/none-cache-movies/${pageType}/?page=${Number(currentPage) - 1}`}
          className="bg-indigo-600 px-6 py-2 rounded-md font-bold hover:bg-indigo-500"
        >
          Prev
        </Link>
      )}
      {currentPage < totalPages && (
        <Link
          href={`/none-cache-movies/${pageType}/?page=${Number(currentPage) + 1}`}
          className="bg-indigo-600 px-6 py-2 rounded-md font-bold hover:bg-indigo-500"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Paginate;