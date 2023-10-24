import React from "react";
import MovieCard, { IMovieCard } from "@/components/MovieHomepage/MovieCard";
import Paginate from "@/components/MovieHomepage/Paginate";


type Props = {
  searchParams?: {
    page?: number;
  };
};

async function getTopRatedMovies(page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_API_KEY}&language=en-US&page=${page}`
  );
  return res.json();
}

const page = async ({ searchParams }: Props) => {
  const page = searchParams?.page || 1;

  const topRatedMovies = await getTopRatedMovies(page);

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">Top Rated Movies</h1>
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-3 lg:gap-y-3">
          {topRatedMovies.results.map((movie: IMovieCard) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
        <Paginate
          currentPage={page < 1 || page > topRatedMovies.total_pages ? 1 : page}
          totalPages={topRatedMovies.total_pages}
          pageType="top-rated"
        />
      </div>
    </main>
  );
};

export default page;