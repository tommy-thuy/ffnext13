import Link from 'next/link';
import React from 'react';
import MovieCard, { IMovieCard } from '../MovieCard';

const UpcomingMovies = ({ upcomingMovies }: { upcomingMovies: any }) => {
  return (
    <div className="flex flex-col mb-6">
      <div className="w-full mx-auto flex justify-between items-center mt-4 mb-4">
        <h1 className="text-2xl font-medium">Upcoming Movies</h1>
        <Link href="/movies/upcoming" className="py-2 px-5 bg-slate-800 text-md font-normal text-white">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-3 lg:gap-y-3">
        {upcomingMovies.results.slice(0, 4).map((movie: IMovieCard) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;
