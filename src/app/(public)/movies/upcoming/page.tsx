import MovieCard, { IMovieCard } from "@/components/MovieHomepage/MovieCard";
import Paginate from "@/components/MovieHomepage/Paginate";
import React from "react";

type Props = {
  searchParams?: {
    page?: number;
  };
};

async function getUpcomingMovies(page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_API_KEY}&language=en-US&page=${page}`
  );
  return res.json();
}

const page = async ({ searchParams }: Props) => {
  const page = searchParams?.page || 1;

  const upcomingMovies = await getUpcomingMovies(page);

  return (
    <main className="mt-4">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">Upcoming Movies</h1>
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-3 lg:gap-y-3">
          {upcomingMovies.results.map((movie: IMovieCard) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
        <Paginate
          currentPage={page < 1 || page > upcomingMovies.total_pages ? 1 : page}
          totalPages={upcomingMovies.total_pages}
          pageType="upcoming"
        />
      </div>
    </main>
  );
};

export default page;